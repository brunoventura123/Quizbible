import { Question } from "@/types/Question"
import { useState } from "react"

type Props = {
    question: Question
    count: number
    onAnswer: (answer: number) => void
}

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [answerCorret, setAnswerCorret] = useState(0)

    const checkQuestion = (key: number) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(key)
            setAnswerCorret(selectedAnswer === question.answer ? answerCorret + 1 : answerCorret)

            setTimeout(() => {
                onAnswer(key)
                setSelectedAnswer(null)
            }, 1500)

        }
    }

    return (
        <div>
            <div className="text-xl font-bold ">{count}. {question.question}</div>
            <div className="my-5">
                {question.options.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => checkQuestion(key)}
                        className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-200 
                        ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:bg-blue-200'}
                        ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-200 border-green-300'}
                        ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-200 border-red-300'}
                        `}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}