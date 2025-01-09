"use client";
import React, { useEffect } from "react";
import Input from "@/app/_component/presentations/Input";
import Button from "@/app/_component/presentations/Button";
import { useRouter } from "next/navigation";
import useInputPosition from "@/app/_hook/useInputPosition";

const CorporationSignUp = () => {
  const { labelPosition } = useInputPosition();
  const router = useRouter();

  return (
    <div
      className={
        "flex max-w-[420px] flex-col justify-center web:px-6 web:pt-0 py-12 web:gap-12 mobile:gap-6"
      }>
      <div
        className={
          "w-full mobile:text-left web:text-center px-3 flex flex-col gap-3 text-common-normal"
        }>
        <h1
          className={
            "mobile:text-title2 mobile:font-[700] web:text-h3 web:font-[500] "
          }>
          소재모아 회원가입을 시작합니다
        </h1>
        <p className={"mobile:text-[16px]  text-normal_sub web:text-title1"}>
          STEP 02. 회원정보 입력
        </p>
        <p className={"mobile:text-[16px]  text-normal_sub web:text-title2"}>
          회원 정보를 입력해 주세요.
        </p>
      </div>
      <form
        className={
          "web:w-full web:min-w-[414px] mobile:w-full flex flex-col gap-6 mobile:px-3 web:px-0"
        }>
        <Input
          name={"id"}
          value={""}
          type={"text"}
          classNames={"max-w-full border-b-[1px] border-b-normal_line"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"아이디(이메일)"}
          placeholder={"이메일 형식으로 입력해 주세요."}
        />
        <Input
          name={"password"}
          value={""}
          type={"password"}
          classNames={"max-w-full border-b-[1px] border-b-normal_line"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"비밀번호"}
          placeholder={"영문, 숫자, 특수문자 포함 8자리 이상"}
        />{" "}
        <Input
          name={"password2"}
          value={""}
          type={"password"}
          classNames={"max-w-full border-b-[1px] border-b-normal_line"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"비밀번호 확인"}
          placeholder={"비밀번호를 한번 더 입력해 주세요"}
        />
        <Input
          name={"managerName"}
          value={""}
          type={"text"}
          classNames={"max-w-full border-b-[1px] border-b-normal_line"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"담당자명"}
          placeholder={"담당자 이름 입력"}
        />
      </form>
      <div className={"flex gap-3 w-full mt-6 web:flex-row mobile:flex-col"}>
        <Button
          type={"button"}
          title={"취소"}
          onClick={() => {}}
          variant={"bg-normal"}
          buttonSize={"lg"}
          width={"web:w-1/2"}
        />
        <Button
          type={"button"}
          title={"다음"}
          onClick={() => {
            router.push("/signup/consumer/corporation/corInfo");
          }}
          variant={"bg-normal"}
          buttonSize={"lg"}
          width={"web:w-1/2"}
        />
      </div>
    </div>
  );
};

export default CorporationSignUp;
