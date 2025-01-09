"use client";

import React, { useEffect } from "react";
import Input from "@/app/_component/presentations/Input";
import Button from "@/app/_component/presentations/Button";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";
import useInputPosition from "@/app/_hook/useInputPosition";

const CorporationInfo = () => {
  const [checked, setChecked] = React.useState(false);
  const [multiChecked, setMultiChecked] = React.useState<string[]>([]);
  const { labelPosition } = useInputPosition();

  const handleCheckChange = () => {
    setChecked(!checked);
  };
  const handleAllCheckChange = () => {
    if (multiChecked.length === 2) {
      setMultiChecked([]); // 모두 해제
    } else {
      setMultiChecked(["service", "private"]); // 모두 선택
    }
  };

  return (
    <div
      className={"flex my-[5%] flex-col  justify-center web:px-6 py-12 gap-12"}>
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
          STEP 03.기업정보 입력
        </p>
        <p className={"mobile:text-[16px]  text-normal_sub web:text-title2"}>
          기업 정보를 입력해 주세요.
        </p>
      </div>

      {/*  form 형식*/}

      <form
        className={
          "web:w-full web:min-w-[414px] mobile:w-full flex flex-col gap-6"
        }>
        <Input
          classNames={"border-b-[1px] border-b-normal_line"}
          name={"biz-number"}
          value={""}
          type={"text"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"법인 등록번호"}
          placeholder={"000-00-000000"}
          btn={
            <Button
              onClick={() => {}}
              variant={"bg-normal"}
              title={"인증"}
              buttonSize={"sm"}
              width={"w-fit text-[12px] mb-1"}
            />
          }
        />
        <Input
          classNames={"border-b-[1px] border-b-normal_line"}
          name={"bizName"}
          value={""}
          type={"text"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"기업명"}
        />
        <Input
          classNames={"border-b-[1px] border-b-normal_line"}
          name={"ceoName"}
          value={""}
          type={"text"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"대표자명"}
        />
        <Input
          classNames={"border-b-[1px] border-b-normal_line"}
          name={"ceoPhoneNumber"}
          value={""}
          type={"text"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"대표번호"}
          placeholder={"유선번호 입력"}
        />
        <Input
          classNames={"border-b-[1px] border-b-normal_line"}
          name={"ceoCellPhoneNumber"}
          value={""}
          type={"text"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"대표자 연락처"}
          placeholder={"핸드폰번호 입력"}
        />
        <div className={"flex flex-col gap-2"}>
          <Input
            classNames={"border-b-[1px] border-b-normal_line"}
            name={"address"}
            value={""}
            type={"text"}
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
                width={"w-fit text-[12px] mb-1"}
              />
            }
          />
          <Input
            classNames={"border-b-[1px] border-b-normal_line"}
            name={"id"}
            value={""}
            type={"text"}
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
            classNames={"border-b-[1px] border-b-normal_line"}
            name={"factory_address"}
            value={""}
            type={"text"}
            handleChange={() => {}}
            labelPosition={labelPosition}
            label={"공장 주소"}
            placeholder={"주소 검색"}
            btn={
              <Button
                onClick={() => {}}
                variant={"bg-primary"}
                title={"공장 검색"}
                buttonSize={"sm"}
                width={"w-fit text-[12px] mb-1"}
              />
            }
          />
          <Input
            classNames={"border-b-[1px] border-b-normal_line"}
            name={"factory_detail_address"}
            value={""}
            type={"text"}
            handleChange={() => {}}
            labelPosition={labelPosition}
            label={"상세 주소"}
            placeholder={"상세주소 입력"}
          />
        </div>
        <Input
          classNames={"border-b-[1px] border-b-normal_line"}
          name={"managerName"}
          value={""}
          type={"text"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"담당자명"}
          placeholder={"담당자 이름 입력"}
        />
        <Input
          classNames={"border-b-[1px] border-b-normal_line"}
          name={"managerPhone"}
          value={""}
          type={"text"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"담당자 유선번호"}
          placeholder={"유선번호 입력"}
        />
        <Input
          classNames={"border-b-[1px] border-b-normal_line"}
          name={"managerCellPhone"}
          value={""}
          type={"text"}
          handleChange={() => {}}
          labelPosition={labelPosition}
          label={"담당자 연락처"}
          placeholder={"핸드폰번호 입력"}
        />
      </form>
      <div className={"flex flex-col gap-3"}>
        <CheckboxGroup
          type={"single"}
          id={"all"}
          checked={multiChecked.length === 2}
          onChange={handleAllCheckChange}
          size={"w-[20px] h-[20px]"}
          multiChecked={[]}
          setMultiChecked={() => {}}>
          <div className={"flex justify-center items-center gap-2"}>
            <CheckboxGroup.CheckBox />
            <CheckboxGroup.Label
              label={"전체 약관 동의"}
              htmlFor={"all"}
              textSize={"text-[16px] font-[500]"}
            />
          </div>
        </CheckboxGroup>
        <div className={"w-full h-[1px] bg-medium-light"}>&nbsp;</div>
        <div className={"flex flex-col gap-3"}>
          <CheckboxGroup
            type={"multi"}
            id={"service"}
            checked={checked}
            onChange={handleCheckChange}
            size={"w-[16px] h-[16px]"}
            multiChecked={multiChecked}
            setMultiChecked={setMultiChecked}>
            <div className={"flex justify-between w-full"}>
              <div className={"flex justify-center items-center gap-2"}>
                <CheckboxGroup.CheckBox />
                <CheckboxGroup.Label
                  label={"[필수] 서비스 이용약관 동의"}
                  htmlFor={"service"}
                />
              </div>
              <button className={"text-label1 underline text-normal_sub"}>
                내용보기
              </button>
            </div>
          </CheckboxGroup>
          <CheckboxGroup
            type={"multi"}
            id={"private"}
            checked={checked}
            onChange={handleCheckChange}
            size={"w-[16px] h-[16px]"}
            multiChecked={multiChecked}
            setMultiChecked={setMultiChecked}>
            <div className={"flex justify-between w-full"}>
              <div className={"flex justify-center items-center gap-2"}>
                <CheckboxGroup.CheckBox />
                <CheckboxGroup.Label
                  label={"[필수] 개인정보 수집 및 이용 동의"}
                  htmlFor={"private"}
                />
              </div>
              <button className={"text-label1 underline text-normal_sub"}>
                내용보기
              </button>
            </div>
          </CheckboxGroup>
        </div>
      </div>
      <div className={"flex gap-3 web:flex-row mobile:flex-col"}>
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
          title={"회원가입 완료"}
          onClick={() => {}}
          variant={"bg-normal"}
          buttonSize={"lg"}
          width={"web:w-1/2"}
        />
      </div>
    </div>
  );
};

export default CorporationInfo;
