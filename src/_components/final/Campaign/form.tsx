/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { NewCampaignFormData } from "~/lib/validation";
import CustomFormItem from "../CustomForm";

import { Button } from "~/_components/final/ui/button";
import { Form, FormField } from "~/_components/final/ui/form";
import { Textarea } from "~/_components/final/ui/textarea";
import H1 from "~/_components/final/H1";

import { api } from "~/trpc/react";

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
  title: "",
  description: "",
  goal: 0,
  end: new Date(),
};

const ourWallet = useWallet();
const { connection } = useConnection()

export default function CampaignForm() {
  const [isEditing, setIsEditing] = useState(true);

  const form = useForm<z.infer<typeof NewCampaignFormData>>({
    resolver: zodResolver(NewCampaignFormData),
    defaultValues: initialData,
  });

  // Create a mutation for the campaign creation
  const createCampaignMutation = api.campaign.create.useMutation({});

  const handleSubmit = async (values: z.infer<typeof NewCampaignFormData>) => {
    try {
      await createCampaignMutation.mutateAsync({
        title: values.title,
        description: values.description,
        goal: Number(values.goal),
        ends: new Date(values.end),
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Perform on chain campaign creation
      onChainCreateCampaign(values.end, values.goal);

      // Update the UI to reflect that the campaign has been created
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

  const onChainCreateCampaign = async (ending_at: number, funding_goal: number) => {
    try {
      // Generate a random seed for the campaign
      const campaignSeed = new BN(Math.floor(Math.random() * 9000) + 1000);

      // Get the Anchor provider and initialize the program
      const anchProvider = getProvider();
      const program = new Program<SparkProgram>(idl_object, anchProvider);

      // Derive the campaign public key using program derived addresses (PDA)
      const [campaign, _] = PublicKey.findProgramAddressSync(
        [
          Buffer.from("campaign"),
          campaignSeed.toArrayLike(Buffer, "le", 8), 
          anchProvider.publicKey.toBuffer()
        ],
        programID
      );

      // Call the createCampaign method on the Sparks program
      await program.methods.createCampaign(
        campaignSeed,
        ending_at,
        funding_goal
      ).accounts({
        campaign: campaign,
        creator: anchProvider.publicKey,
      })
      .signers([anchProvider.publicKey])
      .rpc();

      console.log("Campaign created!");
    } catch (error) {
      console.log("Error creating campaign:", error);
      throw error; // Re-throw the error for handleSubmit to catch
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mx-auto max-w-4xl space-y-6 rounded-lg bg-white p-6 pb-12 shadow md:p-20 md:pb-16 md:pt-6"
      >
        <H1 className="text-2xl font-bold">New Campaign</H1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <CustomFormItem
                label="Title"
                field={field}
                placeholder="Enter your title"
                isEditing={isEditing}
              />
            )}
            required
          />

          <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
              <CustomFormItem
                label="Goal"
                field={field}
                placeholder="Enter your goal in SOL"
                isEditing={isEditing}
              />
            )}
            required
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <CustomFormItem
              label="Description"
              field={field}
              placeholder="Enter your description"
              isEditing={isEditing}
              InputComponent={Textarea}
            />
          )}
          required
        />

        <FormField
          control={form.control}
          name="end"
          render={({ field }) => (
            <CustomFormItem
              label="End Date"
              field={field}
              placeholder="Enter your end date"
              isEditing={isEditing}
            />
          )}
        />

        <div className="flex justify-end gap-4">
          <Button
            type="submit"
            className={`w-40 ${
              isEditing
                ? "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                : "bg-transparent text-zinc-800 hover:bg-zinc-100"
            }`}
            variant={isEditing ? "default" : "outline"}
            disabled={!isEditing || createCampaignMutation.isPending}
          >
            {createCampaignMutation.isPending
              ? "Creating..."
              : "Create Campaign"}
          </Button>
          <Button
            type="button"
            className={`w-40 ${
              isEditing
                ? "bg-transparent text-zinc-800 hover:bg-zinc-100"
                : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
            }`}
            variant={isEditing ? "outline" : "default"}
            disabled={createCampaignMutation.isPending}
            onClick={() => {
              if (isEditing) {
                form.reset(initialData);
              }
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
