import { Button } from "~/_components/ui/button";
import { Avatar } from "../Avatar";
import { SolanaLogo } from "../SolanaLogo";
import H3 from "../H3";
import H4 from "../H4";
import P from "../P";

interface PaperCardProps {
  title: string;
  authors: string[];
  domain: string;
  reads: number;
  price: number;
}

const topColors = [
  "#4318FF",
  "#FFAD08",
  "#00B69B",
  "#DC6262",
  "#919393",
  "#FF1875",
  "#51A637",
  "#A984FF",
];

const generateRandomGradient = () => {
  const getRandomTopColor = () =>
    topColors[Math.floor(Math.random() * topColors.length)];
  const topColor = getRandomTopColor();
  return `linear-gradient(to bottom, ${topColor}, #9574E2)`;
};

export default function PaperCard({
  title,
  authors,
  domain,
  reads,
  price,
}: PaperCardProps) {
  const gradientStyle = {
    background: generateRandomGradient(),
  };

  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <div className="group relative h-48 p-6 md:h-56" style={gradientStyle}>
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
        <span className="mb-2 inline-block rounded-full bg-zinc-800 bg-opacity-50 px-3 py-1 text-xs font-semibold text-white">
          {domain}
        </span>
        <H4 className="mb-2 text-balance font-semibold text-white">{title}</H4>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            variant="secondary"
            className="bg-white text-zinc-800 hover:bg-zinc-100"
          >
            Read More
          </Button>
        </div>
      </div>
      <div className="bg-white px-6 py-4">
        <P className="mb-2 text-sm font-normal text-zinc-900">
          {authors.length === 1 ? authors[0] : authors.join(", ")}
        </P>
        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex items-center">
            <div className="mr-2 flex -space-x-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <Avatar
                  key={index}
                  className="h-6 w-6 rounded-full border-2 border-white shadow-md"
                />
              ))}
            </div>
            <span className="text-xs text-zinc-600">{reads} Reads</span>
          </div>
          <Button className="flex w-full items-center justify-center bg-zinc-800 text-xs hover:bg-zinc-700 sm:w-auto">
            <SolanaLogo className="mr-2 h-3 w-3" />
            {price} SOL
          </Button>
        </div>
      </div>
    </div>
  );
}
