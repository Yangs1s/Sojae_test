"use client";
import React from "react";
import Input from "@/app/_component/presentations/Input";
import FlexibleLayout from "@/app/_component/presentations/FlexibleLayout";
import Button from "@/app/_component/presentations/Button";
import useInputPosition from "@/app/_hook/useInputPosition";
import { useRouter } from "next/navigation";

const ModifyMemberInfo = () => {
  const { labelPosition } = useInputPosition();
  const router = useRouter();
  return (
    <div
      className={
        "flex w-full h-screen items-center flex-col mobile:w-full web:w-auto web:px-6 web:pt-0 py-12 web:gap-12 mobile:gap-6"
      }>
      <div className={"web:w-[460px] ml-auto web:mr-auto flex flex-col gap-12"}>
        <div
          className={"text-left px-3 flex flex-col gap-5 text-common-normal"}>
          <h1
            className={
              "mobile:text-title2 mobile:font-[700] tablet:text-h3 tablet:font-[500] "
            }>
            비밀번호 입력
          </h1>
          <p
            className={
              "mobile:text-[16px] whitespace-pre-wrap text-normal_sub tablet:text-title1"
            }>
            회원님의 소중한 개인정보를 위해 비밀번호를 입력해 주세요.
          </p>
        </div>
        <form
          className={
            "web:w-full web:min-w-[414px] mobile:w-full flex flex-col gap-6 mobile:px-3 web:px-0"
          }>
          <Input
            name={"password"}
            value={""}
            type={"password"}
            classNames={"px-4 border-b-[1px] border-b-normal_line"}
            handleChange={() => {}}
            labelPosition={labelPosition}
            label={"비밀번호"}
            placeholder={"영문, 숫자, 특수문자 포함 8자리 이상"}
          />
        </form>
        <FlexibleLayout extendStyleCode={"w-full gap-3 mt-6"}>
          <Button
            type={"button"}
            title={"확인"}
            onClick={() => {
              router.push("/my/modify?type=private");
            }}
            variant={"bg-primary"}
            buttonSize={"lg"}
            width={"tablet:w-full"}
          />{" "}
        </FlexibleLayout>
      </div>
    </div>
  );
};

export default ModifyMemberInfo;
