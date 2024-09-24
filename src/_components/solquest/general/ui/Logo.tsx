import Image from "next/image"

interface props{
    type?: 1 | 2
}

export default function Logo({type = 1}: props){
    return(
        <div className="flex gap-3 items-center">
            {type == 1 &&<Image src={"/assets/solquest.svg"} alt="logo" height={40} width={40} />}

            <h1 className="text-3xl font-bold text-secondary">SolQuest</h1>
        </div>
    )
}