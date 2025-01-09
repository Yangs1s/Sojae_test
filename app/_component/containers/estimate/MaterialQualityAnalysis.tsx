"use client";
import React, { Dispatch, SetStateAction } from "react";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Radio from "@/app/_component/presentations/Radio";
import Input from "@/app/_component/presentations/Input";
import FlexibleLayout from "@/app/_component/presentations/FlexibleLayout";
interface Props {
  selectedValueInner: string;
  setSelectedValueInner: Dispatch<SetStateAction<string>>;
  selectedValue: string;
  setSelectedValue: Dispatch<SetStateAction<string>>;
}

const MaterialQualityAnalysis = ({
  selectedValueInner,
  setSelectedValueInner,
  selectedValue,
  setSelectedValue,
}: Props) => {
  const handleInnerRadioChange = (value: string) => {
    setSelectedValueInner(value);
  };
  return (
    <div className={"w-full flex web:mt-0 mobile:mt-2"}>
      <div
        className={
          "flex web:w-[1072px] tablet:w-[972px]  border-2 tablet:ml-auto web:mb-6 tablet:mr-4 py-6 mobile:px-4 tablet:px-6 rounded-[12px] justify-end flex-col gap-4 border-white_sub bg-bg_normal"
        }>
        <p className={"text-error text-[15px] whitespace-pre-wrap"}>
          *필소재 품질 분석이 필요한 항목들을 선택해 주세요.
        </p>

        {/* 점도 */}
        <FieldSet label={"점도"} required={false}>
          <FlexibleLayout extendStyleCode={"gap-2"}>
            <Radio
              value={"want1"}
              label={"필요"}
              selectedValue={selectedValueInner}
              isChecked={selectedValueInner === "want1"}
              onChange={handleInnerRadioChange}
            />

            <div
              className={"flex gap-1 ml-2 web:flex-row mobile:flex-col pl-6"}>
              <Input
                classNames={
                  '"web:w-[136px] bg-white mobile:w-[220px] border border-2 h-[40px] rounded-[8px] p-0'
                }
                name={"specEtc"}
                value={""}
                height={"h-[40px]"}
                type={"text"}
                handleChange={() => {}}
                labelPosition={"no-label"}
                placeholder={"최대"}
              />
              <Input
                classNames={
                  "web:w-[136px] bg-white mobile:w-[220px] border border-2  h-[40px] rounded-[8px]"
                }
                name={"specEtc"}
                value={""}
                height={"h-[40px]"}
                type={"text"}
                handleChange={() => {}}
                placeholder={"최소"}
                labelPosition={"no-label"}
              />
            </div>
            <Radio
              value={"sorry1"}
              label={"불필요"}
              isChecked={selectedValueInner === "sorry1"}
              selectedValue={selectedValueInner}
              onChange={handleInnerRadioChange}
            />
          </FlexibleLayout>
        </FieldSet>

        {/*밀도*/}
        <FieldSet label={"밀도"} required={false}>
          <FlexibleLayout extendStyleCode={"gap-2"}>
            <Radio
              value={"want1"}
              label={"필요"}
              selectedValue={selectedValueInner}
              isChecked={selectedValueInner === "want1"}
              onChange={handleInnerRadioChange}
            />

            <div
              className={"flex gap-1 ml-2 web:flex-row mobile:flex-col pl-6"}>
              <Input
                classNames={
                  '"web:w-[136px] bg-white mobile:w-[220px] border border-2 h-[40px] rounded-[8px] p-0'
                }
                name={"specEtc"}
                value={""}
                height={"h-[40px]"}
                type={"text"}
                handleChange={() => {}}
                labelPosition={"no-label"}
                placeholder={"최대"}
              />
              <Input
                classNames={
                  "web:w-[136px] bg-white mobile:w-[220px] border border-2  h-[40px] rounded-[8px]"
                }
                name={"specEtc"}
                value={""}
                height={"h-[40px]"}
                type={"text"}
                handleChange={() => {}}
                placeholder={"최소"}
                labelPosition={"no-label"}
              />
            </div>
            <Radio
              value={"sorry1"}
              label={"불필요"}
              isChecked={selectedValueInner === "sorry1"}
              selectedValue={selectedValueInner}
              onChange={handleInnerRadioChange}
            />
          </FlexibleLayout>
        </FieldSet>
        {/* 플라스틱 주재질 실험*/}
        <FieldSet label={"플라스틱 주재질 실험"} required={false}>
          <div className={"flex gap-4"}>
            <Radio
              value={"box-want"}
              label={"필요"}
              selectedValue={selectedValue}
              isChecked={selectedValueInner === "box-want"}
              onChange={handleInnerRadioChange}
            />
            <Radio
              value={"no-box"}
              label={"불필요"}
              selectedValue={selectedValue}
              isChecked={selectedValueInner === "no-box"}
              onChange={handleInnerRadioChange}
            />
          </div>
        </FieldSet>
        <FieldSet label={"회분"} required={false}>
          <FlexibleLayout extendStyleCode={"gap-2"}>
            <Radio
              value={"want1"}
              label={"필요"}
              selectedValue={selectedValueInner}
              isChecked={selectedValueInner === "want1"}
              onChange={handleInnerRadioChange}
            />

            <div
              className={"flex gap-1 ml-2 web:flex-row mobile:flex-col pl-6"}>
              <Input
                classNames={
                  '"web:w-[136px] bg-white mobile:w-[220px] border border-2 h-[40px] rounded-[8px] p-0'
                }
                name={"specEtc"}
                value={""}
                height={"h-[40px]"}
                type={"text"}
                handleChange={() => {}}
                labelPosition={"no-label"}
                placeholder={"최대"}
              />
              <Input
                classNames={
                  "web:w-[136px] bg-white mobile:w-[220px] border border-2  h-[40px] rounded-[8px]"
                }
                name={"specEtc"}
                value={""}
                height={"h-[40px]"}
                type={"text"}
                handleChange={() => {}}
                placeholder={"최소"}
                labelPosition={"no-label"}
              />
            </div>
            <Radio
              value={"sorry1"}
              label={"불필요"}
              isChecked={selectedValueInner === "sorry1"}
              selectedValue={selectedValueInner}
              onChange={handleInnerRadioChange}
            />
          </FlexibleLayout>
        </FieldSet>
        {/* 수분 */}
        <FieldSet label={"수분"} required={false}>
          <FlexibleLayout extendStyleCode={"gap-2"}>
            <Radio
              value={"want1"}
              label={"필요"}
              selectedValue={selectedValueInner}
              isChecked={selectedValueInner === "want1"}
              onChange={handleInnerRadioChange}
            />

            <div
              className={"flex gap-1 ml-2 web:flex-row mobile:flex-col pl-6"}>
              <Input
                classNames={
                  '"web:w-[136px] bg-white mobile:w-[220px] border border-2 h-[40px] rounded-[8px] p-0'
                }
                name={"specEtc"}
                value={""}
                height={"h-[40px]"}
                type={"text"}
                handleChange={() => {}}
                labelPosition={"no-label"}
                placeholder={"최대"}
              />
              <Input
                classNames={
                  "web:w-[136px] bg-white mobile:w-[220px] border border-2  h-[40px] rounded-[8px]"
                }
                name={"specEtc"}
                value={""}
                height={"h-[40px]"}
                type={"text"}
                handleChange={() => {}}
                placeholder={"최소"}
                labelPosition={"no-label"}
              />
            </div>
            <Radio
              value={"sorry1"}
              label={"불필요"}
              isChecked={selectedValueInner === "sorry1"}
              selectedValue={selectedValueInner}
              onChange={handleInnerRadioChange}
            />
          </FlexibleLayout>
        </FieldSet>

        {/* ROSH */}
        <FieldSet label={"ROSH 규제물질"} required={false}>
          <div className={"flex gap-4"}>
            <Radio
              value={"box-want"}
              label={"필요"}
              selectedValue={selectedValue}
              isChecked={selectedValueInner === "box-want"}
              onChange={handleInnerRadioChange}
            />
            <Radio
              value={"no-box"}
              label={"불필요"}
              selectedValue={selectedValue}
              isChecked={selectedValueInner === "no-box"}
              onChange={handleInnerRadioChange}
            />
          </div>
        </FieldSet>
        {/* 추가 분석요청 */}
        <FieldSet label={"추가 분석요청"} required={false}>
          <div className={"flex gap-4"}>
            <Radio
              value={"box-want"}
              label={"필요"}
              selectedValue={selectedValue}
              isChecked={selectedValueInner === "box-want"}
              onChange={handleInnerRadioChange}
            />
            <Radio
              value={"no-box"}
              label={"불필요"}
              selectedValue={selectedValue}
              isChecked={selectedValueInner === "no-box"}
              onChange={handleInnerRadioChange}
            />
          </div>
        </FieldSet>
      </div>
    </div>
  );
};

export default MaterialQualityAnalysis;
