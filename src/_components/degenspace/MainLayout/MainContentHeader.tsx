import React from "react";
import H1 from "../H1";
import { HorizontalLine } from "../UtilComponents/Horizontalline";

export const MainContentHeader = ({ displaytext }: { displaytext: string }) => {
  return (
    <React.Fragment>
      <div className="p-[8px] justify-center w-full flex">
        <H1>{displaytext}</H1>
      </div>
      <HorizontalLine />
    </React.Fragment>
  );
};
