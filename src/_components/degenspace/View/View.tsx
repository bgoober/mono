import { LeftSideBar } from "../LeftSideBar/LeftSideBar";
import { MainLayout } from "../MainLayout/MainLayout";
import { RightSideBar } from "../RightSideBar/RightSideBar";

export const View = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-zinc-100">
      <div className="flex">
        {/* LeftSideBar - hidden on mobile, visible from md breakpoint */}
        <div className="fixed hidden h-screen w-1/4 overflow-y-auto md:block">
          <LeftSideBar />
        </div>

        {/* Spacer for LeftSideBar - hidden on mobile, visible from md breakpoint */}
        <div className="hidden w-1/4 md:block" />

        {/* MainLayout - full width on mobile, adjusted width on larger screens */}
        <div className="w-full md:w-3/4 lg:w-1/2">
          <MainLayout>{children}</MainLayout>
        </div>

        {/* Spacer for RightSideBar - hidden on mobile and tablet, visible from lg breakpoint */}
        <div className="hidden w-1/4 lg:block" />

        {/* RightSideBar - hidden on mobile and tablet, visible from lg breakpoint */}
        <div className="fixed right-0 hidden h-screen w-1/4 overflow-y-auto lg:block">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};
