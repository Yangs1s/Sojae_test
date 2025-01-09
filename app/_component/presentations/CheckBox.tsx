import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface CheckBoxContextType {
  id: string;
  checked: boolean;
  onChange: (value?: boolean | string[]) => void;
  multiChecked: string[];
  isMulti: boolean;
  size: string;
  handleMultiChange?: (itemId: string) => void;
}
const CheckBoxContext = createContext<CheckBoxContextType>({
  id: "",
  checked: false,
  onChange: () => {},
  multiChecked: [],
  isMulti: false,
  size: "h-[16px] w-[16px]",
});

const CheckboxGroup = ({
  checked,
  id,
  onChange,
  children,
  multiChecked,
  setMultiChecked,
  size = "h-[16px] w-[16px]",
  type = "single",
}: {
  type: "single" | "multi";
  id: string;
  children: React.ReactNode;
  checked: boolean;
  onChange: (value?: boolean | string[]) => void;
  size: string;
  multiChecked: string[];
  setMultiChecked: Dispatch<SetStateAction<string[]>>;
}) => {
  // 멀티 체크박스

  const handleMultiChange = (itemId: string) => {
    if (type === "multi") {
      const newMultiChecked = multiChecked?.includes(itemId)
        ? multiChecked.filter((checkedId) => checkedId !== itemId)
        : [...multiChecked, itemId];

      setMultiChecked(newMultiChecked);
      onChange(newMultiChecked);
    }
  };
  const value = {
    id,
    checked,
    multiChecked,
    onChange: type === "single" ? onChange : () => {},
    size,
    handleMultiChange: type === "multi" ? handleMultiChange : undefined,
    isMulti: type === "multi",
  };

  return (
    <CheckBoxContext.Provider value={value}>
      <div className={"flex items-center gap-1"}>{children}</div>
    </CheckBoxContext.Provider>
  );
};

export default CheckboxGroup;

const useCheckBoxContext = () => {
  const context = useContext(CheckBoxContext);
  return context;
};

// 체크박스
CheckboxGroup.CheckBox = () => {
  const checkedStyle =
    "checked:bg-[url('/check.svg')] checked:border-0 checked:bg-primary-normal checked:bg-no-repeat checked:bg-center";
  const nonCheckStyle =
    "focus:outline-none focus:ring-1  bg-[url('/non-check.svg')] bg-no-repeat bg-center border-solid border border-medium-light rounded-md appearance-none";
  const {
    id,
    checked,
    multiChecked,
    onChange,
    handleMultiChange,
    isMulti,
    size,
  } = useCheckBoxContext();

  const isChecked = isMulti ? multiChecked?.includes(id) : checked;

  // 멀티체크박스와 단일체크박스의 onChange 처리
  const handleChange = () => {
    if (isMulti) {
      handleMultiChange?.(id);
    } else {
      onChange(!checked);
    }
  };
  return (
    <>
      <input
        id={id}
        className={`${checkedStyle} ${nonCheckStyle} ${size}`}
        checked={isChecked}
        type={"checkbox"}
        onChange={handleChange}
      />
    </>
  );
};

CheckboxGroup.Label = ({
  label,
  htmlFor,
  textSize = "text-[14px]",
}: {
  textSize?: string;
  label: string;
  htmlFor: string;
}) => {
  return (
    <label className={`${textSize} whitespace-nowrap`} htmlFor={htmlFor}>
      {label}
    </label>
  );
};
