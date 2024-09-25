"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import React from "react";

import Image from "next/image";
import { Button } from "~/_components/ui/button";
import P from "../P";
import { minimizePubkey } from "~/lib/utils/helpers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/_components/ui/dropdown-menu";

export const Wallet = () => {
  const { setVisible } = useWalletModal();
  const handleConnect = () => {
    setVisible(true);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { connected, publicKey, disconnect, wallet } = useWallet();

  const handleDisconnect = async () => {
    try {
      await disconnect();
      console.log("disconnected");
    } catch (error) {
      console.error("Disconnect error:", error);
    }
    setAnchorEl(null);
  };

  return (
    <>
      {!connected ? (
        <Button
          onClick={handleConnect}
          className="bg-zinc-800 hover:bg-zinc-700"
        >
          Connect Wallet
        </Button>
      ) : (
        connected &&
        wallet && (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex cursor-pointer flex-row items-center gap-2 rounded-md border-2 border-primary p-[5px]">
                  <Image
                    alt={wallet.adapter.name}
                    height={24}
                    src={wallet.adapter.icon}
                    width={24}
                  />

                  <div className="text-center text-white" onClick={handleClick}>
                    {publicKey && connected && (
                      <P className="font-bold">
                        {minimizePubkey(publicKey.toBase58())}
                      </P>
                    )}
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Button onClick={handleDisconnect}>Disconnect</Button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )
      )}
    </>
  );
};
