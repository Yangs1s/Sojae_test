"use client";
import React, { useState } from "react";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import Radio from "@/app/_component/presentations/Radio";
import Button from "@/app/_component/presentations/Button";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import Dropdown from "@/app/_component/presentations/Dropdown";
import { DROPDOWN_TEST_BOX } from "@/app/_constant";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Input from "@/app/_component/presentations/Input";
import ContractTable from "@/app/_component/containers/dashboard/table/ContractTable";
import MaterialTableView from "@/app/_component/containers/dashboard/table/MaterialTableView";
import CustomDatePicker from "@/app/_component/containers/common/CustomDatePicker";
import Dialog from "@/app/_component/presentations/Dialog";

const AdminMaterialContractView = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [popUpOpen, setPopUpOpen] = React.useState(true);
  const [selected, setSelected] = React.useState<{
    label: string;
    value: string;
  }>({ label: "", value: "" });
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleOpenDropdown = () => {
    setOpen((p) => !p);
  };

  return (
    <div className={"flex flex-col gap-12 tablet:px-6"}>
      <DashBoardField title={"계약 체결 및 납품 현황"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <SearchFilterBox>
          <div className={"flex gap-4 flex-col"}>
            <FieldSet label={"기간"} required={false}>
              <Dropdown
                data={DROPDOWN_TEST_BOX}
                handleClose={() => {
                  setOpen(false);
                }}>
                <Dropdown.Trigger
                  open={open}
                  onClick={handleOpenDropdown}
                  width={"w-[140px] flex-1"}
                  selectedItem={selected}
                />
                <Dropdown.Menu open={open}>
                  {DROPDOWN_TEST_BOX.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      item={item}
                      selected={selected}
                      onClick={() => {
                        setSelected(item);
                      }}></Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </FieldSet>
            <FieldSet label={""} required={false}>
              <div className={"flex gap-3 mobile:flex-col tablet:flex-row"}>
                <div className={"flex mobile:gap-4"}>
                  <Radio
                    value={"all"}
                    label={"전체"}
                    isChecked={selectedValue === "all"}
                    selectedValue={selectedValue}
                    onChange={(v) => {
                      handleRadioChange(v);
                    }}
                  />
                  <Radio
                    value={"date"}
                    label={"기간 설정"}
                    isChecked={selectedValue === "date"}
                    selectedValue={selectedValue}
                    onChange={(v) => {
                      handleRadioChange(v);
                    }}
                  />
                </div>
                <div className={"flex gap-3 tablet:flex-row mobile:flex-col "}>
                  <CustomDatePicker value={""} onChange={() => {}} />
                  <span className={"mobile:hidden tablet:block"}>~</span>
                  <CustomDatePicker value={""} onChange={() => {}} />
                </div>
              </div>
            </FieldSet>
            <FieldSet label={""} required={false}>
              <div
                className={
                  "flex gap-4 items-center tablet:flex-row mobile:flex-col "
                }>
                <Dropdown
                  data={DROPDOWN_TEST_BOX}
                  handleClose={() => {
                    setOpen(false);
                  }}>
                  <Dropdown.Trigger
                    open={open}
                    onClick={handleOpenDropdown}
                    width={"tablet:w-[140px] mobile:w-[240px] flex-1"}
                    selectedItem={selected}
                  />
                  <Dropdown.Menu open={open}>
                    {DROPDOWN_TEST_BOX.map((item, index) => (
                      <Dropdown.Item
                        key={index}
                        item={item}
                        selected={selected}
                        onClick={() => {
                          setSelected(item);
                        }}></Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Input
                  label={""}
                  labelPosition={"no-label"}
                  type={"text"}
                  handleChange={() => {}}
                  value={""}
                  name={"supplier"}
                  classNames={"tablet:w-[200px] mobile:w-full"}
                />{" "}
                <Button
                  title={"검색"}
                  onClick={() => {}}
                  variant={"bg-black"}
                  buttonSize={"md"}
                  className={"tablet:w-fit mobile:w-full"}
                />
              </div>
            </FieldSet>
          </div>
        </SearchFilterBox>
        <div
          className={
            "tablet:w-full flex tablet:justify-between tablet:items-center mobile:flex-col tablet:flex-row mobile:gap-6 web:gap-1"
          }>
          <span
            className={
              "tablet:text-body1 mobile:text-title2 mobile:font-[500]"
            }>
            총 3건의 계약
          </span>
          <div
            className={
              "tablet:flex web:gap-3  tablet:z-20 tablet:right-0 mobile:grid-cols-2 mobile:gap-2 mobile:grid"
            }>
            <Button
              title={"엑셀 다운로드"}
              onClick={() => {}}
              variant={"bg-primary"}
              buttonSize={"md"}
              className={"w-full"}
            />
            <Button
              title={"납품일정 등록"}
              onClick={() => {}}
              variant={"bg-secondary"}
              buttonSize={"md"}
              className={"w-full"}
            />
            <Button
              title={"수정"}
              onClick={() => {}}
              variant={"bg-black"}
              buttonSize={"md"}
              className={"w-full"}
            />
          </div>
        </div>
        <div className={"relative flex flex-col"}>
          <ContractTable />
        </div>
      </DashBoardField>
      <DashBoardField
        title={"납품 현황"}
        subTitle={"납품 현황(*계약번호: 24_000001)"}>
        <div
          className={
            "tablet:w-fit tablet:absolute flex gap-3 top-[-16px] z-20 right-0"
          }>
          <Button
            title={"엑셀 다운로드"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
            className={" mobile:w-full tablet:w-fit"}
          />
        </div>
        <div
          className={
            "relative tablet:flex tablet:gap-4 mobile:grid mobile:gap-2 px-1 mobile:grid-cols-2"
          }>
          <Radio
            value={"all"}
            label={"제안 진행 중"}
            isChecked={selectedValue === "all"}
            selectedValue={selectedValue}
            onChange={(v) => {
              handleRadioChange(v);
            }}
          />
          <Radio
            value={"date"}
            label={"계약체결"}
            isChecked={selectedValue === "date"}
            selectedValue={selectedValue}
            onChange={(v) => {
              handleRadioChange(v);
            }}
          />{" "}
          <Radio
            value={"date"}
            label={"소재 전달 완료"}
            isChecked={selectedValue === "date"}
            selectedValue={selectedValue}
            onChange={(v) => {
              handleRadioChange(v);
            }}
          />
        </div>
        <ContractTable />
      </DashBoardField>
      <DashBoardField title={"소재 상세 정보"}>
        <MaterialTableView />
      </DashBoardField>

      <Dialog
        title={"납품 일정 등록"}
        content={
          <div
            className={"tablet:w-full p-4 flex flex-col justify-center gap-2"}>
            <p className={"text-body1 font-[500]"}>기간</p>
            <div className={"flex flex-col items-start"}>
              <CustomDatePicker value={""} onChange={() => {}} />
              <p className={"ml-4"}>~</p>
              <CustomDatePicker value={""} onChange={() => {}} />
            </div>
          </div>
        }
        isOpen={popUpOpen}
        onClose={() => {}}
        isAlert={false}
        size={"full"}
        btn2Title={"취소"}
        btn1Title={"수정완료"}
        onButton1Click={() => {}}
        onButton2Click={() => {}}
        hasBtn={true}
        align={"start"}
      />
    </div>
  );
};

export default AdminMaterialContractView;
