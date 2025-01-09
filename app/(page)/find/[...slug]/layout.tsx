import React from "react";
import PageFooter from "@/app/_layout/PageFooter";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) => {
  const slug = await params;
  console.log(slug);
  return (
    <div className={"relative flex justify-center items-center "}>
      {children}
    </div>
  );
};

export default Layout;
