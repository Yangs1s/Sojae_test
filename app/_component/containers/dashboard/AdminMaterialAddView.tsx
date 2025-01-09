"use client";
import React, { Fragment, useState } from "react";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Input from "@/app/_component/presentations/Input";
import StatusBox from "@/app/_component/presentations/StatusBox";
import EstimateTableView from "@/app/_component/containers/dashboard/table/EstimateTableView";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import Button from "@/app/_component/presentations/Button";
import Dialog from "@/app/_component/presentations/Dialog";
import ContractPaper from "@/app/_component/presentations/ContractPaper";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";
import Link from "next/link";
import Dropdown from "@/app/_component/presentations/Dropdown";
import { DROPDOWN_TEST_BOX } from "@/app/_constant";

const MATCH_ARR = [
  {
    label: "소재명",
    type: "text",
    value: "name",
    content: "소재명입니다.",
  },
  {
    label: "종류",
    type: "text",
    value: "spec",
    content: "PE",
  },
  {
    label: "형태",
    type: "text",
    value: "form",
    content: "팰릿",
  },
  {
    label: "색상",
    type: "select",
    value: "color",
    content: "",
  },
  {
    label: "가격",
    type: "arrange",
    value: "price",
    content: "",
  },
  {
    label: "점도",
    type: "arrange",
    value: "viscosity",
    content: "",
  },
  {
    label: "회분",
    type: "arrange",
    value: "ash",
    content: "",
  },
];

const AdminMaterialAddView = () => {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = React.useState<{
    label: string;
    value: string;
  }>({ label: "", value: "" });
  const handleOpenDropdown = () => {
    setDropdown((p) => !p);
  };

  return (
    <div className={"flex flex-col gap-12 relative"}>
      <DashBoardField title={"견적/제안 관리"}>
        <SearchFilterBox>
          <div className={"flex flex-col gap-4"}>
            <SearchFilterBox.Type1 />
            <FieldSet label={"고객사명"} required={false}>
              <Input
                label={""}
                labelPosition={"no-label"}
                type={"text"}
                handleChange={() => {}}
                value={""}
                name={"supplier"}
                classNames={"tablet:w-[200px] mobile:w-full"}
              />
            </FieldSet>
            <Button
              title={"검색"}
              onClick={() => {}}
              variant={"bg-black"}
              buttonSize={"lg"}
              className={"mt-1"}
            />
          </div>
        </SearchFilterBox>
      </DashBoardField>
      <DashBoardField title={"RFQ 목록"}>
        <div
          className={
            "tablet:flex tablet:gap-3 tablet:absolute tablet:top-[0px] " +
            "tablet:z-20 tablet:right-0 mobile:grid-cols-2 " +
            "mobile:gap-2 mobile:grid"
          }>
          <Button
            title={"엑셀 다운로드"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
          <Button
            title={"저장"}
            onClick={() => {}}
            variant={"bg-black"}
            buttonSize={"md"}
          />
          <Button
            title={"제안요청"}
            onClick={() => {}}
            variant={"bg-secondary"}
            buttonSize={"md"}
          />
          <Button
            title={"수정"}
            onClick={() => {}}
            variant={"bg-black"}
            buttonSize={"md"}
          />
        </div>
        <EstimateTableView />
      </DashBoardField>
      <DashBoardField title={"제안목록"}>
        <div className={"absolute flex gap-3 top-[-16px] z-20 right-0"}>
          <Button
            title={"엑셀 다운로드"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <EstimateTableView />
      </DashBoardField>
      <DashBoardField title={"소재 누적 현황"}>
        {/*그래프 영역이라 그냥 사진으로 대체했습니다.*/}
        <figure className={"w-full"}>
          <img src={"/graph.png"} alt={"그래프"} />
        </figure>
      </DashBoardField>
      <Dialog
        title={"제안 내용 수정"}
        content={
          <div
            className={
              "pb-8 pt-4 mobile:w-auto tablet:w-full flex flex-col gap-4"
            }>
            <div
              className={
                "mobile:w-[300px] pl-3 tablet:w-full flex flex-col gap-4 overflow-x-scroll "
              }>
              <Table />
            </div>
          </div>
        }
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
        isAlert={false}
        size={"full"}
        btn2Title={"취소"}
        btn1Title={"수정완료"}
        onButton1Click={() => {
          setOpen(false);
        }}
        onButton2Click={() => {
          setOpen(false);
        }}
        hasBtn={true}
        align={"start"}
      />

      <Dialog
        title={"제안 매칭"}
        content={
          <div
            className={
              "pt-4 pb-8 px-9 flex justify-center tablet:w-[640px] mobile:w-[300px] "
            }>
            <div className={"flex flex-col gap-4 px-12 "}>
              <div
                className={
                  "tablet:w-[600px]  border border-line_normal rounded-[12px] mobile:w-[270px] overflow-x-scroll "
                }>
                <form
                  className={"flex flex-col  tablet:w-full mobile:w-[500px]"}>
                  {MATCH_ARR.map((item) => (
                    <div
                      key={item.value}
                      className={
                        "flex items-center gap-2 border-b-[1px] border-b-line_normal w-full"
                      }>
                      <div
                        className={
                          "flex justify-center items-center bg-bg_normal h-12 w-36"
                        }>
                        {item.label}
                      </div>
                      {item.type === "text" ? (
                        <div className={"flex-1 w-[200px]"}>{item.content}</div>
                      ) : item.type === "arrange" ? (
                        <div
                          className={
                            "flex flex-1 justify-start w-[200px] gap-1"
                          }>
                          <input
                            onChange={() => {}}
                            value={""}
                            name={"max"}
                            type={"text"}
                            placeholder={"Min"}
                            className={
                              "tablet:w-[100px]  h-[46px] border-b-[1px] border-line_normal outline-0"
                            }
                          />
                          <input
                            onChange={() => {}}
                            value={""}
                            name={"max"}
                            type={"text"}
                            placeholder={"Max"}
                            className={
                              "tablet:w-[120px] h-[46px] border-b-[1px] border-line_normal outline-0"
                            }
                          />
                        </div>
                      ) : (
                        <div className={"flex-1 h-12 w-auto pb-4"}>
                          <Dropdown
                            data={DROPDOWN_TEST_BOX}
                            handleClose={() => {
                              setDropdown(false);
                            }}>
                            <Dropdown.Trigger
                              open={dropdown}
                              selectedItem={selectedItem}
                              onClick={handleOpenDropdown}
                              width={""}
                            />
                            <Dropdown.Menu open={dropdown}>
                              {DROPDOWN_TEST_BOX.map((item, index) => (
                                <Dropdown.Item
                                  item={item}
                                  key={index}
                                  onClick={() => setSelectedItem(item)}
                                  selected={selectedItem}
                                />
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      )}
                    </div>
                  ))}
                </form>
              </div>
            </div>
          </div>
        }
        isOpen={open2}
        onClose={() => {
          setOpen2(false);
        }}
        isAlert={false}
        size={"full"}
        btn2Title={"취소"}
        btn1Title={"확인"}
        onButton1Click={() => {
          setOpen2(false);
        }}
        onButton2Click={() => {
          setOpen2(false);
        }}
        hasBtn={true}
        align={"start"}
      />
    </div>
  );
};

export default AdminMaterialAddView;

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
const Table = () => {
  return (
    <div
      className={
        "mobile:w-[280px] tablet:max-w-full overflow-scroll mobile:border mobile:rounded-[20px] tablet:rounded-none tablet:border-none "
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
