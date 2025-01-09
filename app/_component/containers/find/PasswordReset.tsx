"use client";
import React, { useEffect } from "react";
import Input from "@/app/_component/presentations/Input";
import Button from "@/app/_component/presentations/Button";
import FlexibleLayout from "@/app/_component/presentations/FlexibleLayout";
import useInputPosition from "@/app/_hook/useInputPosition";
import Dialog from "@/app/_component/presentations/Dialog";
import { useRouter } from "next/navigation";

const PasswordReset = () => {
  const { labelPosition } = useInputPosition();
  const [password, setPassword] = React.useState<string>("");
  const [passwordCheck, setPasswordCheck] = React.useState<string>("");
  const [isModal, setIsModal] = React.useState<boolean>(false);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheck(e.target.value);
  };
  const router = useRouter();
  return (
    <div
      className={
        "tablet:mx-auto w-full tablet:my-[25%] mobile:mt-10 flex flex-col justify-center tablet:px-6 tablet:pt-0 tablet:py-12 tablet:gap-12 mobile:gap-6"
      }>
      <div className={"tablet:w-[460px] tablet:m-auto flex flex-col gap-12"}>
        <div
          className={
            "w-full mobile:text-left  tablet:text-center tablet:m-auto px-3 flex flex-col gap-3 text-common-normal"
          }>
          <h1
            className={
              "mobile:text-title2 mobile:font-[700] tablet:text-h3 tablet:font-[500] "
            }>
            비밀번호 찾기
          </h1>
          <p
            className={
              "mobile:text-[16px]  text-normal_sub tablet:text-title1"
            }>
            비밀번호를 새로 입력해 주세요.
          </p>
        </div>
        <form
          className={
            "tablet:w-auto m-auto tablet:min-w-[414px] mobile:w-full flex flex-col gap-6 mobile:px-3 tablet:px-0"
          }>
          <Input
            name={"password"}
            value={password}
            type={"password"}
            handleChange={handlePasswordChange}
            labelPosition={labelPosition}
            label={"비밀번호"}
            placeholder={"영문, 숫자, 특수문자 포함 8자리 이상."}
          />

          <Input
            name={"password"}
            value={passwordCheck}
            type={"password"}
            handleChange={handlePasswordCheckChange}
            labelPosition={labelPosition}
            label={"비밀번호 확인"}
            placeholder={"비밀번호를 한번 더 입력해 주세요"}
          />
        </form>

        <FlexibleLayout
          extendStyleCode={"mobile:w-full tablet:m-auto gap-3 mt-6"}>
          <Button
            type={"button"}
            title={"비밀번호 변경하기"}
            onClick={() => {
              setIsModal(true);
            }}
            variant={"bg-primary"}
            buttonSize={"lg"}
            width={"tablet:w-1/2"}
          />
          <Button
            type={"button"}
            title={"뒤로가기"}
            onClick={() => {}}
            variant={"bg-normal"}
            buttonSize={"lg"}
            width={"tablet:w-1/2"}
          />
        </FlexibleLayout>
      </div>
      <Dialog
        isOpen={isModal}
        onClose={() => {
          setIsModal(false);
        }}
        align={"center"}
        title={"비밀번호 변경 완료"}
        content={"비밀번호가 변경되었습니다."}
        isAlert={false}
        size={"lg"}
        hasBtn
        btn1Title="홈으로"
        btn2Title="로그인"
        onButton1Click={() => {
          router.push("/");
        }}
        onButton2Click={() => {
          router.push("/login");
        }}
      />
    </div>
  );
};

export default PasswordReset;
