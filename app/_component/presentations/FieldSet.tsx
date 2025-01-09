import React from "react";

const FieldSet = ({
  label,
  children,
  required,
  align = "center",
  requiredText,
}: {
  align?: "center" | "start";
  label: string;
  required: boolean;
  children: React.ReactNode;
  requiredText?: string;
}) => {
  return (
    <div
      className={`flex tablet:flex-row mobile:flex-col ${align === "center" ? "web:items-center" : "web:items-start mb-[24px] "} mobile:justify-start whitespace-nowrap web:h-[48px] mobile:h-auto web:gap-12 mobile:gap-2`}>
      {label && (
        <label
          className={`flex ${requiredText ? "web:w-[120px] tablet:w-[160px]" : "w-[120px]"} `}>
          <p className={"text-body1"}>{label}</p>
          {required && (
            <p className={"text-error text-body1"}>
              {requiredText ? requiredText : "*"}
            </p>
          )}
        </label>
      )}
      <div
        className={`tablet:flex web:flex-row tablet:flex-1 mobile:w-full ${align === "center" ? "" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default FieldSet;
