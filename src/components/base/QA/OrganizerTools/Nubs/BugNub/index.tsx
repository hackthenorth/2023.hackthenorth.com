import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

import Nub from "../";

import { Attachment, Priorities } from "./constants";
import ImageUpload from "./ImageUpload";
import { buildDescription } from "./utils/buildDescription";
import { submitIssue } from "./utils/submitIssue";
import { uploadImages } from "./utils/uploadImages";
import { useFormState } from "./utils/useFormState";

const SPINNING_FACES = [
  "https://emoji.slack-edge.com/T025KUF9Y/rotating-alex/f9aee7c14b74c436.gif",
  "https://emoji.slack-edge.com/T025KUF9Y/rotating-jenny/b1ea20e853e33562.gif",
  "https://emoji.slack-edge.com/T025KUF9Y/rotating-jackie/9f95d8673bb32c57.gif",
  "https://emoji.slack-edge.com/T025KUF9Y/rotating-steven/da26ba4156d085a5.gif",
  "https://emoji.slack-edge.com/T025KUF9Y/rotating-kelvin/577115c426914852.gif",
  "https://emoji.slack-edge.com/T025KUF9Y/rotating-rahul/f63ab4e0c7407ca1.gif",
  "https://emoji.slack-edge.com/T025KUF9Y/rotating-zafin/2bea9c25621de2b8.gif",
];

const Success = styled.div`
  color: green;
  text-align: center;
  padding: 5px;
  border: 1px solid green;
  border-radius: 5px;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const Face = styled.img`
  display: inline-block;
  width: ${Math.floor(100 / SPINNING_FACES.length)}%;
  position: relative;
  z-index: 1;
  &:hover {
    animation-name: rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(18);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
`;

export interface BugNubProps {
  repoName: string;
  token: string;
}

export default function BugNub(props: BugNubProps) {
  const descInputRef = useRef<HTMLTextAreaElement | null>(null);

  const {
    formValues: { title, userDescription, attachments, reporter, priority },
    setFormValue,
  } = useFormState();

  const [loading, setLoading] = useState<boolean>(false);
  const [successful, setSuccessful] = useState<string | null>(null);

  const autoFocus = useCallback(
    (element?: HTMLInputElement) => element && element.focus(),
    []
  );

  const onSubmit = useCallback(async () => {
    let imageUploadSuccess = false;
    let issueSubmitSuccess = false;
    try {
      const { success: uploadSuccess, images } = await uploadImages(
        title,
        attachments.map((a) => a.file)
      );
      imageUploadSuccess = uploadSuccess;

      if (uploadSuccess) {
        issueSubmitSuccess = await submitIssue({
          repoName: props.repoName,
          title,
          description: buildDescription(userDescription, images, reporter),
          priority: priority,
          token: props.token,
        });
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    return imageUploadSuccess && issueSubmitSuccess;
  }, [
    attachments,
    priority,
    props.repoName,
    props.token,
    reporter,
    title,
    userDescription,
  ]);

  const handleSubmitClick = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      await onSubmit();
      setLoading(false);
      setSuccessful(title);
      setFormValue({ field: "reset", value: "" });
    },
    [onSubmit, title, setFormValue]
  );

  return (
    <Nub name="Submit Bug">
      {/* {SPINNING_FACES.map(face => (
        <Face key={face} src={face} />
      ))} */}
      <form onSubmit={handleSubmitClick}>
        {successful && (
          <Success>Issue reported: &quot;{successful}&quot;</Success>
        )}
        {/* <RelatedIssues repoName={props.repoName} searchQuery={title} /> */}
        <input
          type="text"
          placeholder="Title"
          // ref={autoFocus}
          value={title}
          disabled={loading}
          onChange={(e) =>
            setFormValue({ field: "title", value: e.target.value })
          }
          required
        />
        <textarea
          ref={descInputRef}
          placeholder="Description"
          disabled={loading}
          onChange={(e) =>
            setFormValue({ field: "userDescription", value: e.target.value })
          }
          value={userDescription}
        />
        <ImageUpload
          attachments={attachments}
          pasteContainerRef={descInputRef}
          onAddImages={(newAttachments: Attachment[]) =>
            setFormValue({ field: "attachments", value: newAttachments })
          }
          onRemoveImages={(imagesToRemove: Attachment[]) =>
            setFormValue({ field: "removeAttachments", value: imagesToRemove })
          }
        />
        <input
          type="text"
          placeholder="Reporter"
          disabled={loading}
          onChange={(e) =>
            setFormValue({ field: "reporter", value: e.target.value })
          }
          value={reporter}
          required
        />
        <select
          placeholder="Priority"
          disabled={loading}
          onChange={(e) =>
            setFormValue({
              field: "priority",
              value: e.target.value as Priorities,
            })
          }
          value={priority}
        >
          {Object.values(Priorities).map((priority) => (
            <option value={priority} key={priority}>
              {priority}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" disabled={loading} />
      </form>
    </Nub>
  );
}
