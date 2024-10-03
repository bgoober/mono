"use client";
import Input from "~/_components/solquest/general/ui/Input";
import { Button } from "~/_components/final/ui/button";
import type { BountyFormData } from "~/lib/validation";
import type { Tracks } from "@prisma/client";
import { api } from "~/trpc/react";
import type { z } from "zod";
import type { Session } from "next-auth";

export default function CreateBounty({session}: {session:Session|null}) {
  const createBounty = api.bounty.createBounty.useMutation({})
  
  const handleCreateBounty = async (values: z.infer<typeof BountyFormData>) => {
    try{
      createBounty.mutate(values)
      console.log("Bounty created:", values)
    } catch (err){
      console.log(err)
    }
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const bountyData = {
      title: data.get("title") as string,
      description: data.get("description") as string,
      track: data.get("track") as Tracks,
      compensationAmount: parseInt(data.get("compensation") as string ?? "0"),
      pointOfContactId: session?.user.id ?? "",
      skills: [],
      tokenId: "cm1te0z5g0000cas6wjry2pks"
    }

    handleCreateBounty(bountyData)
  }

  return (
    <main className="m-auto flex w-full max-w-7xl flex-1 flex-col px-5">
      <form 
      onSubmit={handleSubmit}
      className="mx-auto bg-white my-20 w-full max-w-xl rounded-lg shadows-sm">
        <h2 className="my-2 text-center font-semibold text-primary">
          Create Bounty
        </h2>

        <Input label="Title" name="title"/>
        <Input label="Description" type="area" name="description"/>
        <Input
          label="Track"
          type="select"
          options={["FRONTEND", "BACKEND", "RUST"]}
          name="track"
        />
        <Input label="Pay" type="number" name="compensation"/>

        <div className="mx-auto my-5 w-fit">
          <Button>Create Bounty</Button>
        </div>
      </form>
    </main>
  );
}
