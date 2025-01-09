import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  variant:
    | "bg-primary"
    | "bg-secondary"
    | "bg-black"
    | "bg-line-primary"
    | "bg-normal";
  buttonSize: "xl" | "lg" | "md" | "sm" | "xs";
  width?: string;
  opacity?: string;
  type?: "button" | "submit";
  className?: string;
}

const SIZE_MAP: { [k in ButtonProps["buttonSize"]]: string } = {
  xl: "h-[56px] rounded-[12px] px-6 text-title2 font-[700]",
  lg: "h-[48px] rounded-[8px] px-4 text-body1 font-[500]",
  md: "h-[40px] rounded-[8px] px-4 text-body1 font-[500]",
  sm: "h-[32px]  rounded-[8px] px-3 text-body2 font-[500]",
  xs: "h-[28px]  rounded-[8px] px-3 text-label1 font-[500]",
};

//피그마에 나온 스타일 내용을 기반으로 만듬
const VARIANT_MAP: { [k in ButtonProps["variant"]]: string } = {
  "bg-primary": "bg-primary-normal text-white",
  "bg-secondary": "bg-secondary-normal text-white",
  "bg-black": "bg-black text-white",
  "bg-line-primary":
    "border-[1px] bg-white text-primary-normal border-solid border-primary-normal",
  "bg-normal": "bg-bg_normal text-normal_sub",
};
/**
 * @param title 제목
 * @param width 높이에 따른 사이즈 구분이라 양옆은 다를수 있기에 따로 프롭스를 줬습니다.
 * @param onClick 클릭함수
 * @parma variant 버튼 배경 컬러를 바탕으로 나오는 스타일
 * @param buttonSize 너비를 제외한 나머지 사이즈
 * @param opacity 버튼의 투명도가 피그마 페이지에 조금 다르게 쓰이는게 있어서 추가함
 * */

const Button = ({
  title,
  type = "submit",
  width = "tablet:w-fit mobile:w-full",
  onClick,
  variant,
  buttonSize,
  opacity,
  className,
  ...rest
}: ButtonProps) => {
  const commonStyle = "flex items-center justify-center gap-1";

  return (
    <button
      type={type}
      className={`whitespace-nowrap ${commonStyle} ${SIZE_MAP[buttonSize]} ${opacity} ${width} ${VARIANT_MAP[variant]} ${className}`}
      onClick={onClick}
      {...rest}>
      {title}
    </button>
  );
};

export default Button;
