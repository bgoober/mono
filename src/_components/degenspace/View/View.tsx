import { LeftSideBar } from "../LeftSideBar/LeftSideBar";
import { MainLayout } from "../MainLayout/MainLayout";
import { RightSideBar } from "../RightSideBar/RightSideBar";

export const View = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row gap-[2px] h-full w-full">
      <LeftSideBar />
      <MainLayout>{children}</MainLayout>
      <RightSideBar />
    </div>
  );
};
