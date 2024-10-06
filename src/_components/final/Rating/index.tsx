"use client";

import React, { useState, useMemo } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/_components/ui/dialog";
import type { Paper, Rating } from "~/lib/validation";
import { RadioGroup, RadioGroupItem } from "~/_components/ui/radio-group";
import { Button } from "~/_components/ui/button";
import { Label } from "~/_components/ui/label";
import {
  INITIALRATING,
  RATINGCATEGORIES,
  RATINGCATEGORYLABELS,
} from "~/lib/utils/constants";

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  paper: Paper;
  onSubmit: (rating: Rating) => void;
}

export default function RatingModal({
  isOpen,
  onClose,
  paper,
  onSubmit,
}: RatingModalProps) {
  const [rating, setRating] = useState<Rating>(INITIALRATING);

  const handleScoreChange = (category: keyof Rating, value: string) => {
    setRating((prevRating: Rating) => ({
      ...prevRating,
      [category]: parseInt(value, 10) * 2, // Multiply by 2 to get the 2-10 scale
    }));
  };

  const handleSubmit = () => {
    onSubmit(rating);
    onClose();
  };

  const isAllRated = useMemo(() => {
    return Object.values(rating).every((score) => score > 0);
  }, [rating]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="border-2 border-zinc-800 bg-primary sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-black">
            Rate this paper
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-zinc-200">
            Please rate the paper on the following criteria
          </DialogDescription>
        </DialogHeader>
        <div className="px-10 py-4">
          {RATINGCATEGORIES.map((category) => (
            <div key={category} className="mb-2">
              <Label className="mb-2 block text-sm font-medium text-zinc-100">
                {RATINGCATEGORYLABELS[category]}
              </Label>
              <RadioGroup
                onValueChange={(value) => handleScoreChange(category, value)}
                className="flex justify-between"
                value={(rating[category] / 2).toString()}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <div key={value} className="flex flex-col items-center">
                    <RadioGroupItem
                      value={value.toString()}
                      id={`${category}-${value}`}
                      className={`mb-1 h-4 w-4 rounded-full ${
                        rating[category] === value * 2
                          ? "border-3 border-zinc-900 bg-zinc-900"
                          : "border-2 border-violet-300/50 bg-violet-300/50"
                      }`}
                    />
                    <Label
                      htmlFor={`${category}-${value}`}
                      className="text-xs text-violet-300"
                    >
                      {value}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </div>
        <DialogFooter className="flex gap-3">
          <Button
            onClick={onClose}
            className="bg-violet-300 text-zinc-800 hover:bg-violet-400"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-zinc-800 text-white hover:bg-zinc-900"
            disabled={!isAllRated}
          >
            Submit Rating
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
