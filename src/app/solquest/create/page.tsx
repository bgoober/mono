"use client";
import { H1 } from "~/_components/solquest/general/ui/H1";
import Input from "~/_components/solquest/general/ui/Input";
import { Button } from "~/_components/solquest/general/ui/Button";

export default function CreateBounty() {
  return (
    <main className="m-auto flex w-full max-w-7xl flex-1 flex-col px-5">
      <form className="mx-auto my-20 w-full max-w-xl rounded-lg border-2 border-slate-600">
        <h2 className="my-2 text-center font-bold text-secondary">
          Create Bounty
        </h2>

        <Input label="Title" />
        <Input label="Details" type="area" />
        <Input
          label="Track"
          type="select"
          options={["Frontend", "Backend", "Rust"]}
        />
        <Input label="Pay" type="number" />

        <div className="mx-auto my-5 w-fit">
          <Button>Create Bounty</Button>
        </div>
      </form>
    </main>
  );
}
