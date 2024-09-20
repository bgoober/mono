import Image from "next/image";
import { Card } from "../ui/card";
import P from "../P";
import { Button } from "../ui/button";

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
      <div className="flex flex-col w-full gap-[10px] p-[15px] items-center h-full">
        <Image src={image} alt={title} width={200} height={200} />
        <div className="flex flex-col justify-between h-full gap-[10px]">
          <div className="flex flex-col gap-[10px] p-[5px] justify-between h-full">
            <P className="font-bold text-md text-primary">{title}</P>
            <div className="flex flex-row gap-[8px] flex-nowrap">
              <P className="font-bold text-md text-primary">Domain</P>
              <P className="font-bold text-md">{domain}</P>
            </div>
            <div className="flex flex-row gap-[8px]">
              <P className="font-bold text-md text-primary">Authors</P>

              <P className="font-bold text-md">{authors.join(", ")}</P>
            </div>
            <div className="flex flex-row gap-[8px]">
              <P className="font-bold text-md text-primary">Description</P>
              <P className="font-bold text-md">{description}</P>
            </div>
            <div className="flex flex-row gap-[8px]">
              <P className="font-bold text-md text-primary">Access Fee</P>
              <P className="font-bold text-md">{accessFee} SOL</P>
            </div>
          </div>
          <Button className="w-full">Access</Button>
        </div>
      </div>
    </Card>
  );
};
