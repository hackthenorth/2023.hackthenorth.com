export enum Priorities {
  HIGHEST = "Highest",
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low",
  LOWEST = "Lowest",
}

export interface Attachment {
  previewUrl: string;
  file: File;
}

export interface FormFields {
  title: string;
  userDescription: string;
  attachments: Attachment[];
  reporter: string;
  priority: Priorities;
}

export type ActionFields = "reset" | "removeAttachments";
