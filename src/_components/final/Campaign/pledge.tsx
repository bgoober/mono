/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { NewPledgeFormData } from "~/lib/validation";
import CustomFormItem from "../CustomForm";

import { Button } from "~/_components/final/ui/button";
import { Form, FormField } from "~/_components/final/ui/form";
import { Textarea } from "~/_components/final/ui/textarea";
import H2 from "~/_components/final/H2";

import { api } from "~/trpc/react";
import { Campaign } from "~/server/api/routers/campaign/read";

// On Chain imports
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Program, AnchorProvider, web3, utils, BN, setProvider } from "@coral-xyz/anchor"
import idl from "~/onChain/idls/spark.json"
import { SparkProgram } from "~/onChain/types/sparkProgram"
import { PublicKey } from '@solana/web3.js';

const idl_string = JSON.stringify(idl)
const idl_object = JSON.parse(idl_string)
const programID = new PublicKey(idl.address)

const initialData = {
  amount: 0,
  message: "",
};

const ourWallet = useWallet();
const { connection } = useConnection()

export default function PledgeForm({ campaign }: { campaign: Campaign }) {
  const [isEditing, setIsEditing] = useState(true);

  const form = useForm<z.infer<typeof NewPledgeFormData>>({
    resolver: zodResolver(NewPledgeFormData),
    defaultValues: initialData,
  });

  // Create a mutation for backer creation (pledging)
  const createBackerMutation = api.backer.create.useMutation({});

  const handleSubmit = async (values: z.infer<typeof NewPledgeFormData>) => {
    try {
      await createBackerMutation.mutateAsync({
        amount: Number(values.amount),
        message: values.message,
        campaignId: campaign.id,
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Perform on-chain pledge
      onChainPledge(values.amount, values.message);

      console.log("Pledged successfully:", values);
      setIsEditing(false);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const getProvider = () => {
    const provider = new AnchorProvider(connection, ourWallet, AnchorProvider.defaultOptions())
    setProvider(provider)

    return provider
  }

  const onChainPledge = async (amount: number, message: string) => {
    try {
      // Get the Anchor provider and initialize the program
      const anchProvider = getProvider();
      const program = new Program<SparkProgram>(idl_object, anchProvider);

      // Call the pledge method on the Solana program
      await program.methods.pledge(
        new BN(amount), // Convert amount to Big Number for precise calculations
        message
      ).accounts({
        campaign: campaign.id, // The ID of the campaign being pledged to
        backer: anchProvider.publicKey, // The public key of the user making the pledge
      })
      .signers([anchProvider.publicKey]) // Sign the transaction with the backer's wallet
      .rpc();
  
    } catch (error) {
      console.error("An error occurred:", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mx-auto space-y-6 rounded-lg bg-zinc-100 p-4"
      >
        <H2>Pledge</H2>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <CustomFormItem
              label="Pledge Message"
              field={field}
              placeholder="Enter your pledge message"
              isEditing={true}
              InputComponent={Textarea}
            />
          )}
          required
        />

        <div className="flex items-end justify-between gap-4">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <CustomFormItem
                label="Pledge Amount"
                field={field}
                placeholder="Enter your pledge amount in SOL"
                isEditing={true}
              />
            )}
            required
          />
          <Button
            type="submit"
            className={`w-40 ${"bg-zinc-800 text-zinc-100 hover:bg-zinc-700"}`}
            variant={"default"}
            disabled={createBackerMutation.isPending || !isEditing}
          >
            {createBackerMutation.isPending ? "Submitting..." : "Pledge"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
