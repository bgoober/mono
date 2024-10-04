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

const initialData = {
  amount: 0,
  message: "",
};

export default function PledgeForm() {
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
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Pledged successfully:", values);
      setIsEditing(false);

    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
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
            disabled={createBackerMutation.isLoading || !isEditing}
          >
            {createBackerMutation.isLoading ? "Submitting..." : "Pledge"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
