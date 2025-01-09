import React from "react";

const Radio = ({
  value,
  color = "border-primary-normal",
  label,
  onChange,
  isChecked,
  selectedValue,
}: {
  value: string;
  color?: string;
  label: string;
  isChecked?: boolean;
  selectedValue: string;
  onChange: (value: string) => void;
}) => {
  const isWhite = color === "border-[#FFF]";
  return (
    <div className="flex items-center gap-2 w-fit">
      {/* 실제 라디오 버튼 */}
      <input
        type="radio"
        value={value}
        id={`radio-${value}`}
        name="custom-radio"
        className="peer hidden"
        checked={isChecked}
        onChange={() => onChange(value)}
      />
      {/* 라벨 및 스타일링 */}
      <label
        htmlFor={`radio-${value}`}
        className={`flex items-center cursor-pointer rounded-full ${isWhite ? "border-2 border-[#0000000f] border-solid opacity-100" : "border-opacity-0"}  `}>
        {/* 바깥 고리 */}
        <div
          className={`w-6 h-6 flex items-center justify-center border-2 rounded-full transition-all ${
            isChecked
              ? !isWhite
                ? `border-[7px] ${color}`
                : "border-[2px] border-black"
              : "border-white_sub"
          }`}>
          {/* 이너 서클 */}
          <div
            className={`w-[10px] h-[10px] rounded-full transition-all ${
              isChecked
                ? !isWhite
                  ? `border-[#0000000F] border-2 border-solid`
                  : "border-[#000] border-2 border-solid"
                : "bg-white_sub"
            }`}></div>
        </div>
      </label>
      {/* 텍스트 */}
      {label && <span className="text-gray-700">{label}</span>}
    </div>
  );
};

export default Radio;
