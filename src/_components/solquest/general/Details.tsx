"use client";
import { H1 } from "./ui/H1";
import { CloseButton, Button } from "./ui/Button";
import Image from "next/image";

interface props {
  title: string;
  details: string;
  pay: number;
  publisher: string;
  close: () => void;
}

export default function Details({
  title,
  details,
  pay,
  publisher,
  close,
}: props) {
  return (
    <section className="fixed left-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-lg backdrop-brightness-50">
      <div className="relative h-full w-full max-w-3xl overflow-auto bg-primary-foreground px-10 py-6">
        <CloseButton handleClick={close} />
        <H1 style={2}>{title}</H1>

        <pre className="text-wrap">{details}</pre>

        <p className="my-3 font-bold">
          Publisher: <span className="text-primary"> {publisher} </span>
        </p>
        <p className="my-3 flex items-center gap-3 font-bold">
          Pay:
          <div className="aspect-square w-7 rounded-full bg-primary">
            <Image alt="solana" src="/solana.svg" width={30} height={30} />
          </div>
          {pay} SOL
        </p>

        <div className="m-auto my-10 w-fit">
          <Button>Apply to Bounty</Button>
        </div>
      </div>
    </section>
  );
}
