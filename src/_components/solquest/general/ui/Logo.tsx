import Image from "next/image";

interface props {
  type?: 1 | 2;
}

export default function SolquestLogo({ type = 1 }: props) {
  return (
    <div className="flex items-center gap-3">
      {type == 1 && (
        <Image src={"/assets/solquest.svg"} alt="logo" height={40} width={40} />
      )}

      <h1 className="text-3xl font-bold text-secondary">SolQuest</h1>
    </div>
  );
}
