import Image from "next/image";
import P from "../P";
import React from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const IconButton = ({
  iconPath,
  meta,
  onClick,
  hoverName,
}: {
  iconPath: string;
  onClick: () => void;
  meta: number;
  hoverName: string;
}) => {
  return (
    <React.Fragment>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex hover:bg-backgroundHover p-[10px] rounded-full cursor-pointer flex-row gap-[4px] items-center">
            <Image
              src={iconPath}
              alt="img"
              height={24}
              width={24}
              onClick={onClick}
            />
            <P className="font-bold text-[14px]">{meta}</P>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" align="center">
          {hoverName}
        </TooltipContent>
      </Tooltip>
    </React.Fragment>
  );
};
