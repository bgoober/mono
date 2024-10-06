/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { NewDAOFormData, ProfileFormData } from "~/lib/validation";
import CustomFormItem from "../CustomForm";
import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "~/_components/final/ui/button";
import { Form, FormField, FormLabel } from "~/_components/final/ui/form";
import { Textarea } from "~/_components/final/ui/textarea";
import { Camera, Upload } from "lucide-react";
import H1 from "~/_components/final/H1";
import { RadioGroup, RadioGroupItem } from "~/_components/final/ui/radio-group";
import { Label } from "~/_components/final/ui/label";
import { cn } from "~/utils";
import { Input } from "~/_components/final/ui/input";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import toast from "react-hot-toast";
import { DAOType } from "@prisma/client";
import { CreateDao } from "~/onChain/instructions/createDao";

const initialData = {
  name: "",
  description: "",
  type: DAOType.TOKEN,
  tokenPublicKey: "",
  allowSubDAO: true,
  subDAOCreationThreshold: 1,
};

export default function NewDAOForm() {
  const [isEditing, setIsEditing] = useState(true);
  const { wallet } = useWallet();
  const { connection } = useConnection();
  return <CreateDao />
  ;

  const form = useForm<z.infer<typeof NewDAOFormData>>({
    resolver: zodResolver(NewDAOFormData),
    defaultValues: initialData,
  });

  const handleSubmit = async () => {
    if (!wallet) {
      toast("Please connect a wallet");
      return;
    }
    try {
      // const values = await createFungibleDAO(
      //   wallet.adapter as unknown as NodeWallet,
      //   connection,
      // );
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // console.log("Profile updated:", values);
      setIsEditing(false);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mx-auto max-w-4xl space-y-6 rounded-lg bg-white p-6 pb-12 shadow md:p-20 md:pb-16 md:pt-6"
      >
        <H1 className="text-2xl font-bold">New DAO</H1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <CustomFormItem
                label="Name"
                field={field}
                placeholder="Enter your DAO name"
                isEditing={isEditing}
              />
            )}
            required
          />
        </div>
        {/* <FormField
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
        <div className="mt-4"></div>

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <div>
              <FormLabel className={cn("text-xs font-semibold text-zinc-700")}>
                Type
              </FormLabel>
              <RadioGroup
                defaultValue="token"
                onValueChange={field.onChange}
                value={field.value}
                className="mt-2 grid-cols-3"
              >
                {[
                  { id: "nft", title: "NFT" },
                  { id: "token", title: "Token" },
                  { id: "hybrid", title: "Hybrid" },
                ].map((type) => (
                  <div key={type.id} className="flex items-center">
                    <RadioGroupItem
                      id={type.id}
                      value={type.title}
                    ></RadioGroupItem>
                    <label
                      htmlFor={type.id}
                      className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      {type.title}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
        />

        <FormField
          control={form.control}
          name="tokenId"
          render={({ field }) => (
            <CustomFormItem
              label="Token Public Key"
              field={field}
              placeholder="Enter your token public key"
            />
          )}
          required
        />

      <FormField
        control={form.control}
        name="collectionTokenId"
        render={({ field }) => (
          <CustomFormItem
            label="Collection Token key"
            field={field}
            placeholder="Enter collection token ID (optional)"
          />
        )}
      />
          <FormField
        control={form.control}
        name="circulatingSupply"
        render={({ field }) => (
          <CustomFormItem
            label="Circulating Supply"
            field={field}
            placeholder="Enter circulating supply"
            inputProps={{ type: "number" }}
          />
        )}
      />

      <FormField
        control={form.control}
        name="proposalFeeBounty"
        render={({ field }) => (
          <CustomFormItem
            label="Proposal Bounty Fee"
            field={field}
            placeholder="Enter proposal bounty fee"
            inputProps={{ type: "number" }}
          />
        )}
      />

      <FormField
        control={form.control}
        name="proposalFeeExecutable"
        render={({ field }) => (
          <CustomFormItem
            label="Proposal Executable Fee"
            field={field}
            placeholder="Enter proposal executable fee"
            inputProps={{ type: "number" }}
          />
        )}
      />

      <FormField
        control={form.control}
        name="proposalFeeVote"
        render={({ field }) => (
          <CustomFormItem
            label="Proposal Vote Fee"
            field={field}
            placeholder="Enter proposal vote fee"
            inputProps={{ type: "number" }}
          />
        )}
      />

      <FormField
        control={form.control}
        name="proposalFeeVoteMultiple"
        render={({ field }) => (
          <CustomFormItem
            label="Proposal Vote Multiple Fee"
            field={field}
            placeholder="Enter proposal vote multiple fee"
            inputProps={{ type: "number" }}
          />
        )}
      />

      <FormField
        control={form.control}
        name="maxExpiry"
        render={({ field }) => (
          <CustomFormItem
            label="Max Expiry"
            field={field}
            placeholder="Enter max expiry"
            inputProps={{ type: "number" }}
          />
        )}
      />

      <FormField
        control={form.control}
        name="minThreshold"
        render={({ field }) => (
          <CustomFormItem
            label="Min Threshold"
            field={field}
            placeholder="Enter min threshold"
            isEditing={isEditing}
            inputProps={{ type: "number" }}
          />
        )}
      />

      <FormField
        control={form.control}
        name="minQuorum"
        render={({ field }) => (
          <CustomFormItem
            label="Min Quorum"
            field={field}
            placeholder="Enter min quorum"
            isEditing={isEditing}
            inputProps={{ type: "number" }}
          />
        )}
      />

      <FormField
        control={form.control}
        name="proposalAnalysisPeriod"
        render={({ field }) => (
          <CustomFormItem
            label="Proposal Analysis Period"
            field={field}
            placeholder="Enter proposal analysis period"
            isEditing={isEditing}
            inputProps={{ type: "number" }}
          />
        )}
      />

      <FormField
        control={form.control}
        name="nQuorumEpoch"
        render={({ field }) => (
          <CustomFormItem
            label="N Quorum Epoch"
            field={field}
            placeholder="Enter N quorum epoch"
            isEditing={isEditing}
            inputProps={{ type: "number" }}
          />
        )}
      />

      <FormField
        control={form.control}
        name="thresholdCreateProposal"
        render={({ field }) => (
          <CustomFormItem
            label="Threshold to Create Proposal"
            field={field}
            placeholder="Enter threshold to create proposal"
            isEditing={isEditing}
          />
        )}
      />

      <FormField
        control={form.control}
        name="vetoCouncil"
        render={({ field }) => (
          <CustomFormItem
            label="Veto Council"
            field={field}
            placeholder="Enter veto council public key"
            isEditing={isEditing}
          />
        )}
      />

   <FormField
        control={form.control}
        name="allowSubDAO"
        render={({ field }) => (
          <div className="flex items-center">
            <CheckboxPrimitive.Root
              className="flex items-center gap-2"
              checked={field.value}
              onCheckedChange={field.onChange}
              id="allowSubDAO"
            >
              <CheckboxPrimitive.Indicator className="CheckboxIndicator">
                <CheckIcon />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
            <Label htmlFor="allowSubDAO" className="ml-2">Allow Sub DAO</Label>
          </div>
        )}
      />

      <FormField
        control={form.control}
        name="thresholdCreateSubDao"
        render={({ field }) => (
          <CustomFormItem
            label="Threshold to Create Sub DAO"
            field={field}
            placeholder="Enter threshold to create sub DAO (optional)"
            isEditing={isEditing}
          />
        )}
      />

      <FormField
        control={form.control}
        name="createSubdaoFee"
        render={({ field }) => (
          <CustomFormItem
            label="Create Sub DAO Fee"
            field={field}
            placeholder="Enter fee to create sub DAO (optional)"
            isEditing={isEditing}
          />
        )}
      /> */}

        <div className="flex justify-end gap-4">
          <Button
            type="submit"
            className={`w-40 ${
              isEditing
                ? "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                : "bg-transparent text-zinc-800 hover:bg-zinc-100"
            }`}
            variant={isEditing ? "default" : "outline"}
            disabled={!isEditing || form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Create DAO"}
          </Button>
          <Button
            type="button"
            className={`w-40 ${
              isEditing
                ? "bg-transparent text-zinc-800 hover:bg-zinc-100"
                : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
            }`}
            variant={isEditing ? "outline" : "default"}
            disabled={form.formState.isSubmitting}
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
