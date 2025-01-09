"use client";
import React, { Fragment, useState } from "react";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import SearchPageTableView from "@/app/_component/containers/dashboard/table/SearchPageTableView";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Radio from "@/app/_component/presentations/Radio";
import Input from "@/app/_component/presentations/Input";
import { COLOR_OPTIONS, MONTHLY_WATER } from "@/app/_constant";
import Button from "@/app/_component/presentations/Button";
import Dialog from "@/app/_component/presentations/Dialog";
import ConsumerProposeTable from "@/app/_component/containers/dashboard/table/ConsumerProposeTable";

// 공급 소재 검색
const SupplySearchView = () => {
  const [dropDownOpen, setDropDownOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [popUp, setPopUp] = useState(false);
  const [selected, setSelected] = React.useState<{
    label: string;
    value: string;
  }>({ label: "", value: "" });

  const handleOpenDropdown = () => {
    setDropDownOpen((p) => !p);
  };

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <DashBoardField title={"견적 요청 목록"}>
      <SearchFilterBox>
        <div className={"w-full flex"}>
          <form className={"flex flex-col gap-6"}>
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
                <div className={"flex gap-2"}>
                  <Radio
                    value={""}
                    label={"기타"}
                    selectedValue={""}
                    onChange={() => {}}
                  />
                  <Input
                    classNames={
                      "web:w-[386px] mobile:w-[214px] h-[40px] rounded-[8px]"
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
                <div className={"flex gap-2"}>
                  <Radio
                    value={""}
                    label={"기타"}
                    selectedValue={""}
                    onChange={() => {}}
                  />
                  <Input
                    classNames={
                      "web:w-[386px] mobile:w-[214px]  h-[40px] rounded-[8px]"
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
            <FieldSet label={"월간 물동"} align={"start"} required>
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
                <div className={"flex items-center"}>
                  <Radio
                    value={""}
                    label={"기타"}
                    selectedValue={""}
                    onChange={() => {}}
                  />
                  <Input
                    classNames={
                      "web:w-[386px] mobile:w-[214px] p-0 ml-2 h-[40px] rounded-[8px]"
                    }
                    name={"specEtc"}
                    value={""}
                    height={"h-[40px]"}
                    type={"text"}
                    handleChange={() => {}}
                    placeholder={"내용을 입력해 주세요"}
                    labelPosition={"no-label"}
                  />
                  <Button
                    className={"ml-2"}
                    title={"검색"}
                    onClick={() => {}}
                    variant={"bg-black"}
                    buttonSize={"md"}
                  />
                </div>
              </div>
            </FieldSet>
          </form>
        </div>
      </SearchFilterBox>
      <SearchPageTableView />
      <Dialog
        title={""}
        content={
          <div
            className={
              "web:w-[900px] tablet:w-[750px] mobile:w-[270px] box-border p-2 mb-4 flex flex-col gap-4"
            }>
            <h3 className={"text-common-normal text-title2 font-[700] "}>
              공급 소재 결과표
            </h3>
            <ConsumerProposeTable />
          </div>
        }
        isOpen={!popUp}
        onClose={() => {}}
        isAlert={true}
        size={"full"}
        btn2Title={"확인"}
        btn1Title={"닫기"}
        onButton1Click={() => {}}
        onButton2Click={() => {}}
      />
    </DashBoardField>
  );
};

export default SupplySearchView;
