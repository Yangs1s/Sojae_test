"use client";

import React, { useEffect, useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateViewSize = () => {
      setIsMobile(window.innerWidth <= 768); // 모바일 기준 (768px 이하)
    };

    updateViewSize(); // 초기 로드 시 확인
    window.addEventListener("resize", updateViewSize); // 리사이즈 시 감지

    return () => {
      window.removeEventListener("resize", updateViewSize);
    };
  }, []);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Generate a reduced range of pages for mobile
  const pageNumbers = isMobile
    ? Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
        if (currentPage === 1) return i + 1; // 1, 2, 3
        if (currentPage === totalPages) return totalPages - 2 + i; // n-2, n-1, n
        return currentPage - 1 + i; // current -1, current, current +1
      })
    : Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`${currentPage === 1 ? "hidden cursor-not-allowed" : ""}`}>
        <img src={"/prevButton.svg"} alt={"prev"} />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-[32px] text-body2 font-[500] h-[32px] px-4 py-1 flex justify-center text-medium-light border-none rounded ${
            page === currentPage
              ? "bg-primary-normal text-white"
              : "bg-white border"
          }`}>
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-3 ${
          currentPage === totalPages ? "hidden cursor-not-allowed" : ""
        }`}>
        <img src={"/nextButton.svg"} alt={"next"} />
      </button>
    </div>
  );
};

export default Pagination;
