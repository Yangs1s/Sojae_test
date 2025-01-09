import React from "react";
import Link from "next/link";
import Arrow from "@/public/Arrow";
import LinkTab from "@/app/_component/presentations/LinkTab";

const SignUpLinkView = () => {
  const webLayout =
    "web:w-[520px] web:flex web:items-center web:justify-center";
  const mobileLayout = "mobile:w-full mobile:items-start flex";

  return (
    <div className={`${webLayout} ${mobileLayout} my-auto`}>
      <div
        className={
          "flex flex-col w-full web:gap-12 mobile:gap-6 max-w-[520px]"
        }>
        <div
          className={
            "w-full mobile:text-left web:text-center flex flex-col gap-3 text-common-normal"
          }>
          <h1
            className={
              "mobile:text-title2 mobile:font-[700] web:text-h3 web:font-[500] "
            }>
            소재모아 회원가입을 시작합니다.
          </h1>
          <p className={"mobile:text-[16px]  text-normal_sub text-title1"}>
            어떤 유형으로 가입하시겠어요?
          </p>
        </div>
        <div className={"w-full flex flex-col gap-3"}>
          <LinkTab
            bg={"bg-primary_bg"}
            text={"수요자 회원가입"}
            url={"/signup/consumer"}
            textColor={"text-primary-normal"}
            arrowColor={"#06dc99"}
          />
          <LinkTab
            bg={"bg-secondary_bg"}
            text={"공급자 회원가입"}
            url={"/signup/supplier"}
            textColor={"text-secondary-normal"}
            arrowColor={"#1997f5"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpLinkView;
