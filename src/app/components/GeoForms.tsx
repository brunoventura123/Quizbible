import { Circle } from "./Circle"
import { Rectangle } from "./Rectangle"
import { Square } from "./Square"

type Props = {
    text: string
}

export const GeoForms = ({ text }: Props) => {
    return (
        <div className="">
            <h2 className="text-xl text-bold text-center">Formas Geométricas</h2>
            <div className=" p-3 flex flex-col justify-between text-center items-center gap-4 border-2 mt-4 md:flex-row-reverse md:gap-2">

                <Square text={text} />
                <Circle text={text} />
                <Rectangle text={text} />
            </div>
        </div>
    )
}