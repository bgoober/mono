"use client"
import { FaFilter } from "react-icons/fa6"
import { IconButton, CloseButton } from "../general/ui/Button"
import { useState } from "react"

export default function Sidebar(){
    const [viewFilter, setViewFilter] = useState<boolean>(false)
    return(
        <>
        <div className={"flex items-start tablet:hidden"}>
            <IconButton handleClick={() => setViewFilter(!viewFilter)} size={45} type={1}>
                <FaFilter />
            </IconButton>
        </div>

        <div className={`max-w-80 w-[300px] absolute top-0 ${viewFilter? "left-0": "-left-80"} tablet:relative tablet:left-0 h-full tablet:w-2/5 p-4 bg-slate-900 tablet:rounded-lg transition-all`}>
        
        <div className="block tablet:hidden">
            <CloseButton handleClick={() => {setViewFilter(false)}} />
        </div>

            <Label>Tracks</Label>
                <Option>Frontend</Option>
                <Option>Backend</Option>
                <Option>Rust</Option>

            <Label>Status</Label>
                <Option>Open</Option>
                <Option>In Progress</Option>
                <Option>Completed</Option>
        </div>
        </>
    )
}

const Label:React.FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <>
        <p className="my-2 text-secondary"><b>{children}</b></p>
        </>
    )
} 

const Option:React.FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <button type="button" className="text-slate-500 hover:text-white block m-3">
            {children}
        </button>
    )
}