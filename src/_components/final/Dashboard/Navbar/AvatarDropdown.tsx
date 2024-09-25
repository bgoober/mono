"use client";

import { useState, useCallback } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/_components/final/ui/dropdown-menu";
import {
  LogOut,
  Wallet as WalletIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { minimizePubkey } from "~/lib/utils/helpers";
import { Avatar } from "~/_components/final/Avatar";

export const AvatarDropdown = () => {
  const { setVisible } = useWalletModal();
  const { connected, publicKey, disconnect, wallet } = useWallet();
  const [isOpen, setIsOpen] = useState(false);
  const { userRole, userName } = dummyUserData;

  const handleConnect = () => {
    setVisible(true);
  };

  const handleDisconnect = useCallback(async () => {
    await disconnect();
    // Force a hard refresh of the page
    window.location.href = "/";
  }, [disconnect]);

  const getDropdownLabel = () => {
    if (userRole && userName) {
      return (
        <>
          <div className="font-bold">{userName}</div>
          <div className="text-xs font-normal text-zinc-500">{userRole}</div>
        </>
      );
    } else if (userName) {
      return userName;
    } else {
      return "My Account";
    }
  };

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex max-w-xs items-center gap-3 rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          <div>
            <Avatar className="h-8 w-8 rounded-full" />
          </div>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-zinc-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-zinc-500" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 w-52">
        <DropdownMenuLabel>{getDropdownLabel()}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {!connected ? (
          <DropdownMenuItem onClick={handleConnect}>
            <WalletIcon className="mr-2 h-4 w-4" />
            <span>Connect Wallet</span>
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <WalletIcon className="mr-2 h-4 w-4" />
                <span className="truncate">{wallet?.adapter.name}</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="truncate text-xs">
                  {publicKey && minimizePubkey(publicKey.toBase58())}
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDisconnect}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Disconnect</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const dummyUserData = {
  userName: "Adela Parkson",
  userRole: "Researcher",
};
