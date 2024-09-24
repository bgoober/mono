"use client";

import P from "~/_components/Deresearcher/P";
import { Button } from "~/_components/ui/button";
import MainLayout from "./main-layout";
import H1 from "~/_components/Deresearcher/H1";

export default function LandingPage() {
  return (
    <MainLayout>
      <div className="m-auto my-10 max-w-5xl space-y-10 px-3">
        <H1>deResearcher</H1>
        <P className="text-[20px]">
          deResearcher - a decentralized research platform on solana
        </P>
        <Button
          className="text-center text-white"
          onClick={() => {
            console.log("clicked");
          }}
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </MainLayout>
  );
}
