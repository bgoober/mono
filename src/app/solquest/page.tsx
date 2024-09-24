import Image from "next/image";
import { Button } from "~/_components/solquest/general/ui/Button";
import { H1 } from "~/_components/solquest/general/ui/H1";
import Wallet from "~/_components/solquest/general/Wallet";

export default function Home() {
  return (
    <main className="m-auto flex max-w-7xl flex-1 flex-col items-center justify-between px-5 py-24">
      <div>
        <H1>Discover, Contribute, Earn</H1>

        <div className="flex justify-center gap-5">
          <Button type={2}>Get Started</Button>
          <Wallet />
        </div>
      </div>
    </main>
  );
}
