import Image from "next/image";
import { Card } from "../../ui/card";
import P from "../P";
import { Button } from "../../ui/button";

export type ResearchPaper = {
  title: string;
  domain: string;
  authors: string[];
  image: string;
  description: string;
  accessFee: number;
};

export const ResearchPaperCard = (paper: ResearchPaper) => {
  const { title, domain, authors, image, description, accessFee } = paper;
  return (
    <Card className="border-[2px] border-border">
      <div className="flex h-full w-full flex-col items-center gap-[10px] p-[15px]">
        <Image src={image} alt={title} width={200} height={200} />
        <div className="flex h-full flex-col justify-between gap-[10px]">
          <div className="flex h-full flex-col justify-between gap-[10px] p-[5px]">
            <P className="text-md font-bold text-primary">{title}</P>
            <div className="flex flex-row flex-nowrap gap-[8px]">
              <P className="text-md font-bold text-primary">Domain</P>
              <P className="text-md font-bold">{domain}</P>
            </div>
            <div className="flex flex-row gap-[8px]">
              <P className="text-md font-bold text-primary">Authors</P>

              <P className="text-md font-bold">{authors.join(", ")}</P>
            </div>
            <div className="flex flex-row gap-[8px]">
              <P className="text-md font-bold text-primary">Description</P>
              <P className="text-md font-bold">{description}</P>
            </div>
            <div className="flex flex-row gap-[8px]">
              <P className="text-md font-bold text-primary">Access Fee</P>
              <P className="text-md font-bold">{accessFee} SOL</P>
            </div>
          </div>
          <Button className="w-full">Access</Button>
        </div>
      </div>
    </Card>
  );
};
