"use client";

import React from "react";
import Input from "@/app/_component/presentations/Input";
import useInputPosition from "@/app/_hook/useInputPosition";
import Button from "@/app/_component/presentations/Button";

const CorporationMemberInfo = () => {
  const { labelPosition } = useInputPosition();

  return (
    <form
      className={
        "tablet:w-[460px] web:mb-6 web:ml-0 tablet:mx-auto web:min-w-[414px] mobile:w-full flex flex-col gap-6"
      }>
      <Input
        name={"id"}
        value={""}
        type={"text"}
        classNames={"max-w-full"}
        disabled={true}
        handleChange={() => {}}
        labelPosition={labelPosition}
        label={"아이디(이메일)"}
        placeholder={"이메일 형식으로 입력해 주세요."}
      />
      <Input
        name={"password"}
        value={""}
        type={"password"}
        classNames={"max-w-full"}
        handleChange={() => {}}
        labelPosition={labelPosition}
        label={"비밀번호"}
        placeholder={"영문, 숫자, 특수문자 포함 8자리 이상"}
      />
      <Input
        name={"password2"}
        value={""}
        type={"password"}
        classNames={"max-w-full"}
        handleChange={() => {}}
        labelPosition={labelPosition}
        label={"비밀번호 확인"}
        placeholder={"비밀번호를 한번 더 입력해 주세요"}
      />
      <Input
        name={"bizName"}
        value={""}
        type={"text"}
        classNames={"max-w-full"}
        handleChange={() => {}}
        labelPosition={labelPosition}
        label={"기업명"}
      />
      <Input
        name={"bizNumber"}
        value={""}
        disabled={true}
        type={"text"}
        classNames={"max-w-full"}
        handleChange={() => {}}
        labelPosition={labelPosition}
        label={"사업자 등록번호"}
      />
      <Input
        name={"ceoName"}
        value={""}
        disabled={true}
        type={"text"}
        classNames={"max-w-full"}
        handleChange={() => {}}
        labelPosition={labelPosition}
        label={"대표명"}
      />
      <Input
        name={"ceoPhoneNumber"}
        value={""}
        type={"text"}
        classNames={"max-w-full"}
        handleChange={() => {}}
        labelPosition={labelPosition}
        label={"대표번호"}
        placeholder={"유선번호 입력"}
      />
      <Input
        name={"ceoCellPhoneNumber"}
        value={""}
        type={"text"}
        classNames={"max-w-full"}
        handleChange={() => {}}
        labelPosition={labelPosition}
        label={"대표자 연락처"}
        disabled={true}
        placeholder={"핸드폰번호 입력"}
      />
      <div className={"flex flex-col gap-2"}>
        <Input
          name={"address"}
          value={""}
          type={"text"}
          classNames={"max-w-full"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"공장 주소"}
          placeholder={"주소 검색"}
          btn={
            <Button
              onClick={() => {}}
              variant={"bg-primary"}
              title={"주소 검색"}
              buttonSize={"sm"}
            />
          }
        />
        <Input
          name={"id"}
          value={""}
          type={"text"}
          classNames={"max-w-full"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"상세 주소"}
          placeholder={"상세주소 입력"}
        />
        <div className={"flex flex-col gap-1 pl-3"}>
          <span className={"text-body2 text-normal_sub"}>
            - 도로명 + 건물번호 (위례성로 2)
          </span>
          <span className={"text-body2 text-normal_sub"}>
            - 건물명 + 번지 (방아동 44-2)
          </span>
          <span className={"text-body2 text-normal_sub"}>
            - 건물명, 아파트명 (반포자이, 분당 주공 1차)
          </span>
        </div>
      </div>
      <div className={"flex flex-col gap-2"}>
        <Input
          name={"address"}
          value={""}
          type={"text"}
          classNames={"max-w-full"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"본사 주소"}
          placeholder={"주소 검색"}
          btn={
            <Button
              onClick={() => {}}
              variant={"bg-primary"}
              title={"주소 검색"}
              buttonSize={"sm"}
            />
          }
        />
        <Input
          name={"id"}
          value={""}
          type={"text"}
          classNames={"max-w-full"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"상세 주소"}
          placeholder={"상세주소 입력"}
        />
        <div className={"flex flex-col gap-1 pl-3"}>
          <span className={"text-body2 text-normal_sub"}>
            - 도로명 + 건물번호 (위례성로 2)
          </span>
          <span className={"text-body2 text-normal_sub"}>
            - 건물명 + 번지 (방아동 44-2)
          </span>
          <span className={"text-body2 text-normal_sub"}>
            - 건물명, 아파트명 (반포자이, 분당 주공 1차)
          </span>
        </div>
      </div>
      <Input
        name={"managerName"}
        value={""}
        disabled={true}
        type={"text"}
        classNames={"max-w-full"}
        handleChange={() => {}}
        labelPosition={labelPosition}
        label={"담당자명"}
      />
      <Input
        name={"ceoPhoneNumber"}
        value={""}
        type={"text"}
        classNames={"max-w-full"}
        handleChange={() => {}}
        labelPosition={labelPosition}
        label={"담당자 유선번호"}
        placeholder={"유선번호 입력"}
      />
      <Input
        name={"ceoCellPhoneNumber"}
        value={""}
        type={"text"}
        classNames={"max-w-full"}
        handleChange={() => {}}
        labelPosition={labelPosition}
        label={"담당자 연락처"}
        disabled={true}
        placeholder={"핸드폰번호 입력"}
      />
      <div className={"flex gap-3 tablet:flex-row mobile:flex-col mt-6 mb-12"}>
        <Button
          type={"button"}
          title={"취소"}
          onClick={() => {}}
          variant={"bg-normal"}
          buttonSize={"lg"}
          width={"tablet:w-1/2"}
        />
        <Button
          type={"button"}
          title={"회원정보 수정"}
          onClick={() => {}}
          variant={"bg-primary"}
          buttonSize={"lg"}
          width={"tablet:w-1/2"}
        />
      </div>
    </form>
  );
};

export default CorporationMemberInfo;
