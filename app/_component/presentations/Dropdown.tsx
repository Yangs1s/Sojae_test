import React, { useRef } from "react";
import useOutSideDropdown from "@/app/_hook/useOutSideDropdown";
interface Props {
  data: { label: string; value: string }[];
  handleClose: () => void;
  children: React.ReactNode;
}

const Dropdown = ({ children, data, handleClose }: Props) => {
  const dropdownRef = useOutSideDropdown(handleClose);
  return (
    <div
      ref={dropdownRef}
      className={"relative tablet:w-fit mobile:w-full pb-1"}>
      {children}
    </div>
  );
};

export default Dropdown;

Dropdown.Trigger = ({
  open,
  onClick,
  selectedItem,
  width,
}: {
  width: string;
  selectedItem: { label: string; value: string };
  open: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={
        "flex bg-white items-center gap-2 relative border-b-[1px] mb-1 border-line_normal px-3 h-[46px] border-b-solid"
      }>
      <span className={`${width}`}>
        {selectedItem?.label ? selectedItem?.label : "선택하세요"}
      </span>
      <button type={"button"} onClick={onClick} className={"w-[12px] h-[12px]"}>
        {open ? (
          <figure>
            <img src={"/up-arrow.svg"} alt={"up"} />
          </figure>
        ) : (
          <figure>
            <img src={"/down-arrow.svg"} alt={"down"} />
          </figure>
        )}
      </button>
    </div>
  );
};

Dropdown.Menu = ({
  open,
  width = "w-inherit",
  children,
}: {
  width?: string;
  open: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      {open && (
        <ul
          className={`bg-white min-w-[180px] right-0 absolute pl-4 z-10 ${width}`}>
          {children}
        </ul>
      )}
    </>
  );
};

Dropdown.Item = ({
  onClick,
  item,
  selected,
}: {
  onClick: () => void;
  selected: { label: string; value: string };
  item: { label: string; value: string };
}) => {
  const showCheck = selected?.label === item?.label;
  return (
    <li
      className={
        "px-3 h-[48px] justify-between flex items-center border-b-[1px] border-line_normal"
      }
      onClick={onClick}>
      <p>{item.label}</p>
      {showCheck && <img src={"/select-check.svg"} alt={"체크"} />}
    </li>
  );
};
