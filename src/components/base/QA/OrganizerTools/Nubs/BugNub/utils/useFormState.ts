import { useReducer, useState } from "react";

import { FormFields, ActionFields, Attachment, Priorities } from "../constants";

export interface ReducerObject {
  field: keyof FormFields | ActionFields;
  value: string | Attachment[];
}

const DEFAULT_VALUES: FormFields = {
  title: "",
  userDescription: "",
  attachments: [],
  reporter: "",
  priority: Priorities.MEDIUM,
};

const removeAttachments = (
  attachments: Attachment[],
  attachmentsToRemove: Attachment[]
): Attachment[] => {
  const toRemoveUrls = attachmentsToRemove.map((a) => a.previewUrl);

  return attachments.filter((a) => !toRemoveUrls.includes(a.previewUrl));
};

const formValueReducer: React.Reducer<FormFields, ReducerObject> = (
  state,
  action
) => {
  switch (action.field) {
    case "reset":
      return {
        ...DEFAULT_VALUES,
        reporter: state.reporter, // persist the same reporter name to make reporting multiple issues easier
      };

    case "attachments":
      return {
        ...state,
        attachments: [...state.attachments, ...(action.value as Attachment[])],
      };

    case "removeAttachments":
      return {
        ...state,
        attachments: removeAttachments(
          state.attachments,
          action.value as Attachment[]
        ),
      };

    default:
      return { ...state, [action.field]: action.value };
  }
};

export const useFormState = () => {
  const [hasErrors, setHasErrors] = useState(false);
  const [formValues, setFormValue] = useReducer(
    formValueReducer,
    DEFAULT_VALUES
  );

  return {
    formValues,
    hasErrors,
    setHasErrors,
    setFormValue,
  };
};
