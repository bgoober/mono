import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/_components/final/ui/dialog";
import { Button } from "~/_components/final/ui/button";
import { Textarea } from "~/_components/final/ui/textarea";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose }) => {
  const [postContent, setPostContent] = useState("");

  const handleSubmit = () => {
    console.log("Submitting post:", postContent);
    setPostContent("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new post</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            className="text-zinc-800"
            placeholder="What's happening 🤩?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            rows={6}
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSubmit} disabled={!postContent.trim()}>
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
