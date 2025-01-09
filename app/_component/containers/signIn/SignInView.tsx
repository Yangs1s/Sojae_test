"use client";
import React from "react";
import Input from "@/app/_component/presentations/Input";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";
import Button from "@/app/_component/presentations/Button";

const SignInView = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div
      className={
        " flex flex-col tablet:items-center tablet:w-[460px] tablet:p-6 tablet::m-0 " +
        " mobile:mb-[124px] mobile:mt-[10%]" +
        " tablet:w-auto mobile:px-0 mobile:py-6 gap-8  "
      }>
      <h1
        className={
          "text-common-normal web:text-[24px] mobile:text-title2 " +
          "web:font-[500] mobile:font-[700] text-center"
        }>
        로그인
      </h1>
      <div className={"flex flex-col gap-4 w "}>
        <form className={"flex flex-col"}>
          <Input
            labelPosition={"left"}
            label={"이메일"}
            name={"id"}
            value={""}
            type={"text"}
            classNames={
              "web:w-[412px] mobile:w-full border-b-2 border-b-line_normal"
            }
            handleChange={() => {}}
          />
          <Input
            labelPosition={"left"}
            label={"비밀번호"}
            name={"id"}
            value={""}
            type={"password"}
            classNames={
              "web:w-[412px] mobile:w-full border-b-2  border-b-line_normal"
            }
            handleChange={() => {}}
          />
        </form>

        <div
          className={
            "flex web:justify-between web:items-center mobile:items-start w-full web:flex-row mobile:flex-col mobile:gap-3"
          }>
          <CheckboxGroup
            type={"single"}
            id={"keep-login"}
            checked={checked}
            onChange={() => {
              setChecked((p) => !p);
            }}
            size={"w-[20px] h-[20px]"}
            multiChecked={[]}
            setMultiChecked={() => {}}>
            <CheckboxGroup.CheckBox />
            <CheckboxGroup.Label
              label={"로그인 상태 유지"}
              htmlFor={"keep-login"}
            />
          </CheckboxGroup>
          <Button
            className={"mobile:block web:hidden mobile:mt-3 web:mt-0"}
            onClick={() => {
              console.log("hi");
            }}
            buttonSize={"xl"}
            variant={"bg-primary"}
            width={"w-full"}
            title={"로그인"}
          />
          <div
            className={
              "gap-2 flex mobile:w-full mobile:justify-center mobile:items-center web:justify-end web:items-end"
            }>
            <button className={"text-normal_sub text-[14px]"}>
              아이디 찾기
            </button>
            <p>|</p>
            <button className={"text-normal_sub text-[14px]"}>
              비밀번호 찾기
            </button>
            <p>|</p>
            <button className={"text-secondary-normal text-[14px]"}>
              회원가입
            </button>
          </div>
        </div>
        <Button
          className={"mobile:hidden web:block"}
          onClick={() => {
            console.log("hi");
          }}
          buttonSize={"xl"}
          variant={"bg-primary"}
          width={"w-full"}
          title={"로그인"}
        />
      </div>
    </div>
  );
};

export default SignInView;
