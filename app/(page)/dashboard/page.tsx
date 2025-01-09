import React, { Suspense } from "react";
import ConsumerDashboardView from "@/app/_component/containers/dashboard/ConsumerDashboardView";
import SupplierDashBoardView from "@/app/_component/containers/dashboard/SupplierDashBoardView";
import AdminDashboard from "@/app/_component/containers/dashboard/AdminDashboard";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    type?: string;
  }>;
}) => {
  const { type } = await searchParams;
  function renderPage() {
    if (type === "admin") {
      return <AdminDashboard />;
    } else if (type === "consumer") {
      return <ConsumerDashboardView />;
    } else if (type === "supply") {
      return <SupplierDashBoardView />;
    }
  }

  // return <SupplierDashBoardView />;
  return <Suspense>{renderPage()}</Suspense>;
  // return <AdminDashboard />;
};

export default Page;
