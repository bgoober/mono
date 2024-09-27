/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  CampaignFormData,
  PledgeFormData,
  ProfileFormData,
} from "~/lib/validation";
import CustomFormItem from "../CustomForm";

import { Button } from "~/_components/final/ui/button";
import { Form, FormField } from "~/_components/final/ui/form";
import { Textarea } from "~/_components/final/ui/textarea";
import { Camera, Upload } from "lucide-react";
import H1 from "~/_components/final/H1";
import H2 from "~/_components/final/H2";

const initialData = {
  amount: 0,
  message: "",
};

export default function PledgeForm() {
  const form = useForm<z.infer<typeof PledgeFormData>>({
    resolver: zodResolver(PledgeFormData),
    defaultValues: initialData,
  });

  const handleSubmit = async (values: z.infer<typeof PledgeFormData>) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Profile updated:", values);
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
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit Pledge"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
