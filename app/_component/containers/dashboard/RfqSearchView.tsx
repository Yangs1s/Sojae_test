"use client";
import React, { Fragment, useState } from "react";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import RfqTable from "@/app/_component/containers/dashboard/table/RfqTable";
import RfqDetailTable from "@/app/_component/containers/dashboard/table/RfqDetailTable";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Radio from "@/app/_component/presentations/Radio";
import Input from "@/app/_component/presentations/Input";
import { COLOR_OPTIONS, MONTHLY_WATER } from "@/app/_constant";
import Button from "@/app/_component/presentations/Button";
import Dialog from "@/app/_component/presentations/Dialog";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";
import Link from "next/link";
const headers = [
  { label: "번호", rowspan: 2 },
  { label: "제안 번호", rowspan: 2 },
  { label: "이미지", rowspan: 2 },
  { label: "소재정보", colspan: 5 },
  { label: "소재 품질분석", rowspan: 2 },
  { label: "샘플 요청(kg)", rowspan: 2 },
  { label: "관심소재", rowspan: 2 },
  { label: "진행 현황", rowspan: 2 },
];

const subHeaders = [
  { label: "종류", rowspan: 1 },
  { label: "형태", rowspan: 1 },
  { label: "색상", rowspan: 1 },
  { label: "원료 정보", rowspan: 1 },
  { label: "월간 물통(ton/월)", rowspan: 1 },
];

const mockData = [
  {
    id: 1,
    proposeNumber: "24_0001",
    materialImage: "https://via.placeholder.com/50", // 이미지 URL 예시
    type: "PE",
    shape: "펠릿",
    color: "검은색",
    rawMaterialInfo: "PCR",
    deliveryVolume: "120",
    materialAnalysisResult: "결과 미검출",
    sample: "3",
    interest: "",
    request: "",
  },
];
const RfqSearchView = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [open, setOpen] = React.useState(true);

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div className={"flex flex-col gap-[72px]"}>
      <DashBoardField title={"RFQ 제안 검색"}>
        <SearchFilterBox>
          <div className={"w-full flex"}>
            <form className={"flex flex-col gap-3"}>
              <div className={"flex flex-col gap-6"}>
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
                  <div className={"flex gap-3 justify-start flex-wrap"}>
                    <div className={"flex gap-3 web:flex-row mobile:flex-wrap"}>
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
              </div>
              <div className={"flex flex-col gap-6"}>
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
              </div>
            </form>
          </div>
        </SearchFilterBox>
      </DashBoardField>
      <DashBoardField title={"공급 소재 검색 결과 표"}>
        {" "}
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <RfqTable />
      </DashBoardField>
      <DashBoardField title={"공급 소재 상세 표"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <RfqDetailTable />
      </DashBoardField>
      <Dialog
        title={"공급 소재 검색 결과 표"}
        content={
          <div
            className={
              "p-4 flex flex-col gap-4 mobile:w-[300px] tablet:w-full"
            }>
            <Table />
          </div>
        }
        isOpen={open}
        onClose={() => {}}
        isAlert={true}
        size={"full"}
        btn2Title={"닫기"}
        btn1Title={"닫기"}
        onButton1Click={() => {
          setOpen(false);
        }}
        hasBtn={true}
        align={"start"}
      />
    </div>
  );
};

export default RfqSearchView;

const Table = () => {
  return (
    <div
      className={
        "web:max-w-[1120px] tablet:max-w-[1000px] web:rounded-[24px] tablet:min-w-full mobile:max-w-[375px] overflow-scroll mobile:border mobile:rounded-[20px] tablet:rounded-none tablet:border-none "
      }>
      <table
        className={
          "tablet:border-separate tablet:border-spacing-0 tablet:rounded-[20px] web:rounded-[24px] tablet:overflow-hidden"
        }>
        <thead>
          <tr>
            {headers.map((header, index) =>
              header.label === "check" ? (
                <th
                  colSpan={0}
                  rowSpan={header.rowspan || 4}
                  className="w-[100px] text-[15px] mobile:border-[1px] mobile:border-t-0  tablet:border-[1px] whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]"
                  key={index}>
                  <CheckboxGroup
                    type={"single"}
                    id={"check"}
                    checked={true}
                    onChange={() => {}}
                    size={"w-[24px] h-[24px] flex justify-center m-auto"}
                    multiChecked={[]}
                    setMultiChecked={() => {}}>
                    <CheckboxGroup.CheckBox />
                    <CheckboxGroup.Label label={""} htmlFor={"check"} />
                  </CheckboxGroup>
                </th>
              ) : (
                <th
                  key={index}
                  colSpan={header.colspan || 1}
                  rowSpan={header.rowspan || 1}
                  className="w-[100px] text-[15px] mobile:border-[1px] mobile:border-t-0  tablet:border-[1px] whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]">
                  {header.label}
                </th>
              )
            )}
          </tr>
          {/* 하위 헤더 */}
          <tr>
            {subHeaders.map((subHeader, index) => (
              <th
                key={index}
                colSpan={1}
                rowSpan={subHeader.rowspan || 1}
                className="w-[100px] text-[14px] tablet:border-[1px] mobile:border-[1px] mobile:border-t-0  whitespace-nowrap  bg-bg_normal border-line_normal px-2 py-1">
                {subHeader.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr
              key={item.id}
              className={`${index === mockData.length - 1 ? "last-row" : ""}`}>
              <td
                className={`text-[16px] h-[48px] px-4  border-line_normal border whitespace-nowrap text-center last:rounded-bl-[24px]`}>
                <CheckboxGroup
                  type={"single"}
                  id={"check"}
                  checked={true}
                  onChange={() => {}}
                  size={"w-[24px] h-[24px]"}
                  multiChecked={[]}
                  setMultiChecked={() => {}}>
                  <CheckboxGroup.CheckBox />
                  <CheckboxGroup.Label label={""} htmlFor={"agree"} />
                </CheckboxGroup>
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.proposeNumber}
              </td>
              <td className="px-1 w-[120px] flex justify-between items-center border-line_normal border whitespace-nowrap text-center">
                <img
                  src={item.materialImage}
                  alt="소재 이미지"
                  width="50"
                  className="m-auto"
                />
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.type}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.shape}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.color}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.rawMaterialInfo}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.deliveryVolume}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.materialAnalysisResult}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.sample}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                <img src="/fullHeart.svg" alt="하트" />
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                <Link href={"/"}>요청하기</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
