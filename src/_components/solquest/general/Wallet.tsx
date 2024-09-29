"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { minimizePubkey } from "~/lib/utils/helpers";
import { Button, CloseButton } from "./ui/Button";
import { useState } from "react";

export default function Wallet() {
  const wallet = useWallet();
  const [manage, setManage] = useState<boolean>(false);
  const { setVisible } = useWalletModal();

  const handleConnect = () => {
    setVisible(true);
  };

  const handleDisconnect = async () => {
    if (wallet.connected) {
      await wallet.disconnect().then(() => {
        console.log("Wallet disconnected!");
      });
    }
    setManage(false);
  };

  const handleChange = async () => {
    await handleDisconnect();
    setVisible(true);
  };

  return (
    <>
      {!wallet.connected ? (
        <div>
          <Button clickEvent={handleConnect}>Connect Wallet</Button>
        </div>
      ) : (
        wallet.connected &&
        wallet.publicKey && (
          <div>
            <Button
              clickEvent={() => {
                setManage(true);
              }}
            >
              {minimizePubkey(wallet.publicKey.toBase58())}
            </Button>
          </div>
        )
      )}

      {manage && (
        <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center backdrop-blur-lg backdrop-brightness-50">
          <section className="bg-primary-foreground relative flex aspect-[1.5] w-[300px] flex-col items-center gap-5 rounded-lg p-3 py-8">
            <CloseButton
              handleClick={() => {
                setManage(false);
              }}
            />
            <p>
              <b>Manage Wallet</b>
            </p>
            <Button clickEvent={handleDisconnect}>Disconnect Wallet</Button>
            <Button clickEvent={handleChange}>Change Wallet</Button>
          </section>
        </div>
      )}
    </>
  );
}
