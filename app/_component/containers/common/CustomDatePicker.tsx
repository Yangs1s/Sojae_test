"use client";

import React, { useState } from "react";
import Image from "next/image";

type CustomDatePickerProps = {
  value: string;
  onChange: (date: string) => void;
  placeholder?: string;
};

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
const generateCalendar = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendar: (number | null)[][] = [];
  let week: (number | null)[] = Array(firstDay).fill(null);

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    calendar.push([...week, ...Array(7 - week.length).fill(null)]);
  }
  return calendar;
};

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
  placeholder = "날짜를 선택해 주세요",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(value || "");
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const calendar = generateCalendar(currentYear, currentMonth);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    onChange(date);
    setIsOpen(false);
  };

  const handleDayClick = (day: number | null) => {
    if (day) {
      const date = new Date(currentYear, currentMonth, day);
      handleDateChange(date.toISOString().split("T")[0]);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) {
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) {
      setCurrentYear((prev) => prev + 1);
    }
  };

  return (
    <div className="relative w-full tablet:max-w-[300px] mobile:max-w-full rounded py-3 px-3 text-center cursor-pointer bg-white">
      <div className={"flex gap-2"}>
        <Image
          src="/calendarIcon.svg"
          alt={"Calendar"}
          width={20}
          height={20}
        />
        <input
          type="text"
          readOnly
          value={selectedDate}
          placeholder={placeholder}
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded border z-10 p-4">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handlePrevMonth}
              className="text-sm px-2 py-1 border rounded">
              &lt;
            </button>
            <span className="font-bold">{`${currentYear}-${String(currentMonth + 1).padStart(2, "0")}`}</span>
            <button
              onClick={handleNextMonth}
              className="text-sm px-2 py-1 border rounded">
              &gt;
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {daysOfWeek.map((day) => (
              <div key={day} className="font-bold text-gray-700">
                {day}
              </div>
            ))}
            {calendar.map((week, weekIndex) => (
              <React.Fragment key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <button
                    key={dayIndex}
                    onClick={() => handleDayClick(day)}
                    className={`p-2 rounded-full ${
                      day
                        ? "hover:bg-primary hover:text-white"
                        : "text-gray-300 cursor-default"
                    }`}
                    disabled={!day}>
                    {day || ""}
                  </button>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
