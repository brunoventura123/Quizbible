/*import { Circle } from "./components/Circle"
import { Square } from "./components/Square"
import { GeoForms } from "./components/GeoForms"
import { People } from "./components/People"
import { peopleList } from '../data/peopleList'
import { Card } from "./components/Card"
import { Person } from "@/types/Person"


const Page = () => {
  let listName: Person[] = []
  const selectPerson = (name: string) => {
    return listName = peopleList.filter(person => person.name === name)
  }

  return (
    <div className="container mx-auto p-8 h-auto dark:bg-gray-800 dark:text-white">
      <h1 className='text-2xl text-center mb-3'>Componente top</h1>
      <div className="flex justify-between">
        <Card
          phrase="Frase de efeito"
          author="Katheriny Ventura "
        />
        <Card
          phrase="Frase de efeito"
        />
      </div>
      <div>
        {listName.length > 0 &&
          <ul>
            {selectPerson('Sara').map((p, k) => (
              <li key={k}>{p.name}</li>
            ))}
          </ul>
        }
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {peopleList.map((p, k) => (
          <People
            key={k}
            name={p.name}
            roles={p.roles}
            avatar={p.avatar}
          />
        ))}
      </div>
      <div>

      </div>
    </div >
  )
}

export default Page
*/

/*import { bg } from "@/utils/climate"

 const Page = () => {
  const hour = Intl.DateTimeFormat('pt-BR', { timeStyle: 'short' }).format()


  return (
    <div className="h-screen">
      <div className={`flex flex-col justify-center items-center bg-gradient-to-r w-full h-full ${bg()[0]}`}>
        <div className="text-8xl text-white">{hour}</div>
        <div className="text-4xl font-bold text-white mt-4"> {bg()[1]}</div>
      </div>
    </div>
  )
}

export default Page

"use client"

import { TodoItem } from "@/types/TodoItem"
import { useState } from "react"
type Person = {
  name: string
  lastName: string
}

const Page = () => {
  const [itemInput, setItemInput] = useState('')

  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: 'Estudar programação', checked: false },
    { id: 2, label: 'Dormir mais cedo', checked: false }
  ])

  const handleAddButton = () => {
    if (itemInput != '') {
      setList([...list, { id: list.length + 1, label: itemInput, checked: false }])
      setItemInput('')
    }
  }

  const handleDeleteButton = (id: number) => {
    setList(list.filter(item => item.id !== id))
  }

  const toggleItem = (id: number) => {
    let newList = [...list]
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked
      }
    }
    setList(newList)
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl bg-gray-950">
      <h1 className="4xl mt5">Lista de tarefas</h1>
      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-950">
        <input
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          type="text"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton} className="">Adicionar</button>
      </div>
      <ul className="w-full max-w-lg list-disc pl-5 text-gray-300">
        {list.map(i => (
          <li key={i.id} style={{ textDecoration: i.checked ? 'line-through' : 'none' }}>
            <input className="mr-2 w-4 h-4" onClick={() => toggleItem(i.id)} type="checkbox" checked={i.checked} />
            {i.label} - <button onClick={() => handleDeleteButton(i.id)} className="hover:underline">Deletar</button></li>
        ))}
      </ul>
    </div>
  )
}

export default Page


"use client"

import { Photo } from "@/types/Photo"
import { Photos } from "@/utils/Photos"
import Image from "next/image"
import { useState } from "react"

const Page = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const [imageActual, setImageActual] = useState(0)

  const handleOpenModal = (id: number) => {
    setToggleModal(true)
    setImageActual(id - 1)

  }

  const handleCloseModal = () => {
    setToggleModal(!toggleModal)
  }

  return (
    <div className="bg-gray-900 text-white font-bold text-center">
      <div onClick={handleCloseModal} className=" w-screen h-auto p-3 container mx-auto">
        <h1 className="pt-3 text-lg md:text-3xl">Fotos Intergalacticas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3 gap-3 container mx-auto md:max-w-5xl">
          {Photos.map((p, key) => (
            <div onClick={() => handleOpenModal(p.id)} className="hover:opacity-80 cursor-pointer" key={key}>
              <Image src={p.img} alt="" className="w-full" />
            </div>
          ))}
        </div>
        {toggleModal &&
          <div className=" fixed flex justify-center items-center max-w-screen top-0 left-0 bottom-0 right-0 bg-black/90 ">
            <Image className="w-full" src={Photos[imageActual].img} alt="" />
            <div className="z-20 top-4 right-4 fixed text-4xl">X</div>
          </div>
        }
      </div>
    </div>
  )
}

export default Page
*/
"use client"

import { useState } from "react"
import { QuestionItem } from "./components/QuestionItem"
import { questions } from "@/data/questions"
import { Results } from "./components/Results"

export const Page = () => {
  const title = 'Quiz Bíblico'
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer])
    loadNextQuestion()
  }

  const handleStartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  return (
    <div className="px-2 py-4 bg-gradient-to-b from-blue-600 to-blue-950 flex justify-center items-center max-w-screen min-h-screen">
      <div className="bg-white rounded-md p-3 w-full max-w-xl">
        <div className="flex justify-between text-lg font-bold pb-3 border-b border-gray-300"><p>{title}</p><p>Score: {score}</p> </div>
        <h3 className="font-bold text-2xl mt-2"></h3>
        <div className="my-3">
          {!showResult &&
            <QuestionItem
              question={questions[currentQuestion]}
              onAnswer={() => handleAnswered(currentQuestion)}
              count={currentQuestion + 1}
            />
          }
          {showResult &&
            <Results questions={questions} answers={answers} />
          }
        </div>
        <div className="text-center">
          {!showResult &&
            <div className="text-xs text-center pt-3 border-t border-gray-300">{currentQuestion + 1} de {questions.length} perguntas</div>
          }
          {showResult &&
            <button onClick={handleStartQuiz} className="px-3 py-2 rounded-md text-center bg-blue-900 text-white">Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Page