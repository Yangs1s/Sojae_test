import React from "react";
import LinkTab from "@/app/_component/presentations/LinkTab";

const SignUpSelectView = ({ slug }: { slug: string }) => {
  const webLayout =
    "web:w-[520px] web:flex web:items-center web:justify-center";
  const mobileLayout = "mobile:w-full mobile:items-start flex";

  return (
    <div
      className={`${webLayout} ${mobileLayout} web:m-auto mobile:mb-36 mobile:mt-10 `}>
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
          <p className={"mobile:text-[16px]  text-normal_sub web:text-title1"}>
            개인이신가요, 법인이신가요?
          </p>
        </div>
        <div className={"w-full flex flex-col gap-3"}>
          <LinkTab
            bg={"bg-bg_normal"}
            text={"개인"}
            url={`/signup/${slug}/private`}
            textColor={"text-common-normal"}
            arrowColor={"#080c0d"}
          />
          <LinkTab
            bg={"bg-black"}
            text={"법인"}
            url={`/signup/${slug}/corporation`}
            textColor={"text-white"}
            arrowColor={"#fff"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpSelectView;
