"use client"

import { students } from "@/data/students"
import { Studant } from "@/types/Student"
import { useState } from "react"

type Props = {
    students: Studant[]
}

export const Students = ({ students }: Props) => {
    const [studentsList, setStudentsList] = useState<Studant[]>(students)
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-hidden">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3 hidden md:table-cell">
                        Grade1
                    </th>
                    <th scope="col" className="px-6 py-3 hidden md:table-cell">
                        Grade2
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Final Grade
                    </th>
                </tr>
            </thead>
            <tbody>
                {studentsList.map((s, k) => (
                    <tr key={k} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="flex flex-col md:flex-row items-start md:items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <p className="mb-2">
                                <img src={s.avatar} alt={s.name} className="w-12 h-12 rounded-full mr-4" />
                            </p>
                            <div>
                                <p>{s.name}</p>
                                <p className="text-gray-400">{s.email}</p>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            {s.active &&
                                <td className="bg-green-500 px-2 rounded-sm text-white border border-green-500">Active</td>
                            }
                            {!s.active &&
                                <td className="bg-red-500 px-2 rounded-sm text-white ">Inactive</td>
                            }
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">{s.grade1.toFixed(1)}</td>
                        <td className="px-6 py-4 hidden md:table-cell">{s.grade2.toFixed(1)}</td>

                        <td className="px-6 py-4 font-bold">{s.active ? ((s.grade1 + s.grade2) / 2).toFixed(1) : '--'}</td>


                    </tr>
                ))}
            </tbody>
        </table>



    )
}