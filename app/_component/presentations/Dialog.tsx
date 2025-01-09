"use client";
import React, { createContext, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

interface DialogProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isAlert: boolean;
  size: "full" | "lg" | "md";
  btn2Title?: string;
  btn1Title?: string;
  onButton1Click?: () => void;
  onButton2Click?: () => void;
  hasBtn?: boolean;
  hasframe?: boolean;
  headerTitle?: string;
  align?: "center" | "start";
}
const POP_SIZE_MAP = {
  full: "h-auto",
  lg: "h-[140px]",
  md: "h-[126px]",
};

const DialogContext = createContext({
  close: () => {},
});

const Dialog = ({
  isOpen,
  title,
  isAlert,
  onClose,
  size,
  content,
  align,
  onButton1Click,
  onButton2Click,
  btn1Title,
  btn2Title,
  hasframe = false,
  headerTitle,
  hasBtn,
}: DialogProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal");

  if (!modalRoot) return null;
  if (isOpen)
    return ReactDOM.createPortal(
      <DialogContext.Provider value={{ close: onClose }}>
        <React.Fragment>
          <div
            role="dialog"
            className={`fixed top-0 z-40 left-0 w-full h-full overflow-hidden bg-[#000] opacity-35 flex justify-center items-center`}
            onClick={onClose}></div>
          <div
            className={`translate-y-[-50%] rounded-[12px] bg-white min-w-[300px] min-h-[150px] mobile:max-w-[90%] tablet:max-w-full flex flex-col fixed translate-x-[-50%] left-[50%] top-[50%] z-[100] ${POP_SIZE_MAP[size]}`}>
            {/*header*/}
            {hasframe && (
              <div
                className={`w-full bg-primary-normal rounded-t-[12px] flex items-center h-[48px] text-white px-6`}>
                <p className={"text-title1 font-bold"}>{headerTitle}</p>
              </div>
            )}

            <div
              className={`${size === "lg" ? "gap-4 " : "gap-3"} min-w-full min-h-[112px] justify-center flex ${align === "center" ? "items-center px-2" : "items-start"} flex-col`}>
              {title && <Dialog.Title title={title} align={align} />}
              <Dialog.Content content={content} />
            </div>
            {hasBtn && (
              <div
                className={
                  "w-full flex min-h-[48px] rounded-b-[12px] text-body1"
                }>
                {!isAlert ? (
                  <>
                    <Dialog.Close alert={isAlert}>{btn2Title}</Dialog.Close>
                    <button
                      onClick={onButton1Click}
                      className={`w-1/2 bg-primary-normal rounded-br-[12px] text-white font-[500] `}>
                      {btn1Title}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={onButton1Click}
                    className={`w-full bg-primary-normal rounded-b-[12px] text-white font-[500] `}>
                    {btn1Title}
                  </button>
                )}
              </div>
            )}
          </div>
        </React.Fragment>
      </DialogContext.Provider>,
      modalRoot
    );
};

export default Dialog;

// 닫기
Dialog.Close = ({
  children,
  alert,
}: {
  children: React.ReactNode;
  alert: boolean;
}) => {
  const { close } = useContext(DialogContext);

  return (
    <button
      className={`bg-bg_normal  text-normal_sub ${!alert ? "w-1/2 rounded-bl-[12px]" : "w-full bg-primary-normal text-white rounded-b-[12px]"}`}
      onClick={close}>
      {children}
    </button>
  );
};

Dialog.Title = ({
  title,
  align,
}: {
  title: string;
  align?: "center" | "start";
}) => {
  return (
    <span
      className={`mobile:text-title3 tablet:text-title2 font-[700]  
    ${align === "start" ? "px-4 pt-4" : ""}`}>
      {title}
    </span>
  );
};

Dialog.Content = ({ content }: { content: React.ReactNode }) => {
  return <div className={""}>{content}</div>;
};
