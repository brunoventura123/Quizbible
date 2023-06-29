type Props = {
    text: string
}

export const Circle = ({ text }: Props) => {
    return (
        <div>
            <div className="rounded-full w-44 h-44 bg-yellow-500 text-white p-3 flex justify-center items-center">
                {text}
            </div>
        </div>
    )
}