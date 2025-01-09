"use client";
import React from "react";
import Dropdown from "@/app/_component/presentations/Dropdown";
import { DROPDOWN_TEST_BOX } from "@/app/_constant";
import Button from "@/app/_component/presentations/Button";
import Dialog from "@/app/_component/presentations/Dialog";

const Withdraw = () => {
  const [open, setOpen] = React.useState(false);
  const [popUp, setPopUp] = React.useState(false);
  const [popUp2, setPopUp2] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<{
    label: string;
    value: string;
  }>({ label: "", value: "" });
  const handleOpenDropdown = () => {
    setOpen((p) => !p);
  };
  return (
    <div className={"w-full h-[50vh]"}>
      <div className={"tablet:w-[412px]  tablet:m-auto flex flex-col gap-12"}>
        <Dropdown
          data={DROPDOWN_TEST_BOX}
          handleClose={() => {
            setOpen(false);
          }}>
          <Dropdown.Trigger
            open={open}
            selectedItem={selectedItem}
            onClick={handleOpenDropdown}
            width={"w-[362px]"}
          />
          <Dropdown.Menu open={open}>
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
        <div className={"flex gap-2 tablet:flex-row mobile:flex-col"}>
          <Button
            buttonSize={"md"}
            onClick={() => {}}
            title={"취소"}
            variant={"bg-normal"}
            className={"tablet:w-full mobile:w-full"}
          />
          <Button
            buttonSize={"md"}
            onClick={() => {
              setPopUp(true);
            }}
            title={"회원 탈퇴"}
            variant={"bg-primary"}
            className={"tablet:w-full mobile:w-full"}
          />
        </div>
      </div>
      <Dialog
        title={"회원탈퇴"}
        content={
          <p className={"text-center text-[14px] leading-5"}>
            회원탈퇴을 진행하시겠습니까?
          </p>
        }
        isOpen={popUp}
        onClose={() => {}}
        isAlert={false}
        size={"lg"}
        hasBtn
        align={"center"}
        btn2Title={"닫기"}
        btn1Title={"확인"}
        onButton1Click={() => {
          // setPopUp(false);
          setPopUp2(true);
        }}
        onButton2Click={() => {
          setPopUp2(true);
        }}
      />

      <Dialog
        title={"회원탈퇴 완료"}
        content={
          <p className={"text-center text-[14px] leading-5"}>
            회원탈퇴가 완료되었습니다. <br /> 그동안 소재모아를 이용해 주셔서
            감사합니다.
          </p>
        }
        align={"center"}
        isOpen={popUp2}
        onClose={() => {}}
        isAlert={true}
        size={"lg"}
        hasBtn
        btn2Title={"확인"}
        btn1Title={"확인"}
        onButton1Click={() => {}}
        onButton2Click={() => {}}
      />
    </div>
  );
};

export default Withdraw;
