
interface props{
    type?: "text" | "select" | "area" | "number",
    label: string,
    required?: boolean,
    options?: string[], 
    name: string,
}

export default function Input({type = "text", label, required = true, options=[], name}: props){
    return(
        <div className="m-5 flex-1">
            <label className="block text-xs text-zinc-700 font-semibold">{label} 
                {required && <span className="ml-1 text-destructive">*</span>}
            </label>

            {type != "area" && type != "select" && 
            <input 
            className="block py-1 px-3 w-full rounded-md placeholder:text-muted-foreground text-zinc-700 text-sm border-2 border-zinc-200 focus:outline-primary shadow-sm" 
            type={type} 
            id="label" 
            name={name} 
            required = {required}
            min={0}
            placeholder={`${label}...`}/>}

            {type == "area" && 
            <textarea 
            className="py-2 px-3 w-full rounded-md placeholder:text-muted-foreground text-zinc-700 text-sm border-2 border-zinc-200 focus:outline-primary shadow-sm"
            name={name}
            required = {required}
            placeholder={`${label}...`}></textarea>
            }

            {type == "select" &&
            <select
            className="py-1 px-3 w-full rounded-md placeholder:text-muted-foreground text-zinc-700 text-sm border-2 border-zinc-200 focus:outline-primary shadow-sm"
            name={name}
            title={label}
            required = {required}
            >
                {options.map(option =>
                    <option key={option} className="hover:bg-primary hover:text-white">{option}</option>
                )}
            </select>
            }
        </div>
    )
}