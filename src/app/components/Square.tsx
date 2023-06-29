
type Props = {
    text: string
}
export const Square = ({ text }: Props) => {
    return (
        <div className="w-44 h-44 bg-green-800 text-white p-3 flex justify-center items-center">
            {text}
        </div>
    )
}


