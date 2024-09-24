
interface props{
    type?: "text" | "select" | "area" | "number",
    label: string,
    required?: boolean,
    options?: string[], 
}

export default function Input({type = "text", label, required = true, options=[]}: props){
    return(
        <div className="m-5 flex-1">
            <label className="block text-sm font-bold">{label}</label>
            {type != "area" && type != "select" && 
            <input 
            className="block py-1 px-4 w-full rounded-sm text-primary-muted" 
            type={type} 
            id="label" 
            name="label" 
            required = {required}
            min={0}
            placeholder={`${label}...`}/>}

            {type == "area" && 
            <textarea 
            className="py-2 px-4 w-full rounded-sm text-primary-muted"
            name={label}
            required = {required}
            placeholder={`${label}...`}></textarea>
            }

            {type == "select" &&
            <select
            className="py-1 px-4 w-full rounded-sm text-primary-muted"
            name={label}
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