type Props = {
    text: string
}

export const Rectangle = ({ text }: Props) => {
    return (
        <div>
            <div className=" w-64 h-40 bg-red-950 text-white p-3 flex justify-center items-center">
                {text}
            </div>
        </div>
    )
}