export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-[10px] border-r-[3px] border-border border-l-[3px] overflow-scroll overflow-x-hidden">
      <div className="flex flex-col w-full items-center">{children}</div>
    </div>
  );
};
