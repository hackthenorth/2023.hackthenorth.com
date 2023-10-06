import React, {
  useMemo,
  forwardRef,
  CSSProperties,
  ElementType,
  ComponentPropsWithRef,
} from "react";
import ReactModal, { Styles as ReactModalStyles } from "react-modal";

export type BaseProps<T extends ElementType> = ComponentPropsWithRef<T>;

export interface ModalProps extends BaseProps<"div"> {
  /**
   * callback for any close requests
   */
  onClose: () => void;

  isOpen: boolean;

  overlayStyle?: CSSProperties;

  /**
   * Number indicating the milliseconds to wait before closing the modal
   */
  closeTimeoutMS?: number;

  /**
   * String indicating how the content container should be announced to screenreaders
   */
  contentLabel?: string;

  shouldCloseOnOverlayClick?: boolean;

  shouldCloseOnEsc?: boolean;
}

export type ModalType = React.FC<ModalProps>;

const DEFAULT_MODAL_OVERLAY_STYLE = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.7)",
  zIndex: 100,
};

export const UnstyledModal: ModalType = (
  {
    children,
    isOpen = false,
    onClose = () => {},
    overlayStyle,
    style,
    // ref is taken out of props so that it doesn't get passed into <ReactModal {...rest}/>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...rest
  },
  forwardRef: React.MutableRefObject<HTMLDivElement>
) => {
  const modalStyle: ReactModalStyles = useMemo(
    () => ({
      overlay: {
        ...DEFAULT_MODAL_OVERLAY_STYLE,
        ...overlayStyle,
      },
      content: style,
    }),
    [overlayStyle, style]
  );

  const contentRef = (node: any) => {
    if (forwardRef && forwardRef.current) {
      forwardRef.current = node;
    }
  };

  return (
    // Couldn't really figure out the type issues :/
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyle}
      contentRef={contentRef}
      {...rest}
    >
      {children}
    </ReactModal>
  );
};

UnstyledModal.displayName = "UnstyledModal";

export default UnstyledModal;
