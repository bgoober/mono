"use client";
import { H1 } from "~/_components/solquest/general/ui/H1";
import Input from "~/_components/solquest/general/ui/Input";
import { Button } from "~/_components/solquest/general/ui/Button";

export default function CreateBounty() {
  return (
    <main className="m-auto flex w-full max-w-7xl flex-1 flex-col px-5">
      <form className="mx-auto bg-white my-20 w-full max-w-xl rounded-lg shadows-sm">
        <h2 className="my-2 text-center font-semibold text-primary">
          Create Bounty
        </h2>

        <Input label="Title" name="title"/>
        <Input label="Description" type="area" name="description"/>
        <Input
          label="Track"
          type="select"
          options={["Frontend", "Backend", "Rust"]}
          name="track"
        />
        <Input label="Pay" type="number" name="compensation"/>

        <div className="mx-auto my-5 w-fit">
          <Button>Pay and Create Bounty</Button>
        </div>
      </form>
    </main>
  );
}
