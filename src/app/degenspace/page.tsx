import { flicks } from "~/_components/degenspace/Flick/dummyData";
import { Flick } from "~/_components/degenspace/Flick/Flick";

export default function Home() {
  return (
    <div className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <div className="flex w-full flex-col items-start">
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
