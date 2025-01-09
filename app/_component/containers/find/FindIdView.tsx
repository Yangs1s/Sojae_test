"use client";
import React, { useEffect } from "react";
import Input from "@/app/_component/presentations/Input";
import Button from "@/app/_component/presentations/Button";
import FlexibleLayout from "@/app/_component/presentations/FlexibleLayout";
import useInputPosition from "@/app/_hook/useInputPosition";

const FindIdView = () => {
  const { labelPosition } = useInputPosition();

  return (
    <div
      className={
        "tablet:mx-auto w-full h-full tablet:my-[25%] mobile:mt-10 flex flex-col justify-center tablet:px-6 tablet:pt-0 tablet:py-12 tablet:gap-12 mobile:gap-6"
      }>
      <div className={"tablet:w-[460px] tablet:m-auto flex flex-col gap-12"}>
        <div
          className={
            "w-full mobile:text-left tablet:text-center px-3 flex flex-col gap-3 text-common-normal"
          }>
          <h1
            className={
              "mobile:text-title2 mobile:font-[700] tablet:text-h3 tablet:font-[500] "
            }>
            이메일 찾기
          </h1>
          <p
            className={
              "mobile:text-[16px]  text-normal_sub tablet:text-title1"
            }>
            회원님의 이메일은 다음과 같습니다.
          </p>
        </div>
        <form
          className={
            "tablet:w-full tablet:min-w-[414px] mobile:w-full flex flex-col gap-6 mobile:px-3 tablet:px-0"
          }>
          <Input
            name={"id"}
            value={""}
            type={"text"}
            classNames={"px-4 border-b-[1px]"}
            handleChange={() => {}}
            labelPosition={labelPosition}
            label={"아이디(이메일)"}
            placeholder={"이메일 형식으로 입력해 주세요."}
          />
        </form>
        <FlexibleLayout extendStyleCode={"w-full gap-3 mt-6"}>
          <Button
            type={"button"}
            title={"로그인하기"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"lg"}
            width={"tablet:w-1/2"}
          />{" "}
          <Button
            type={"button"}
            title={"비밀번호 찾기"}
            onClick={() => {}}
            variant={"bg-normal"}
            buttonSize={"lg"}
            width={"tablet:w-1/2"}
          />
        </FlexibleLayout>
      </div>
    </div>
  );
};

export default FindIdView;
