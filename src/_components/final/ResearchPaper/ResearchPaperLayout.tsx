import { Input } from "~/_components/final/ui/input";
import H3 from "~/_components/final/H3";
import { ChevronDown } from "lucide-react";
import PaperCard from "~/_components/final/Paper/PaperCard";
import { Paper } from "~/lib/validation";

interface ResearchLayoutProps {
  title: string;
  papers: any[];
}

export default function ResearchPaperLayout({
  title,
  papers,
}: ResearchLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <H3 className="font-bold">{title}</H3>
      </div>
      <div className="mb-8 flex flex-col items-stretch justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex flex-wrap gap-4 text-xs">
          {["Domain", "Price", "Date", "Popular"].map((filter) => (
            <div key={filter} className="relative">
              <select className="appearance-none rounded-md border bg-white px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>{filter}</option>
                {/* Add options */}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-zinc-400" />
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/3 lg:w-1/5">
          <Input
            type="text"
            placeholder="Search..."
            className="w-full text-xs"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {papers.map((paper) => (
          <PaperCard
            key={paper.id}
            title={paper.title}
            authors={paper.authors}
            /** TODO: FOR DEMO ONLY SHOW FIRST DOMAIN */
            domain={paper.domains[0] ?? ""}
            /** TODO: FOR DEMO ONLY SHOW MINTED LENGTH */
            minted={paper.minted.length * 123}
            price={paper.price ?? 0}
            status={paper.status}
            id={paper.id}
            reviewers={paper.peer_reviews.length}
          />
        ))}
      </div>
    </div>
  );
}
