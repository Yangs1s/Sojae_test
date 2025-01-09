"use client";
import React, { Fragment, useState } from "react";
import Pagination from "@/app/_component/containers/common/Pagination";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Dropdown from "@/app/_component/presentations/Dropdown";
import {
  COLOR_OPTIONS,
  DROPDOWN_TEST_BOX,
  MONTHLY_WATER,
} from "@/app/_constant";
import Input from "@/app/_component/presentations/Input";
import Radio from "@/app/_component/presentations/Radio";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";
import MaterialQualityAnalysis from "@/app/_component/containers/estimate/MaterialQualityAnalysis";
import useInputPosition from "@/app/_hook/useInputPosition";
import MaterialTableView from "@/app/_component/containers/dashboard/table/MaterialTableView";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import Button from "@/app/_component/presentations/Button";
import CustomDatePicker from "@/app/_component/containers/common/CustomDatePicker";

// 공급자 소재 제안

const ProposeMaterialView = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedValueInner, setSelectedValueInner] = useState<string>("");
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [selected, setSelected] = useState<{ label: string; value: string }>({
    label: "",
    value: "",
  });

  const [tab, setTab] = useState(0);
  // const [selectedValue, setSelectedValue] = useState<string>("");
  const [checked, setChecked] = React.useState<boolean>(false);
  const handleCheckChange = () => {
    setChecked(!checked);
  };
  const { labelPosition, innerWidth } = useInputPosition();
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className={"mb-[5%] flex w-full flex-col gap-12"}>
      <div className={"tablet:w-[1000px] mobile:w-full rounded-[24px]"}>
        <div className={"mobile:w-full flex h-[48px]"}>
          <div
            role={"presentation"}
            title={"소재 제안하기"}
            onClick={() => {
              setTab(0);
            }}
            className={`rounded-none w-1/2 text-center flex justify-center items-center rounded-l-[12px] ${tab === 0 ? "bg-primary-normal text-white" : "bg-bg_normal text-common-normal"}`}>
            소재제안하기
          </div>
          <div
            role={"presentation"}
            title={"소재 제안하기"}
            onClick={() => {
              setTab(1);
            }}
            className={`rounded-none w-1/2 text-center flex justify-center items-center rounded-r-[12px] ${tab === 1 ? "bg-primary-normal text-white" : "bg-bg_normal text-common-normal"}`}>
            임시저장
          </div>
        </div>
      </div>
      {/* RFQ 요청 표*/}
      {tab === 0 ? (
        <DashBoardField title={"RFQ 요청 표"}>
          <MaterialTableView />
          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
        </DashBoardField>
      ) : (
        <DashBoardField title={"임시 저장 목록"}>
          <MaterialTableView />
        </DashBoardField>
      )}

      <div className={""}>
        <div className={"flex flex-col gap-2"}>
          <h2 className={"text-h3 font-[500]"}>소재 제안하기</h2>
          <p className={"text-title1 text-normal_sub "}>
            제안 내용을 입력 및 선택해 주세요.
          </p>
        </div>

        <div
          className={
            " bg-white rounded-[12px] border-[1px] border-line_normal mt-6 tablet:p-6 mobile:p-4 "
          }>
          <div
            className={
              "w-full tablet:min-w-[1000px] tablet:min-w-[1000px] flex flex-col tablet:gap-6 mobile:gap-12"
            }>
            <FieldSet label={"소재 종류"} required>
              <div className={"flex mobile:flex-col tablet:flex-row gap-2"}>
                <Dropdown
                  data={DROPDOWN_TEST_BOX}
                  handleClose={() => {
                    setDropDownOpen(false);
                  }}>
                  <Dropdown.Trigger
                    width={"tablet:w-[140px] mobile:min-w-[250px]"}
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
                  classNames={"w-full h-[48px] tablet:ml-2 mobile:m-0"}
                />
              </div>
            </FieldSet>
            <FieldSet label={"형태"} required>
              <div className={"flex gap-3 mobile:flex-col tablet:flex-row"}>
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
                      "tablet:w-[386px] mobile:w-[214px] border border-2 border-normal_line ml-2 h-[40px] rounded-[8px]"
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
              <div className={"w-full flex gap-4 justify-start flex-wrap"}>
                <div className={"flex gap-3 tablet:flex-row mobile:flex-wrap"}>
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
                      "tablet:w-[386px] mobile:w-[214px] border border-2 border-normal_line ml-2 h-[40px] rounded-[8px]"
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
            <FieldSet label={"월간 물동"} required align={"start"}>
              <div className={"flex flex-wrap gap-4"}>
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
                      "tablet:w-[386px] mobile:w-[214px] border border-2 border-normal_line ml-2 h-[40px] rounded-[8px]"
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
              <CustomDatePicker value={""} onChange={() => {}} />
            </FieldSet>
            <FieldSet label={"용도"} required align={"start"}>
              <div className={"flex flex-col gap-0"}>
                <Input
                  classNames={
                    "tablet:w-[436px] mobile:min-w-full border-b-[1px]"
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
                  "flex mobile:flex-col tablet:flex-row tablet:gap-2 mobile:gap-3"
                }>
                <Input
                  name={"confirm"}
                  value={""}
                  type={"text"}
                  handleChange={() => {}}
                  btn={<h1 className={"flex items-center text-[15px]"}>원</h1>}
                  labelPosition={"no-label"}
                />
                <Input
                  name={"confirm"}
                  value={""}
                  type={"text"}
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
              {/*소재 품질 분석*/}
              {selectedValue === "box-want" && (
                <MaterialQualityAnalysis
                  selectedValueInner={selectedValueInner}
                  setSelectedValueInner={setSelectedValueInner}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={"flex gap-2 ml-auto"}>
        <Button
          title={"임시저장"}
          variant={"bg-normal"}
          buttonSize={"md"}
          onClick={() => {}}
        />
        <Button
          title={"소재모아 등록 요청"}
          variant={"bg-primary"}
          buttonSize={"md"}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ProposeMaterialView;
