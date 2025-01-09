"use client";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import Button from "@/app/_component/presentations/Button";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import Radio from "@/app/_component/presentations/Radio";
import { Fragment, useState } from "react";
import Dropdown from "@/app/_component/presentations/Dropdown";
import { DROPDOWN_TEST_BOX } from "@/app/_constant";
import Input from "@/app/_component/presentations/Input";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";
import Dialog from "@/app/_component/presentations/Dialog";
import useInputPosition from "@/app/_hook/useInputPosition";
import Pagination from "../common/Pagination";
const headers = [
  { label: "check", rowspan: 1 },
  { label: "번호", rowspan: 1 },
  { label: "구분", rowspan: 1 },
  { label: "아이디", rowspan: 1 },
  { label: "기업명", rowspan: 1 },
  { label: "대표자명", rowspan: 1 },
  { label: "담당자명", rowspan: 1 },
  { label: "담당자 연락처", rowspan: 1 },
];
const claimHeaders = [
  { label: "번호", rowspan: 1 },
  { label: "클레임", rowspan: 1 },
  { label: "작성자", rowspan: 1 },
];
const claimData = [
  {
    id: 1,
    claim: "클레임 1",
    writer: "김파운드",
  },
  {
    id: 2,
    claim: "클레임 3",
    writer: "김파운드",
  },
  {
    id: 3,
    claim: "클레임 2",
    writer: "김파운드",
  },
];
const mockData = [
  {
    id: 1,
    category: "수요자",
    memberId: "test_01",
    companyName: "파운드컴퍼니",
    representativeName: "김파운드",
    managerName: "오파운드",
    managerPhone: "01099999999",
  },
  {
    id: 2,
    category: "수요자",
    memberId: "test_02",
    companyName: "파운드컴퍼니",
    representativeName: "김파운드",
    managerName: "오파운드",
    managerPhone: "01099999999",
  },
  {
    id: 3,
    category: "수요자",
    memberId: "test_03",
    companyName: "파운드컴퍼니",
    representativeName: "김파운드",
    managerName: "오파운드",
    managerPhone: "01099999999",
  },
  {
    id: 4,
    category: "수요자",
    memberId: "test_04",
    companyName: "파운드컴퍼니",
    representativeName: "김파운드",
    managerName: "오파운드",
    managerPhone: "01099999999",
  },
  {
    id: 5,
    category: "수요자",
    memberId: "test_05",
    companyName: "파운드컴퍼니",
    representativeName: "김파운드",
    managerName: "오파운드",
    managerPhone: "01099999999",
  },
  {
    id: 6,
    category: "수요자",
    memberId: "test_06",
    companyName: "파운드컴퍼니",
    representativeName: "김파운드",
    managerName: "오파운드",
    managerPhone: "01099999999",
  },
];

const InputArray = [
  {
    label: "아이디(이메일)",
    name: "id",
  },
  { label: "비밀번호", name: "password" },
  { label: "비밀번호 확인", name: "passwordCheck" },
  { label: "사업자 등록번호", name: "businessNumber" },
  { label: "기업명", name: "companyName" },
  { label: "대표자명", name: "representativeName" },
  { label: "대표번호", name: "representativePhone" },
  { label: "대표자 연락처", name: "representativeCellPhone" },
  { label: "본사주소", name: "address" },
  { label: "담당자명", name: "managerName" },
  { label: "담당자 유선 연락처", name: "managerPhone" },
  { label: "담당자 휴대폰번호", name: "managerCellPhone" },
];
const LEVEL_DATA = [
  { label: "LV.1", value: "level1" },
  { label: "LV.2", value: "level2" },
  { label: "LV.3", value: "level3" },
  { label: "LV.4", value: "level4" },
];
export default function AdminMember() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [selected, setSelected] = useState<{
    label: string;
    value: string;
  }>({ label: "", value: "" });
  const { labelPosition } = useInputPosition();
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  const handleOpenDropdown = () => {
    setOpen((p) => !p);
  };

  return (
    <div>
      <DashBoardField title={"회원관리"}>
        <SearchFilterBox>
          <div className={"flex flex-col gap-4"}>
            <div className={"flex gap-4"}>
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
                value={"consumer"}
                label={"수요자"}
                isChecked={selectedValue === "consumer"}
                selectedValue={selectedValue}
                onChange={(v) => {
                  handleRadioChange(v);
                }}
              />{" "}
              <Radio
                value={"supplier"}
                label={"공급자"}
                isChecked={selectedValue === "supplier"}
                selectedValue={selectedValue}
                onChange={(v) => {
                  handleRadioChange(v);
                }}
              />
            </div>
            <div className={"flex gap-4"}>
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
              <Input
                label={""}
                labelPosition={"no-label"}
                type={"text"}
                handleChange={() => {}}
                value={""}
                name={"query"}
                classNames={"tablet:w-full mobile:w-full"}
              />{" "}
            </div>
          </div>
        </SearchFilterBox>
        <div className={"flex flex-col gap-4"}>
          <div className={"flex justify-between mb-4 items-center "}>
            <span className={"text-[14px] text-normal_sub"}>총 10건</span>
            <Button
              title={"엑셀 저장"}
              onClick={() => {}}
              variant={"bg-primary"}
              buttonSize={"md"}
              width="w-[100px]"
            />
          </div>
          <div
            className={
              "web:max-w-[1000px] relative tablet:min-w-full mobile:max-w-[375px] overflow-scroll mobile:border mobile:rounded-[20px] tablet:rounded-none tablet:border-none "
            }>
            <table className="tablet:border-separate tablet:border-spacing-0 tablet:rounded-[20px] tablet:overflow-hidden">
              <thead>
                <tr>
                  {headers.map((header, index) =>
                    header.label === "check" ? (
                      <th
                        colSpan={0}
                        rowSpan={header.rowspan || 4}
                        className="w-[50px] text-[15px] mobile:border-[1px] mobile:border-t-0  tablet:border-[1px] whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]"
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
                        colSpan={1}
                        rowSpan={1}
                        className="w-[150px] text-[15px] mobile:border-[1px] mobile:border-t-0  tablet:border-[1px] whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]">
                        {header.label}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {mockData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${index === mockData.length - 1 ? "last-row" : ""}`}>
                    <td
                      className={
                        "text-[16px] h-[40px] px-4 border-line_normal border whitespace-nowrap text-center"
                      }>
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
                      {item.id}
                    </td>
                    <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                      {item.category}
                    </td>
                    <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                      <button
                        className="text-primary"
                        onClick={() => {
                          setPopUpOpen(true);
                        }}>
                        {item.memberId}
                      </button>
                    </td>
                    <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                      {item.companyName}
                    </td>
                    <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                      {item.representativeName}
                    </td>
                    <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                      {item.managerName}
                    </td>
                    <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                      {item.managerPhone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DashBoardField>

      <Dialog
        title={""}
        content={
          <div
            className={
              "tablet:w-[500px] mobile:w-full py-4 overflow-hidden mobile:h-[500px] tablet:h-[800px] "
            }>
            <p className={"text-title2 font-[500] px-4"}>회원정보 상세</p>
            <div
              className={
                "flex flex-col gap-4 w-full mt-[20px] overflow-y-scroll mobile:h-[400px] tablet:h-[700px]"
              }>
              <form
                className={
                  "flex flex-col gap-2 w-full tablet:px-6 mobile:px-4 "
                }>
                <p className="text-title3">회원정보</p>
                {InputArray.map((item, index) => (
                  <Fragment key={index}>
                    <Input
                      height="h-[40px]"
                      label={item.label}
                      labelPosition={labelPosition}
                      type={"text"}
                      handleChange={() => {}}
                      value={""}
                      name={item.name}
                      classNames={
                        "tablet:min-w-[460px] mobile:min-w-[300px] border-b-[1px]"
                      }
                    />
                  </Fragment>
                ))}
              </form>
              <div className={"flex gap-4 tablet:px-6 mobile:px-4  flex-col"}>
                <p className="text-title3">레벨 부여</p>
                <div className={"flex gap-4"}>
                  {LEVEL_DATA.map((item, index) => (
                    <Radio
                      key={index}
                      value={item.value}
                      label={item.label}
                      isChecked={selectedValue === item.value}
                      selectedValue={selectedValue}
                      onChange={(v) => {
                        handleRadioChange(v);
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className={"flex gap-4 tablet:px-6 mobile:px-4 flex-col"}>
                <p className="text-title3">클레임 이력</p>
                <div
                  className={
                    "flex gap-4 border rounded-[24px] w-full flex-col"
                  }>
                  <table className="border-separate border-spacing-0 w-full rounded-[20px] overflow-hidden">
                    <thead>
                      <tr className="w-full text-[15px] rounded-[24px] border-[1px] whitespace-nowrap p-2 ">
                        {claimHeaders.map((header, index) => (
                          <th
                            key={index}
                            className={`${header.label === "번호" ? "w-[50px]" : "w-[100px]"} text-[15px]  border-[1px] whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]`}>
                            {header.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {claimData.map((item, index) => (
                        <tr
                          key={index}
                          className={`${index === claimData.length - 1 ? "last-row" : ""}`}>
                          <td className="text-[16px] h-[32px]  px-4 border whitespace-nowrap text-center">
                            {item.id}
                          </td>
                          <td className="text-[16px]  h-[32px] px-4 border whitespace-nowrap text-center">
                            {item.claim}
                          </td>
                          <td className="text-[16px] h-[32px]  px-4 border whitespace-nowrap text-center">
                            {item.writer}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Pagination
                  totalPages={3}
                  currentPage={1}
                  onPageChange={() => {}}
                />
              </div>
            </div>
          </div>
        }
        isOpen={popUpOpen}
        onClose={() => {}}
        isAlert={true}
        size={"full"}
        btn1Title={"확인"}
        onButton1Click={() => {
          setPopUpOpen(false);
        }}
        hasBtn={true}
        align={"start"}
      />
    </div>
  );
}
