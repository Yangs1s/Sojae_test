"use client";
import React, { useState } from "react";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import StatusBox from "@/app/_component/presentations/StatusBox";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import EstimateTableView from "@/app/_component/containers/dashboard/table/EstimateTableView";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Dropdown from "@/app/_component/presentations/Dropdown";
import { DROPDOWN_TEST_BOX } from "@/app/_constant";
import Radio from "@/app/_component/presentations/Radio";
import CustomDatePicker from "@/app/_component/containers/common/CustomDatePicker";
import Button from "@/app/_component/presentations/Button";

const ConsumerDashboardView = () => {
  const [dropDownOpen, setDropDownOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
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
    <div className={"flex flex-col gap-12"}>
      <DashBoardField title={"전체 현황"}>
        <SearchFilterBox>
          <div
            className={
              "w-full flex web:flex-col tablet:flex-row tablet:items-start tablet:mb-0 mobile:flex-col mobile:mb-2 web:gap-6 mobile:gap-6 tablet:gap-4"
            }>
            <div className={"flex tablet:flex-row mobile:flex-col"}>
              <FieldSet label={"기간"} required={false}>
                <Dropdown
                  data={DROPDOWN_TEST_BOX}
                  handleClose={() => {
                    setDropDownOpen(false);
                  }}>
                  <Dropdown.Trigger
                    open={dropDownOpen}
                    onClick={handleOpenDropdown}
                    width={"w-[140px] flex-1"}
                    selectedItem={selected}
                  />
                  <Dropdown.Menu open={dropDownOpen}>
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
            </div>
            <FieldSet label={""} required={false}>
              <div className={"flex gap-5 z-2 tablet:flex-row mobile:flex-col"}>
                <div className={"flex gap-3"}>
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
                <div
                  className={
                    "flex gap-3 tablet:flex-row mobile:flex-col mt-2 w-full"
                  }>
                  <CustomDatePicker value={""} onChange={() => {}} />
                  <span className={"mobile:hidden tablet:block"}>~</span>
                  <CustomDatePicker value={""} onChange={() => {}} />
                </div>
              </div>
            </FieldSet>
          </div>
        </SearchFilterBox>
        <div className={"tablet:flex mobile:grid mobile:grid-cols-3 gap-6"}>
          <StatusBox
            info={{
              num: 9,
              desc: "총 견적 요청수",
              textColor: "text-primary-normal",
            }}
            variant={"bg-primary"}
          />
          <StatusBox
            info={{
              num: 1,
              desc: "견적 요청 완료",
              textColor: "text-normal_sub",
            }}
            variant={"bg-normal"}
          />
          <StatusBox
            info={{
              num: 2,
              desc: "소재모아 제안",
              textColor: "text-normal_sub",
            }}
            variant={"bg-normal"}
          />
          <StatusBox
            info={{ num: 3, desc: "견적 거절", textColor: "text-normal_sub" }}
            variant={"bg-normal"}
          />
          <StatusBox
            info={{ num: 2, desc: "계약 체결", textColor: "text-normal_sub" }}
            variant={"bg-normal"}
          />
          <StatusBox
            info={{ num: 1, desc: "공급 완료", textColor: "text-normal_sub" }}
            variant={"bg-normal"}
          />
        </div>
      </DashBoardField>
      <DashBoardField title={"견적 요청 현황"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <SearchFilterBox>
          <div
            className={
              "w-full flex web:flex-col tablet:flex-row tablet:items-start tablet:mb-0 mobile:flex-col mobile:mb-2 web:gap-6 mobile:gap-6 tablet:gap-4"
            }>
            <div className={"flex tablet:flex-row mobile:flex-col"}>
              <FieldSet label={"기간"} required={false}>
                <Dropdown
                  data={DROPDOWN_TEST_BOX}
                  handleClose={() => {
                    setDropDownOpen(false);
                  }}>
                  <Dropdown.Trigger
                    open={dropDownOpen}
                    onClick={handleOpenDropdown}
                    width={"w-[140px] flex-1"}
                    selectedItem={selected}
                  />
                  <Dropdown.Menu open={dropDownOpen}>
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
            </div>
            <FieldSet label={""} required={false}>
              <div className={"flex gap-5 z-2 tablet:flex-row mobile:flex-col"}>
                <div className={"flex gap-3"}>
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
                <div
                  className={"flex gap-3 tablet:flex-row mobile:flex-col mt-2"}>
                  <CustomDatePicker value={""} onChange={() => {}} />
                  <span className={"mobile:hidden tablet:block"}>~</span>
                  <CustomDatePicker value={""} onChange={() => {}} />
                </div>
              </div>
            </FieldSet>
          </div>
        </SearchFilterBox>
        <EstimateTableView />
      </DashBoardField>
      <DashBoardField title={"견적 제안 현황"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <SearchFilterBox>
          <SearchFilterBox.Type1 />
        </SearchFilterBox>
        <EstimateTableView />
      </DashBoardField>
      <div className={"grid grid-cols-2 grid-rows-2 gap-4 mb-[10%]"}>
        <DashBoardField title={"공급사/소재수 현황"}>
          <div>그래프 영역</div>
        </DashBoardField>
        <DashBoardField title={"소재 별 공급물량 현황"}>
          <div>그래프 영역</div>
        </DashBoardField>
        <DashBoardField title={"소재 별 수요사 수"}>
          <div>그래프 영역</div>
        </DashBoardField>
        <DashBoardField title={"공급/수요 업체 위치"}>
          <div>
            <img src="/map.png" alt="지도" />
          </div>
        </DashBoardField>
      </div>
    </div>
  );
};

export default ConsumerDashboardView;
