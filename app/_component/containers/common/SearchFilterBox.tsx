"use client";
import React, { Fragment, useState } from "react";
import Dropdown from "@/app/_component/presentations/Dropdown";
import {
  COLOR_OPTIONS,
  DROPDOWN_TEST_BOX,
  MONTHLY_WATER,
} from "@/app/_constant";
import Radio from "@/app/_component/presentations/Radio";
import Button from "@/app/_component/presentations/Button";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Input from "@/app/_component/presentations/Input";
import CustomDatePicker from "@/app/_component/containers/common/CustomDatePicker";

const SearchFilterBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"w-full p-6 bg-bg_normal rounded-12 relative"}>
      <h3 className={"text-title1 font-[500] mb-3"}>검색 설정</h3>
      {children}
    </div>
  );
};

export default SearchFilterBox;

SearchFilterBox.Type1 = ({ hasBtn }: { hasBtn?: boolean }) => {
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
    <div
      className={
        "w-full flex  web:flex-col tablet:flex-row tablet:items-start tablet:mb-0  mobile:flex-col mobile:mb-2 gap-6"
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
          <div className={"flex gap-3 tablet:flex-row mobile:flex-col mt-2"}>
            <CustomDatePicker value={""} onChange={() => {}} />
            <span className={"mobile:hidden tablet:block"}>~</span>
            <CustomDatePicker value={""} onChange={() => {}} />
            {hasBtn && (
              <Button
                title={"검색"}
                onClick={() => {}}
                variant={"bg-black"}
                buttonSize={"sm"}
              />
            )}
          </div>
        </div>
      </FieldSet>
    </div>
  );
};

SearchFilterBox.Type2 = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  const [selected, setSelected] = React.useState<{
    label: string;
    value: string;
  }>({ label: "", value: "" });

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div
      className={
        "w-full flex web:flex-col tablet:flex-row tablet:items-start tablet:mb-0  mobile:flex-col mobile:mb-2 gap-6"
      }>
      <div className={"flex tablet:flex-col mobile:flex-col gap-6"}>
        <div
          className={
            "flex gap-6 tablet:items-center mobile:items-start justify-center tablet:flex-row mobile:flex-col"
          }>
          <div className={"flex gap-2"}>
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
          <div className={"flex gap-3 tablet:flex-row mobile:flex-col"}>
            <CustomDatePicker value={""} onChange={() => {}} />
            <span className={"mobile:hidden tablet:block"}>~</span>
            <CustomDatePicker value={""} onChange={() => {}} />
          </div>
        </div>
        <div className={"flex gap-2 mobile:flex-col tablet:flex-row"}>
          <div className={"flex tablet:flex-row mobile:flex-col gap-4"}>
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
                value={"save"}
                label={"임시 저장"}
                isChecked={selectedValue === "save"}
                selectedValue={selectedValue}
                onChange={(v) => {
                  handleRadioChange(v);
                }}
              />
            </div>
            <div className={"flex gap-4"}>
              <Radio
                value={"complete"}
                label={"견적요청 완료"}
                isChecked={selectedValue === "complete"}
                selectedValue={selectedValue}
                onChange={(v) => {
                  handleRadioChange(v);
                }}
              />
              <Radio
                value={"contract"}
                label={"계약체결"}
                isChecked={selectedValue === "contract"}
                selectedValue={selectedValue}
                onChange={(v) => {
                  handleRadioChange(v);
                }}
              />
            </div>
          </div>
          <Button
            className={"ml-auto "}
            title={"검색"}
            onClick={() => {}}
            variant={"bg-black"}
            buttonSize={"md"}
          />
        </div>
      </div>
    </div>
  );
};
//
SearchFilterBox.Type3 = () => {
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
  );
};
//
