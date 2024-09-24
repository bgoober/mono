import { flicks } from "~/_components/degenspace/Flick/dummyData";
import { Flick } from "~/_components/degenspace/Flick/Flick";
import H1 from "~/_components/degenspace/H1";

import { MainContentHeader } from "~/_components/degenspace/MainLayout/MainContentHeader";
import { HorizontalLine } from "~/_components/degenspace/UtilComponents/Horizontalline";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col gap-[10px] backdrop-blur-sm">
      <div className="my-[10px]">
        <MainContentHeader displaytext="A social community space for degens on solana" />
        <div className="flex w-full flex-col items-start">
          <div className="w-full items-start p-[10px]">
            <H1>Trending Flicks</H1>
          </div>
          <HorizontalLine />
          <div className="flex w-full flex-col">
            {flicks.map((flick) => (
              <Flick key={flick.username} {...flick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
