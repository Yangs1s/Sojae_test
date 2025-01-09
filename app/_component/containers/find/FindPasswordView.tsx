"use client";
import React, { useEffect } from "react";
import Input from "@/app/_component/presentations/Input";
import Button from "@/app/_component/presentations/Button";
import { useRouter } from "next/navigation";
import FlexibleLayout from "@/app/_component/presentations/FlexibleLayout";
import useInputPosition from "@/app/_hook/useInputPosition";

const FindPasswordView = () => {
  const router = useRouter();
  const { labelPosition } = useInputPosition();

  return (
    <div
      className={
        "mx-auto w-full web:m-auto flex flex-col justify-center web:px-6 web:pt-0 py-12 web:gap-12 mobile:gap-6"
      }>
      <div
        className={
          "w-full mobile:text-left web:text-center m-auto px-3 flex flex-col gap-3 text-common-normal"
        }>
        <h1
          className={
            "mobile:text-title2 mobile:font-[700] web:text-h3 web:font-[500] "
          }>
          비밀번호 찾기
        </h1>
        <p className={"mobile:text-[16px]  text-normal_sub web:text-title1"}>
          비밀번호를 찾기 위해 아이디를 입력해 주세요.
        </p>
      </div>
      <form
        className={
          "web:w-full web:min-w-[414px] mobile:w-full flex p-6 flex-col gap-6 mobile:px-3 web:px-0"
        }>
        <Input
          name={"id"}
          value={""}
          type={"text"}
          handleChange={() => {}}
          classNames={"px-4"}
          labelPosition={labelPosition}
          label={"아이디(이메일)"}
          placeholder={"이메일 형식으로 입력해 주세요."}
        />
      </form>
      <FlexibleLayout extendStyleCode={"w-full gap-3 mt-6"}>
        <Button
          type={"submit"}
          title={"아이디 확인"}
          onClick={() => {
            router.push("/find/password-reset");
          }}
          variant={"bg-primary"}
          buttonSize={"lg"}
          width={"web:w-1/2"}
        />
        <Button
          type={"button"}
          title={"아이디 찾기"}
          onClick={() => {}}
          variant={"bg-normal"}
          buttonSize={"lg"}
          width={"web:w-1/2"}
        />
      </FlexibleLayout>
    </div>
  );
};

export default FindPasswordView;
