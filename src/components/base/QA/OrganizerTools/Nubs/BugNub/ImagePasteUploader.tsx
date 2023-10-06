import React, { useEffect, useCallback } from "react";

export interface ImagePasteUploaderProps {
  containerRef?: React.RefObject<HTMLElement>;
  onPaste: (imgFile: File[]) => void;
  onError: (error: string) => void;
  acceptedFileTypes?: string[];
}

const ImagePasteUploader: React.FC<ImagePasteUploaderProps> = ({
  containerRef,
  onPaste = () => undefined,
  onError = () => undefined,
  acceptedFileTypes = ["image/gif", "image/png", "image/jpeg", "image/bmp"],
}) => {
  const pasteHandler = useCallback(
    (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.items.length > 0) {
        const data: DataTransfer = e.clipboardData;
        const files: File[] = [];

        // data is a list-like object (it cannot be iterated over) so use a for loop
        for (let i = 0; i < data.items.length; i++) {
          const dataItem = data.items[i];
          const isValidFormat = acceptedFileTypes.includes(dataItem.type);

          if (isValidFormat) {
            const blob = dataItem.getAsFile();

            if (blob) {
              files.push(blob);
            }
          } else {
            onError("Unsupported format!");
          }
        }

        onPaste(files);
      } else {
        onError("No image(s) pasted!");
      }
    },
    [acceptedFileTypes, onPaste, onError]
  );

  /**
   * Listen for any paste events on the specified container (the entire window
   * by default) to capture pasted content
   */
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const container: any = (containerRef && containerRef.current) || window;
    container.addEventListener("paste", pasteHandler);

    return () => container.removeEventListener("paste", pasteHandler);
  }, [containerRef, pasteHandler]);

  return null;
};

ImagePasteUploader.displayName = "ImagePasteUploader";
export default ImagePasteUploader;
