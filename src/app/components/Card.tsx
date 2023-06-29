import { ReactNode } from "react"

type Props = {
    children?: ReactNode
    phrase: string
    author?: string
}

export const Card = ({ children, author, phrase }: Props) => {
    return (
        <div className="pl-2">
            <div className=" bg-blue-500 fond-bold text-lg rounded-md">
                <ul className="flex flex-col w-full md:flex-row">
                    <li className="p-4 cursor-pointer hover:bg-blue-700 h-full">Home</li>
                    <li className="p-4 cursor-pointer hover:bg-blue-700 h-full">FAQ</li>
                    <li className="p-4 cursor-pointer hover:bg-blue-700 h-full">Sair</li>
                </ul>
            </div>
            <div className="border-2 border-white p-3">{children}</div>
            <div className="inline-block">
                <h3 className="text-lg md:text-2xl font-bold italic">"{phrase}"</h3>

                <p className="text-xs md:text-sm text-right ">- {author ?? "Autor desconhecido"}</p>

            </div>
            <div className="border-2 border-b-blue-500"></div>
        </div>
    )
}