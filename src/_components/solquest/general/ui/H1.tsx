export const H1:React.FC<{children:React.ReactNode, margin?: "sm"|"lg", style?:1|2}> = 
({children, margin="lg", style=1}) => {
    return(
        <h1 className={`text-center text-4xl ${style == 2 && "text-secondary"} font-bold ${margin == "lg" ? "my-10" : "my-3"}`}>
            {children}
        </h1>
    )
}