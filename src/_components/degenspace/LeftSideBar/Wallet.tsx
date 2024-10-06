import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import React from "react";
import Image from "next/image";
import { Button } from "~/_components/ui/button";
import { minimizePubkey } from "~/lib/utils/helpers";

export const Wallet = () => {
  const { setVisible } = useWalletModal();
  const { connected, publicKey, disconnect, wallet } = useWallet();

  const handleConnect = () => setVisible(true);
  const handleDisconnect = () => {
    disconnect()
      .then(() => console.log("disconnected"))
      .catch((err) => console.error(err));
  };

  if (!connected) {
    return (
      <Button
        onClick={handleConnect}
        className="w-full text-left text-black transition-colors"
      >
        Connect Wallet
      </Button>
    );
  }

  return (
    <div className="flex items-center justify-between rounded-md bg-gray-900 p-2">
      <div className="flex items-center space-x-2">
        {wallet && (
          <Image
            alt={wallet.adapter.name}
            src={wallet.adapter.icon}
            width={24}
            height={24}
          />
        )}
        <span className="text-gray-300">
          {publicKey && minimizePubkey(publicKey.toBase58())}
        </span>
      </div>
      <Button
        onClick={handleDisconnect}
        variant="ghost"
        size="sm"
        className="text-red-500 hover:bg-transparent hover:text-red-400"
      >
        Disconnect
      </Button>
    </div>
  );
};
