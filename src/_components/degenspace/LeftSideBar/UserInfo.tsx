import { useState } from "react";
import P from "../P";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";

type UserData = {
  displayName: string;
  username: string;
};

export const UserInfo = () => {
  const { wallet, connected } = useWallet();
  const [userData, setUserData] = useState<UserData>({
    displayName: "John Doe",
    username: "johndoe",
  });

  //fetch from DB

  if (!connected) return null;

  return (
    <div className="flex flex-col gap-[5px] rounded items-start py-[10px] px-[15px] cursor-pointer hover:bg-backgroundHover">
      <div className="flex flex-row items-center gap-[10px]">
        <Image src={"/user.svg"} alt="logo" height={30} width={30} />
        <div className="flex flex-col gap-[3px]">
          <P className="text-[15px] font-bold">{userData.displayName}</P>
          <P className="text-[12px] font-bold text-primary/90">
            @{userData.username}
          </P>
        </div>
      </div>
    </div>
  );
};
