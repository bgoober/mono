"use client";
import { Role } from "~/lib/utils/helpers";
import { useEffect, useState } from "react";
import { Dialog, DialogFooter, DialogHeader } from "../ui/dialog";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useWallet } from "@solana/wallet-adapter-react";
import P from "../P";

type PaperData = {
  userName: string;
  role: Role;
  domain: string;
  proofOfWork: string[]; // link to profiles of other research platforms
};

const profileDataKeys = ["UserName", "Role", "Domain", "ProofOfWork"];

export const UploadPaper = () => {
  const { publicKey, connected } = useWallet();
  const [profileData, setProfileData] = useState<PaperData>({
    userName: "",
    role: Role.Reader,
    domain: "",
    proofOfWork: [],
  });

  useEffect(() => {
    if (publicKey) {
      setProfileData((prev) => ({ ...prev, pubkey: publicKey.toBase58() }));
    }
  }, [publicKey]);

  const handleProfileDataChange = (key: keyof PaperData, value: string) => {
    setProfileData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Upload Paper</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Paper</DialogTitle>
          <DialogDescription>
            Create your profile to start contributing to the platform as a
            researcher or reader.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-[10px] p-[5px]">
          <P className="font-bold">Pubkey : {publicKey?.toBase58()}</P>
          {profileDataKeys.map((key) => (
            <div key={key} className="flex flex-col gap-[5px]">
              <Label htmlFor={key}>{key}</Label>
              <Input
                id={key}
                value={profileData[key.toLowerCase() as keyof PaperData]}
                onChange={(e) =>
                  handleProfileDataChange(
                    key.toLowerCase() as keyof PaperData,
                    e.target.value,
                  )
                }
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button>Upload Paper</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
