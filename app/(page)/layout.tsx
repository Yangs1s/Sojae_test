import React from "react";
import PageHeader from "@/app/_layout/PageHeader";
import PageFooter from "@/app/_layout/PageFooter";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={"min-h-screen"}>
      <PageHeader />
      <div className={"web:flex web:flex-col web:min-h-screen mobile:block"}>
        <section
          className={
            "w-full flex-1 flex-col m-auto bg-white web:py-0 relative web:flex items-center web:justify-center mobile:py-12 tablet:px-0 mobile:px-6"
          }>
          {children}
        </section>
        <PageFooter />
      </div>
    </main>
  );
};

export default Layout;
