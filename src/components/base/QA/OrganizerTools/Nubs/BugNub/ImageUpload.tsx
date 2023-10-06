/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";

import { Attachment, FormFields } from "./constants";
import ImagePasteUploader from "./ImagePasteUploader";

export interface ImageUploadProps {
  attachments: FormFields["attachments"];
  pasteContainerRef?: React.RefObject<HTMLElement>;
  onAddImages: (newAttachments: Attachment[]) => void;
  onRemoveImages: (newAttachments: Attachment[]) => void;
}

const getPreviewUrl = (file: File) => URL.createObjectURL(file);
const freePreviewUrl = (url: string) => URL.revokeObjectURL(url);
const MAX_IMAGE_BYTES = parseFloat("1e+7");

const UploadButtonWrapper = styled.label`
  cursor: pointer;
  font-size: 0.8rem;
  color: #bbb;
  display: block;
  padding-bottom: 14px;
  & > .primary {
    color: #333;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
  & input[type="file"] {
    display: none;
  }
`;

const PreviewGrid = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 8px;
  display: grid;
  grid-gap: 6px;
  grid-template-columns: repeat(auto-fill, calc(33% - 6px));
  grid-auto-flow: row dense;
`;

const DeleteOverlay = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 150ms;
  opacity: 0;
  color: white;
  background-color: #ff9994;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  height: 40px;
  &:hover {
    cursor: pointer;
    & > ${DeleteOverlay} {
      opacity: 0.7;
    }
  }
  background-size: cover;
`;

const ImageUpload: React.FC<ImageUploadProps> = ({
  attachments,
  pasteContainerRef,
  onAddImages,
  onRemoveImages,
}) => {
  const onImagesChange = (files: File[]) => {
    if (!files || files.length === 0) {
      return;
    }

    const newAttachments = files.map<Attachment>((file) => ({
      file,
      previewUrl: getPreviewUrl(file) as unknown as string, // i am not sure why, but buildkite fails on this being a URL so we type it explicitly as a string
    }));

    onAddImages(newAttachments);
  };

  const onSelectImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArr = Array.from(e.target.files);
      for (const file of fileArr) {
        if (file.size >= MAX_IMAGE_BYTES) {
          alert("Images must be less than 10 MB");
          return;
        }
      }
      onImagesChange(Array.from(e.target.files));
    }
  };

  const onRemoveImage = (image: Attachment) => () => {
    onRemoveImages([image]);
    freePreviewUrl(image.previewUrl);
  };

  return (
    <>
      <ImagePasteUploader
        containerRef={pasteContainerRef}
        onPaste={onImagesChange}
        onError={(err) => console.error(err)}
      />
      {attachments.length > 0 && (
        <PreviewGrid>
          {attachments.map((a) => (
            <ImageContainer
              key={a.previewUrl}
              onClick={onRemoveImage(a)}
              style={{
                backgroundImage: `url(${a.previewUrl})`,
              }}
            >
              <DeleteOverlay>✖</DeleteOverlay>
            </ImageContainer>
          ))}
        </PreviewGrid>
      )}
      <UploadButtonWrapper>
        <span className="primary">Browse</span> or Paste Images (.png, .jpg)
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={onSelectImages}
        />
      </UploadButtonWrapper>
    </>
  );
};

export default ImageUpload;
