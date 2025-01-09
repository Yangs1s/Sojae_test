"use client";

import React, { useState } from "react";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import StatusBox from "@/app/_component/presentations/StatusBox";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import EstimateTableView from "@/app/_component/containers/dashboard/table/EstimateTableView";
import MaterialRequestTable from "@/app/_component/containers/dashboard/table/MaterialRequestTable";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Input from "@/app/_component/presentations/Input";
import Dropdown from "@/app/_component/presentations/Dropdown";
import { DROPDOWN_TEST_BOX } from "@/app/_constant";
import Image from "next/image";
import Radio from "@/app/_component/presentations/Radio";
import CustomDatePicker from "@/app/_component/containers/common/CustomDatePicker";
import Button from "@/app/_component/presentations/Button";

const AdminDashboard = () => {
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
      <DashBoardField title={"견적/제안 관리"}>
        <SearchFilterBox>
          <div className={"flex flex-col tablet:gap-3 mobile:gap-14"}>
            <div
              className={
                "w-full flex  web:flex-col tablet:flex-row tablet:items-start tablet:mb-0  mobile:flex-col mobile:mb-2 gap-6"
              }>
              <div className={"flex  mobile:flex-col gap-4"}>
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
                <FieldSet label={""} required={false}>
                  <div
                    className={
                      "flex w-full gap-12 z-2 tablet:flex-row mobile:flex-col"
                    }>
                    <div className={"mobile:hidden tablet:block ml-[120px]"}>
                      &nbsp;
                    </div>
                    <div
                      className={"flex gap-4 mobile:flex-col tablet:flex-row"}>
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
                      <div
                        className={
                          "flex gap-3 tablet:flex-row mobile:flex-col mt-1 h-[48px]"
                        }>
                        <CustomDatePicker value={""} onChange={() => {}} />
                        <span className={"mobile:hidden tablet:block"}>~</span>
                        <CustomDatePicker value={""} onChange={() => {}} />
                      </div>
                    </div>
                  </div>
                </FieldSet>
              </div>
            </div>
            <FieldSet label={"수요사명"} required={false}>
              <Input
                label={""}
                labelPosition={"no-label"}
                type={"text"}
                handleChange={() => {}}
                value={""}
                name={"supplier"}
                classNames={"tablet:w-[240px] mobile:w-full"}
              />
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
        <EstimateTableView />
      </DashBoardField>
      <DashBoardField title={"소재 등록/제안 관리"}>
        <SearchFilterBox>
          <div className={"flex flex-col tablet:gap-3 mobile:gap-14"}>
            <div
              className={
                "w-full flex  web:flex-col tablet:flex-row tablet:items-start tablet:mb-0  mobile:flex-col mobile:mb-2 gap-6"
              }>
              <div className={"flex  mobile:flex-col gap-4"}>
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
                <FieldSet label={""} required={false}>
                  <div
                    className={
                      "flex w-full gap-12 z-2 tablet:flex-row mobile:flex-col"
                    }>
                    <div className={"mobile:hidden tablet:block ml-[120px]"}>
                      &nbsp;
                    </div>
                    <div
                      className={"flex gap-4 mobile:flex-col tablet:flex-row"}>
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
                      <div
                        className={
                          "flex gap-3 tablet:flex-row mobile:flex-col mt-1 h-[48px]"
                        }>
                        <CustomDatePicker value={""} onChange={() => {}} />
                        <span className={"mobile:hidden tablet:block"}>~</span>
                        <CustomDatePicker value={""} onChange={() => {}} />
                      </div>
                    </div>
                  </div>
                </FieldSet>
              </div>
            </div>
            <FieldSet label={"공급사명"} required={false}>
              <Input
                label={""}
                labelPosition={"no-label"}
                type={"text"}
                handleChange={() => {}}
                value={""}
                name={"supplier"}
                classNames={"tablet:w-[240px] mobile:w-full"}
              />
            </FieldSet>
          </div>
        </SearchFilterBox>
        <div
          className={
            "flex gap-6 tablet:flex-row mobile:flex-col tablet:justify-between w-full mobile:items-center"
          }>
          <StatusBox
            info={[
              {
                num: 9,
                desc: "소재 등록",
                textColor: "text-primary-normal",
              },
              {
                num: 5,
                desc: "승인 검토 중",
                textColor: "text-normal_sub",
              },
              {
                num: 4,
                desc: "등록 승인",
                textColor: "text-normal_sub",
              },
            ]}
            variant={"bg-primary"}
          />
          <StatusBox
            customStyle={
              "tablet:flex tablet:w-fit tablet:justify-between tablet:h-full tablet:items-center tablet:px-3 " +
              "mobile:grid mobile:grid-cols-[_minmax(124px,_1fr)_160px] gap-2 mobile:w-full mobile:h-[400px] "
            }
            info={[
              {
                num: 3,
                desc: "고객사 제안",
                textColor: "text-error",
              },
              {
                num: 1,
                desc: "미제안",
                textColor: "text-normal_sub",
              },
              {
                num: 1,
                desc: "고객사 검토 중",
                textColor: "text-normal_sub",
              },
              {
                num: 1,
                desc: "고객사 거절",
                textColor: "text-normal_sub",
              },
            ]}
            variant={"bg-error"}
          />
          <StatusBox
            info={[
              {
                num: 2,
                desc: "계약 체결",
                textColor: "text-secondary-normal",
              },
              {
                num: 1,
                desc: "소재 준비중",
                textColor: "text-normal_sub",
              },
              {
                num: 1,
                desc: "공급중",
                textColor: "text-normal_sub",
              },
            ]}
            variant={"bg-secondary"}
          />
        </div>
        <MaterialRequestTable />
      </DashBoardField>
      <div
        className={
          "tablet:grid tablet:grid-cols-2 tablet:grid-rows-1 gap-4 mb-[5%] mobile:flex mobile:flex-col mobile:gap-6"
        }>
        <DashBoardField title={"공급사/소재수 현황"}>
          {/* 어떤 라이브러리를 이용하실 지 몰라서 우선 이미지로만 붙여놨습니다. */}
          <figure>
            <Image src="/graph.png" alt="그래프" width={420} height={400} />
          </figure>
        </DashBoardField>{" "}
        <DashBoardField title={"소재 별 생산 Capa 및 공급 가능 물량"}>
          {/* 어떤 라이브러리를 이용하실 지 몰라서 우선 이미지로만 붙여놨습니다. */}
          <figure>
            <Image src="/graph.png" alt="그래프" width={420} height={400} />
          </figure>
        </DashBoardField>
        <DashBoardField title={"공급사 위치"}>
          <figure className={"w-full relative rounded-[20px]"}>
            <div
              className={
                "text-center top-4 flex justify-center items-center text-white rounded-full right-[25%] w-[57px] h-[57px] absolute bg-primary-normal"
              }>
              <p className={"text-title3 font-bold"}>12</p>
            </div>
            <div
              className={
                "text-center bottom-12 flex justify-center items-center text-white rounded-full right-[25%] w-[57px] h-[57px] absolute bg-primary-normal"
              }>
              <p className={"text-title3 font-bold"}>100</p>
            </div>
            <div
              className={
                "text-center top-24 flex justify-center items-center text-white rounded-full right-[40%] w-[57px] h-[57px] absolute bg-primary-normal"
              }>
              <p className={"text-title3 font-bold"}>3,652</p>
            </div>

            <div
              className={
                "text-center top-44 right-[49%] flex justify-center items-center text-white rounded-full w-[57px] h-[57px] absolute bg-primary-normal"
              }>
              <p className={"text-title3 font-bold"}>652</p>
            </div>
            <Image
              className={"rounded-[20px]"}
              src="/map2.svg"
              alt="그래프"
              width={488}
              height={400}
            />
          </figure>
        </DashBoardField>
        <DashBoardField title={"수요사 위치"}>
          <figure className={"w-full relative rounded-[20px]"}>
            <div
              className={
                "text-center top-4 flex justify-center items-center text-white rounded-full right-[25%] w-[57px] h-[57px] absolute bg-primary-normal"
              }>
              <p className={"text-title3 font-bold"}>12</p>
            </div>
            <div
              className={
                "text-center bottom-12 flex justify-center items-center text-white rounded-full right-[25%] w-[57px] h-[57px] absolute bg-primary-normal"
              }>
              <p className={"text-title3 font-bold"}>100</p>
            </div>
            <div
              className={
                "text-center top-24 flex justify-center items-center text-white rounded-full right-[40%] w-[57px] h-[57px] absolute bg-primary-normal"
              }>
              <p className={"text-title3 font-bold"}>3,652</p>
            </div>

            <div
              className={
                "text-center top-44 right-[49%] flex justify-center items-center text-white rounded-full w-[57px] h-[57px] absolute bg-primary-normal"
              }>
              <p className={"text-title3 font-bold"}>652</p>
            </div>
            <Image
              className={"rounded-[20px]"}
              src="/map2.svg"
              alt="그래프"
              width={488}
              height={400}
            />
          </figure>
        </DashBoardField>
      </div>
    </div>
  );
};

export default AdminDashboard;
