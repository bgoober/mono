import { FC } from "react";
import Image from "next/image";

interface props {
  children?: React.ReactNode;
  type?: 1 | 2;
  clickEvent?: () => void;
}

export function Button({ children = "Button", type = 1, clickEvent }: props) {
  return (
    <button
      onClick={clickEvent}
      className={`px-4 py-2 text-sm tablet:text-base font-semibold ${type == 1 ? "bg-zinc-800 border-transparent text-white hover:bg-zinc-700" : "text-white bg-primary hover:bg-primary/90"} rounded-md transition-all`}
    >
      {children}
    </button>
  );
}

export const CloseButton: FC<{ handleClick?: () => void }> = ({
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      title="close"
      className="wallet-adapter-modal-button-close"
    >
      <svg width="14" height="14">
        <path d="M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"></path>
      </svg>
    </button>
  );
};

//Allows one to directly specify the src for the icon or use the children prop instead
export const IconButton: FC<{
  handleClick?: () => void;
  type?: 1 | 2;
  src?: string;
  alt?: string;
  size?: "lg" | "sm";
  children: React.ReactNode;
}> = ({ handleClick, type = 1, src, alt = "icon", size = 25, children }) => {
  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center p-1 border-2 border-transparent ${type == 1 ? "bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary active:bg-secondary active:text-white" : "bg-white text-primary hover:bg-slate-600 hover:border-slate-600 hover:text-white"} aspect-square w-[45px] rounded-md transition-all`}
      title="icon"
    >
      {src && <Image src={src} alt={alt} />}
      {!src && children}
    </button>
  );
};
