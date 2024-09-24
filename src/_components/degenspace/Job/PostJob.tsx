import React from "react";
import P from "../P";
import { HorizontalLine } from "../UtilComponents/Horizontalline";
import { Button } from "../ui/button";
import H1 from "../H1";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const PostJobInputs = [
  {
    label: "Job Title",
    id: "jobTitle",
    placeholder: "Job Title",
  },
  {
    label: "Location",
    id: "location",
    placeholder: "Location",
  },
  {
    label: "Job Description",
    id: "jobDescription",
    placeholder: "Job Description",
  },
  {
    label: "Skills",
    id: "skills",
    placeholder: "Skills",
  },
  {
    label: "Compensation & Benefits",
    id: "compensation",
    placeholder: "Compensation & Benefits",
  },
  {
    label: "Application Deadline",
    id: "applicationDeadline",
    placeholder: "Application Deadline",
  },
];

export const PostJob = () => {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center p-[10px] gap-[10px]">
        <P className="font-bold">Looking to Hire CHADS on solana...?</P>
        <PostJobModal />
      </div>
      <HorizontalLine />
      <div className="flex flex-col gap-[10px] w-full items-start p-[10px]">
        <H1 className="font-bold">Trending Jobs</H1>
      </div>
    </React.Fragment>
  );
};

const PostJobModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Post a Job</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-[10px] w-full items-start">
          <P className="font-bold text-[20px]">Post a Job</P>
          <div className="flex flex-col w-3/4 p-4 gap-[15px]">
            {PostJobInputs.map((input) =>
              input.id === "jobDescription" ? (
                <div key={input.id} className="flex flex-col gap-[5px]">
                  <Label htmlFor={input.id}>{input.label}</Label>
                  <Textarea id={input.id} placeholder={input.placeholder} />
                </div>
              ) : (
                <div key={input.id} className="flex flex-col gap-[5px]">
                  <Label htmlFor={input.id}>{input.label}</Label>
                  <Input id={input.id} placeholder={input.placeholder} />
                </div>
              )
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
