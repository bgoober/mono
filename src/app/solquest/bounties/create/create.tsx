"use client";
import Input from "~/_components/solquest/general/ui/Input";
import { Button } from "~/_components/final/ui/button";
import type { BountyFormData, TokenFormData } from "~/lib/validation";
import type { Tracks } from "@prisma/client";
import { api } from "~/trpc/react";
import type { z } from "zod";
import type { Session } from "next-auth";

// const initialTokenData = {
//   name: "First Token",
//   ticker: "USDC",
//   address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
//   image: "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
//   decimals: 6
// }

export default function CreateBounty({session}: {session:Session|null}) {
  const createBounty = api.bounty.createBounty.useMutation({})
  const createToken = api.bounty.createToken.useMutation({})
  
  const handleCreateBounty = async (values: z.infer<typeof BountyFormData>, form:HTMLFormElement) => {
    try{
      createBounty.mutate(values, {
        onSuccess: () => {
          alert("Bounty created successfully!")
          form.reset()
        },
        onError: () => {
          alert("There was an error creating the Bounty! Check the console for more info!")
        }
      })
      console.log("Bounty created:", values)
    } catch (err){
      console.log(err)
      alert("Failed to create Bounty. View console for more details")
    }
  }

  // const handleCreateToken = async (values: z.infer<typeof TokenFormData>) => {
  //   try{
  //     createToken.mutate(values)
  //     console.log("Token created:", values)
  //   } catch (err){
  //     console.log(err)
  //     alert("Failed to create Token. View console for more details")
  //   }
  // }

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
      tokenId: "cm1ud7349000oqwyxh3ifq8u3"
    }

    handleCreateBounty(bountyData, e.currentTarget)
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
          {/* <Button type="button" onClick={() => {handleCreateToken(initialTokenData)}}>Create Token</Button> */}
        </div>
      </form>
    </main>
  );
}
