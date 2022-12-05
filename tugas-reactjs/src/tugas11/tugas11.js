import React from "react";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";

const Tugas11 = () => {
    const [data, setData] = useState(null)

    useEffect( () => {
        axios.get('https://backendexample.sanbercloud.com/api/student-scores').then((res) => {
            let data = res.data
            console.log(data)

            let resultData = data.map((e) => {

                let {
                    name,
                    course,
                    score,
                } = e

                return {
                    name,
                    course,
                    score,
                } = e
            })

            setData([...resultData])
        })
        .catch((err) => {
  
        }) 
    }, [] )
    console.log(data)

    const indexScore = (param) => {
        if (param >= 80) {
            return "A"
        } else if (param >= 70 && param < 80) {
            return "B"
        } else if (param >= 60 && param < 70) {
            return "C"
        } else if (param >= 50 && param < 60) {
            return "D"
        } else {
            return "E"
        }
    }

    return(
        <div class="overflow-x-auto relative sm:rounded-lg mt-20 ml-[10%] mr-[10%]">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-white uppercase bg-purple-500 dark:bg-purple-500 dark:text-white">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            NO
                        </th>
                        <th scope="col" class="py-3 px-6">
                            NAMA
                        </th>
                        <th scope="col" class="py-3 px-6">
                            MATA KULIAH
                        </th>
                        <th scope="col" class="py-3 px-6">
                            NILAI
                        </th>
                        <th scope="col" class="py-3 px-6">
                            INDEX NILAI
                        </th>
                    </tr>
                </thead>
                { data !== null && data.map((res, index) => {
                    return (
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                { index + 1 }
                            </th>
                            <td class="py-4 px-6">
                                { res.name }
                            </td>
                            <td class="py-4 px-6">
                                { res.course }
                            </td>
                            <td class="py-4 px-6">
                                { res.score }
                            </td>
                            <td class="py-4 px-6">
                                { indexScore(res.score) }
                            </td>
                        </tr>
                    </tbody>
                    )
                }) }
            </table>
        </div>
    );
}

export default Tugas11;