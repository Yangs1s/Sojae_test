"use client";

import React, { Fragment, useState } from "react";
import Input from "@/app/_component/presentations/Input";
import Button from "@/app/_component/presentations/Button";
import AddressRecipient from "@/app/_component/presentations/AddressRecipient";
import Dropdown from "@/app/_component/presentations/Dropdown";
import {
  COLOR_OPTIONS,
  DROPDOWN_TEST_BOX,
  MONTHLY_WATER,
} from "@/app/_constant";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Radio from "@/app/_component/presentations/Radio";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";
import MaterialQualityAnalysis from "@/app/_component/containers/estimate/MaterialQualityAnalysis";
import useInputPosition from "@/app/_hook/useInputPosition";
import Dialog from "@/app/_component/presentations/Dialog";

const PostEstimate = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedValueInner, setSelectedValueInner] = useState<string>("");
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [selected, setSelected] = useState<{ label: string; value: string }>({
    label: "",
    value: "",
  });
  const [open, setOpen] = React.useState<boolean>(false);
  const [checked, setChecked] = React.useState<boolean>(false);
  const handleCheckChange = () => {
    setChecked(!checked);
  };
  const { labelPosition, innerWidth } = useInputPosition();
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div
      className={
        "w-full tablet:max-w-[1024px] web:w-[1280px] web:my-[8%] mobile:mt-[10%] flex flex-col gap-12 mobile:px-0"
      }>
      {/*  기업 정보 */}
      <div className={"w-full"}>
        {/*기업 정보 - 타이틀*/}
        <div className={"flex flex-col gap-3"}>
          <div className={"flex gap-2 items-center"}>
            <div
              className={
                "rounded-full text-white bg-primary-normal w-7 h-7 flex justify-center items-center"
              }>
              1
            </div>
            <h3 className={"text-h3 font-[500]"}>기업 정보</h3>
          </div>
          <p className={"text-normal_sub"}>
            기본 정보를 불러왔습니다. 정보는 수정이 가능해요.
          </p>
        </div>

        <div
          className={
            "w-full rounded-[12px] border-[1px] bg-white border-primary-normal mt-6"
          }>
          <div
            className={
              "flex web:flex-row mobile:flex-col web:gap-12 mobile:gap-6 web:p-6 mobile:p-4"
            }>
            <div className={"flex flex-col mobile:gap-2 web:gap-6"}>
              <Input
                name={"bizName"}
                value={""}
                type={"text"}
                handleChange={() => {}}
                labelPosition={labelPosition}
                label={"기업명"}
              />
              <Input
                name={"ceoName"}
                value={""}
                type={"text"}
                handleChange={() => {}}
                labelPosition={labelPosition}
                label={"대표자명"}
              />

              <div className={"flex flex-col gap-2"}>
                <Input
                  classNames={"border-b-[1px] border-b-normal_line max-w-full"}
                  name="bizAddress"
                  value={""}
                  type={"text"}
                  handleChange={() => {}}
                  labelPosition={labelPosition}
                  label={"본사 주소"}
                  btn={
                    <Button
                      // className={"mobile:w-fit"}
                      buttonSize={`${innerWidth > 320 ? "sm" : "md"}`}
                      title={"주소 검색"}
                      variant={"bg-primary"}
                      width={"w-fit text-[12px] mb-1"}
                      onClick={() => {}}
                    />
                  }
                />
                <Input
                  name={"bizName"}
                  value={""}
                  type={"text"}
                  handleChange={() => {}}
                  labelPosition={labelPosition}
                  label={"상세 주소"}
                />
                <AddressRecipient />
              </div>
            </div>
            <div className={"flex flex-col gap-6"}>
              <Input
                name={"category"}
                value={""}
                type={"text"}
                handleChange={() => {}}
                labelPosition={labelPosition}
                label={"업태"}
              />
              <Input
                name={"spec"}
                value={""}
                type={"text"}
                handleChange={() => {}}
                labelPosition={labelPosition}
                label={"종목"}
              />
              <Input
                name={"mangerName"}
                value={""}
                type={"text"}
                handleChange={() => {}}
                labelPosition={labelPosition}
                label={"담당자명"}
              />
              <Input
                name={"managerPhone"}
                value={""}
                type={"text"}
                handleChange={() => {}}
                labelPosition={labelPosition}
                label={"담당자 연락처"}
              />
            </div>
          </div>
        </div>
      </div>
      {/*견적 요청서 작성*/}
      <div className={"w-full h-full"}>
        {/*견적 요청서 타이틀*/}
        <div className={"flex flex-col gap-3"}>
          <div className={"flex gap-2 items-center"}>
            <div
              className={
                "rounded-full text-white bg-secondary-normal w-7 h-7 flex justify-center items-center"
              }>
              2
            </div>
            <h3 className={"text-h3 font-[500]"}>견적 요청서 작성</h3>
          </div>
          <p className={"text-normal_sub"}>견적 요청 정보를 입력해 주세요.</p>
        </div>
        <div
          className={
            "w-full bg-white rounded-[12px] border-[1px] border-secondary-normal mt-6 web:p-6 mobile:p-4 overflow-x-hidden"
          }>
          <div
            className={
              "w-full web:min-w-[1000px] mobile:min-w-0 flex flex-col web:gap-6 mobile:gap-12 overflow-x-hidden"
            }>
            <FieldSet label={"소재 종류"} required>
              <div className={"flex mobile:flex-col web:flex-row gap-2"}>
                <Dropdown
                  data={DROPDOWN_TEST_BOX}
                  handleClose={() => {
                    setDropDownOpen(false);
                  }}>
                  <Dropdown.Trigger
                    width={"web:w-[160px] mobile:w-full tablet:w-[200px]"}
                    selectedItem={selected}
                    open={dropdownOpen}
                    onClick={() => {
                      setDropDownOpen((p) => !p);
                    }}
                  />
                  <Dropdown.Menu open={dropdownOpen}>
                    {DROPDOWN_TEST_BOX.map((item, index) => (
                      <Fragment key={index}>
                        <Dropdown.Item
                          item={item}
                          selected={selected}
                          onClick={() => {
                            console.log(item.label);
                            setSelected(item);
                          }}
                        />
                      </Fragment>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Input
                  name={"etc"}
                  value={""}
                  type={"text"}
                  handleChange={() => {}}
                  labelPosition={"left"}
                  disabled={selected.value === "기타" ? false : true}
                  classNames={"w-full h-[48px] web:ml-2 mobile:m-0 "}
                />
              </div>
            </FieldSet>
            <FieldSet label={"형태"} required>
              <div className={"flex gap-3 mobile:flex-col web:flex-row"}>
                <div className={"flex gap-4"}>
                  <Radio
                    value={""}
                    label={"펠릿"}
                    selectedValue={""}
                    onChange={() => {}}
                  />
                  <Radio
                    value={""}
                    label={"플레이크"}
                    selectedValue={""}
                    onChange={() => {}}
                  />
                </div>
                <div className={"flex"}>
                  <Radio
                    value={""}
                    label={"기타"}
                    selectedValue={""}
                    onChange={() => {}}
                  />
                  <Input
                    classNames={
                      "web:w-[386px] mobile:max-w-[220px] border border-2 border-normal_line ml-2 h-[40px] rounded-[8px]"
                    }
                    name={"specEtc"}
                    value={""}
                    height={"h-[40px]"}
                    type={"text"}
                    handleChange={() => {}}
                    placeholder={"내용을 입력해 주세요"}
                    labelPosition={"no-label"}
                  />
                </div>
              </div>
            </FieldSet>
            <FieldSet label={"색상"} required align={"start"}>
              <div className={"flex gap-4 justify-start flex-wrap"}>
                <div className={"flex gap-4 web:flex-row mobile:flex-wrap"}>
                  {COLOR_OPTIONS.map((option) => (
                    <Radio
                      key={option.value}
                      selectedValue={selectedValue}
                      label={option.label}
                      isChecked={selectedValue === option.value}
                      onChange={handleRadioChange}
                      color={option["border-color"]}
                      value={option.value}
                    />
                  ))}
                </div>
                <div className={"flex"}>
                  <Radio
                    value={""}
                    label={"기타"}
                    selectedValue={""}
                    onChange={() => {}}
                  />
                  <Input
                    classNames={
                      "web:w-[386px] mobile:max-w-[220px]  border border-2 border-normal_line ml-2 h-[40px] rounded-[8px]"
                    }
                    name={"specEtc"}
                    value={""}
                    height={"h-[40px]"}
                    type={"text"}
                    handleChange={() => {}}
                    placeholder={"내용을 입력해 주세요"}
                    labelPosition={"no-label"}
                  />
                </div>
              </div>
            </FieldSet>
            <FieldSet label={"원료 정보"} required>
              <div className={"flex gap-4"}>
                <Radio
                  value={"pcr"}
                  label={"PCR"}
                  isChecked={true}
                  selectedValue={selectedValue}
                  onChange={handleRadioChange}
                />
                <Radio
                  value={"pir"}
                  label={"PIR"}
                  isChecked={false}
                  selectedValue={selectedValue}
                  onChange={handleRadioChange}
                />{" "}
                <Radio
                  value={"combine"}
                  label={"PCR + PIR"}
                  isChecked={false}
                  selectedValue={selectedValue}
                  onChange={handleRadioChange}
                />
              </div>
            </FieldSet>
            <FieldSet label={"월간 물동"} required>
              <div className={"flex flex-wrap gap-2"}>
                {MONTHLY_WATER.map((m, idx) => (
                  <Fragment key={idx}>
                    <Radio
                      value={m.name}
                      label={m.label}
                      isChecked={m.checked}
                      selectedValue={selectedValue}
                      onChange={handleRadioChange}
                    />
                  </Fragment>
                ))}
                <div className={"flex"}>
                  <Radio
                    value={""}
                    label={"기타"}
                    selectedValue={""}
                    onChange={() => {}}
                  />
                  <Input
                    classNames={
                      "web:w-[386px] mobile:max-w-[220px]  border border-2 border-normal_line ml-2 h-[40px] rounded-[8px]"
                    }
                    name={"specEtc"}
                    value={""}
                    height={"h-[40px]"}
                    type={"text"}
                    handleChange={() => {}}
                    placeholder={"내용을 입력해 주세요"}
                    labelPosition={"no-label"}
                  />
                </div>
              </div>
            </FieldSet>
            <FieldSet label={"납기"} required>
              {/* 이부분은 라이브러리 영역이라 따로 건들지 않겠습니다. */}
              <input type={"date"} />
            </FieldSet>
            <FieldSet label={"용도"} required align={"start"}>
              <div className={"flex flex-col gap-0"}>
                <Input
                  classNames={
                    "tablet:w-[436px] mobile:w-full border-b-2 border-normal_line"
                  }
                  name={"how"}
                  value={""}
                  type={"text"}
                  handleChange={() => {}}
                  placeholder={"내용을 입력해 주세요."}
                  labelPosition={"no-label"}
                />
                <p className={"mt-2 text-[15px] text-normal_sub"}>
                  ex)자동차 부품용, 건축 자재 등
                </p>
              </div>
            </FieldSet>
            <div></div>
            <FieldSet label={"인증"} required>
              <div className={"flex items-center gap-4"}>
                <Radio
                  value={"want"}
                  label={"필요"}
                  selectedValue={selectedValue}
                  isChecked={selectedValue === "want"}
                  onChange={handleRadioChange}
                />
                {selectedValue === "want" && (
                  <Input
                    classNames={"border border-2 ml-2 h-[40px]"}
                    name={"specEtc"}
                    value={""}
                    height={"h-[40px]"}
                    type={"text"}
                    handleChange={() => {}}
                    labelPosition={"no-label"}
                  />
                )}
                <Radio
                  value={"sorry"}
                  label={"불필요"}
                  isChecked={selectedValue === "sorry"}
                  selectedValue={selectedValue}
                  onChange={handleRadioChange}
                />
              </div>
            </FieldSet>
            <FieldSet label={"희망 가격(kg)"} required>
              <div
                className={
                  "flex mobile:flex-col web:flex-row web:gap-2 mobile:gap-3 "
                }>
                <Input
                  name={"confirm"}
                  value={""}
                  type={"text"}
                  handleChange={() => {}}
                  btn={
                    <h1 className={"flex ml-auto items-center text-[15px] "}>
                      원
                    </h1>
                  }
                  labelPosition={"no-label"}
                  classNames={"w-full block border-b-2 border-normal_line"}
                />
                <Input
                  name={"confirm"}
                  value={""}
                  type={"text"}
                  classNames={" border-b-2 border-normal_line"}
                  handleChange={() => {}}
                  btn={<div>원(물류비 제외)</div>}
                  label={"최대"}
                  labelPosition={"left"}
                />
                <CheckboxGroup
                  id={"nego"}
                  type={"single"}
                  multiChecked={[]}
                  setMultiChecked={() => {}}
                  checked={checked}
                  onChange={handleCheckChange}
                  size={"w-[24px] h-[24px]"}>
                  <div className={"flex gap-2"}>
                    <CheckboxGroup.CheckBox />
                    <CheckboxGroup.Label label={"협의필요"} htmlFor={"all"} />
                  </div>
                </CheckboxGroup>
              </div>
            </FieldSet>
            <div>
              <FieldSet
                label={"소재 품질 분석"}
                required={false}
                align={"start"}>
                <div className={"relative flex flex-col gap-4"}>
                  <div className={"flex gap-4"}>
                    <Radio
                      value={"box-want"}
                      label={"필요"}
                      selectedValue={selectedValue}
                      isChecked={selectedValue === "box-want"}
                      onChange={handleRadioChange}
                    />{" "}
                    <Radio
                      value={"no-box"}
                      label={"불필요"}
                      selectedValue={selectedValue}
                      isChecked={selectedValue === "no-box"}
                      onChange={handleRadioChange}
                    />
                  </div>
                </div>
              </FieldSet>
              {selectedValue !== "box-want" && (
                <MaterialQualityAnalysis
                  selectedValueInner={selectedValueInner}
                  setSelectedValueInner={setSelectedValueInner}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                />
              )}
            </div>
            <FieldSet label={"샘플 요청"} required={false}>
              <div className={"flex web:flex-row mobile:flex-col gap-4"}>
                <div className={"flex gap-4"}>
                  <Radio
                    value={"not-want-sample"}
                    label={"불필요"}
                    selectedValue={selectedValue}
                    onChange={handleRadioChange}
                  />
                  <Radio
                    value={"sample-gram"}
                    label={"500g"}
                    selectedValue={selectedValue}
                    onChange={handleRadioChange}
                  />
                </div>
                <div className={"flex"}>
                  <Radio
                    value={""}
                    label={"기타"}
                    selectedValue={""}
                    onChange={() => {}}
                  />
                  <Input
                    classNames={
                      "web:w-[386px] mobile:w-[220px] px-1 border border-2 border-normal_line ml-2 h-[40px] rounded-[8px]"
                    }
                    name={"specEtc"}
                    value={""}
                    height={"h-[40px]"}
                    type={"text"}
                    handleChange={() => {}}
                    placeholder={"내용을 입력해 주세요"}
                    labelPosition={"no-label"}
                  />
                </div>
              </div>
            </FieldSet>
            <FieldSet label={"추가 요청 사항"} required={false}>
              <div className={"flex gap-4 web:flex-row mobile:flex-col"}>
                <Radio
                  value={"zero"}
                  label={"없음"}
                  isChecked={selectedValue === "zero"}
                  selectedValue={selectedValue}
                  onChange={handleRadioChange}
                />

                <div className={"flex"}>
                  <Radio
                    value={""}
                    label={"기타"}
                    selectedValue={""}
                    onChange={() => {}}
                  />
                  <Input
                    classNames={
                      "web:w-[386px] mobile:w-[220px] px-1 border border-2 border-normal_line ml-2 h-[40px] rounded-[8px]"
                    }
                    name={"specEtc"}
                    value={""}
                    height={"h-[40px]"}
                    type={"text"}
                    handleChange={() => {}}
                    placeholder={"내용을 입력해 주세요"}
                    labelPosition={"no-label"}
                  />
                </div>
              </div>
            </FieldSet>
          </div>
        </div>
      </div>

      <div className={"w-full"}>
        <div
          className={
            "flex mobile:flex-col tablet:flex-row m-auto gap-4 mobile:w-full tablet:w-[664px] mobile:mb-12 web:mb-0"
          }>
          <Button
            title={"임시 저장"}
            onClick={() => {}}
            variant={"bg-line-primary"}
            buttonSize={"lg"}
            width={"tablet:w-1/2"}
          />

          <Button
            width={"tablet:w-1/2"}
            title={"소재모아 의뢰하기"}
            onClick={() => {
              setOpen(true);
            }}
            variant={"bg-primary"}
            buttonSize={"lg"}
          />
        </div>
      </div>
      {/* Modal */}

      <Dialog
        title={"샘플 요청"}
        content={
          <p className={"text-center"}>
            아래의 [확인] 버튼 클릭시 샘플 요청 <br /> 이메일이 발송합니다.
          </p>
        }
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
        isAlert={false}
        size={"full"}
        btn2Title={"취소"}
        btn1Title={"확인"}
        onButton1Click={() => {}}
        onButton2Click={() => {
          console.log("hi");
        }}
      />
    </div>
  );
};

export default PostEstimate;
