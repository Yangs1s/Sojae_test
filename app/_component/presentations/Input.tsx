// disable , non-disabled, validate
import React from "react";

interface InputProps {
  disabled?: boolean;
  name: string;
  value: string;
  error?: string;
  height?: string;
  label?: string;
  classNames?: string;
  placeholder?: string;
  type: "text" | "password";
  btn?: React.ReactNode;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelPosition?: "up" | "left" | "no-label";
  borderStyle?: string;
}

const Input = ({
  disabled,
  name,
  type = "text",
  value,
  classNames = "border-b-[1px] ",
  label,
  labelPosition = "left",
  placeholder,
  error,
  height = "h-[48px]",
  btn,
  handleChange,
}: InputProps) => {
  const validateStyle = error ? "border-error_line " : "";
  const webStyle = `${labelPosition !== "no-label" ? "justify-start items-center" : ""}`;

  return (
    <div className={`w-full`}>
      <div
        className={`${height} ${webStyle} ${validateStyle} ${classNames} ${disabled ? "bg-bg_normal" : ""} max-w-[414px] gap-2 flex px-2
       ${
         labelPosition === "left"
           ? "flex-row gap-2 items-center px-3" + height
           : labelPosition === "up"
             ? "flex-col justify-center items-start px-3 h-[66px]"
             : " px-0" + ""
       }`}>
        {labelPosition !== "no-label" && (
          <label
            className={`${error && "text-error"} flex justify-start text-left items-start text-normal_sub  whitespace-nowrap text-label1 ${labelPosition === "left" ? "w-[104px]" : "w-full"}`}
            htmlFor={name}>
            {label}
          </label>
        )}
        <div className={"flex w-full gap-2 pb-1"}>
          <input
            onChange={handleChange}
            type={type}
            className={`${labelPosition === "no-label" ? "tablet:px-4 rounded-[8px]" : "tablet:px-[30px]"} w-full flex-1 autofill:bg-none  mobile:px-0 placeholder:text-[14px] placeholder:text-normal_sub outline-0 border-0`}
            disabled={disabled}
            value={value}
            name={name}
            id={name}
            placeholder={placeholder}
          />
          {btn && btn}
        </div>
      </div>
      {error && (
        <p className={"text-error web:px-4 mobile:px-3 text-body2"}>*{error}</p>
      )}
    </div>
  );
};

export default Input;
