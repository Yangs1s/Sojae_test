import React from "react";
import { isArray } from "node:util";

interface InfoType {
  num: number;
  desc: string;
  textColor: string;
}

interface Props {
  info: InfoType | InfoType[];
  variant: "bg-primary" | "bg-normal" | "bg-error" | "bg-secondary";
  customStyle?: string;
}
const statusVariant = {
  "bg-primary": "bg-primary_bg ",
  "bg-normal": "bg-transparent ",
  "bg-error": "bg-error_bg ",
  "bg-secondary": "bg-secondary_bg",
};

const StatusBox = ({ info, variant, customStyle }: Props) => {
  // 배열일시와 아닐시를 구분했습니다.

  const renderInfo = () => {
    if (Array.isArray(info)) {
      return (
        <ul
          className={`${customStyle ? customStyle : "flex w-full tablet:justify-around mobile:justify-between tablet:h-full items-center mobile:px-3 tablet:px-0"}`}>
          {info.map((item, index) => (
            <li
              key={index}
              className={`min-w-[90px] mt-2 tablet:h-full mobile:h-[92px] flex flex-col justify-center items-center  ${item.textColor}`}>
              <div
                className={
                  "text-center flex-col tablet:gap-6 mobile:gap-4 w-full flex items-center"
                }>
                <h1 className="tablet:text-[56px] mobile:text-[32px] font-[700]">
                  {item.num}
                </h1>
                <span className="text-body2 ">{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <div
          className={`w-full h-full flex flex-col justify-center gap-6 ${info.textColor}`}>
          <div className="w-full h-auto px-4">
            <h1 className="tablet:text-[56px] mobile:text-[32px] font-[700]">
              {info.num}
            </h1>
          </div>
          <p className="text-body2">{info.desc}</p>
        </div>
      );
    }
  };
  return (
    <div
      className={`${Array.isArray(info) ? "w-fit" : "w-full"}  tablet:h-[160px] mobile:min-h-[92px] mobile:max-h-[190px] rounded-12 gap-3 min-w-[100px] text-center flex justify-center flex-col items-center ${statusVariant[variant]}`}>
      {renderInfo()}
    </div>
  );
};

export default StatusBox;
