import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/_components/final/ui/dialog";
import { Button } from "~/_components/final/ui/button";
import { Textarea } from "~/_components/final/ui/textarea";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";
import { Flick } from "~/server/api/routers/flick/read";
import P from "../P";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose }) => {
  const [postContent, setPostContent] = useState("");
  const createFlick = api.flick.create.useMutation();

  const handleSubmit = async () => {
    console.log("Submitting post:", postContent);
    createFlick.mutate(
      { description: postContent },
      {
        onSuccess: () => toast("Flick Created"),
      },
    );
    setPostContent("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-primary">Create a new post</DialogTitle>
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

interface ResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  flick: Flick;
}

export const ResponseModal: React.FC<ResponseModalProps> = ({
  isOpen,
  onClose,
  flick,
}) => {
  const [postContent, setPostContent] = useState("");
  const createFlickResponse = api.flick.createResponse.useMutation();

  const handleSubmit = async () => {
    console.log("Submitting post:", postContent);
    createFlickResponse.mutate(
      { description: postContent, parentId: flick.id },
      {
        onSuccess: () => toast("Flick Created"),
      },
    );
    setPostContent("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-primary">Respond to post</DialogTitle>
        </DialogHeader>
        <P className="mt-2 text-sm text-zinc-800">{flick.description}</P>

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
