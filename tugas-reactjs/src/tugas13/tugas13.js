import React, { useEffect, useState } from "react"
import axios from "axios"

const Tugas13 = () => {
    const [data, setData] = useState(null)
    const [input, setInput] = useState (
        {
            name: "",
            course: "",
            score: 0
        }
    )
    
    const [fetchStatus, setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)
    
    useEffect(() => {
        let fetchData = () => {
            axios.get(`https://backendexample.sanbercloud.com/api/student-scores`).then((res) => {
                let resultData = res.data
                console.log(resultData)
                setData([...resultData])
            })
        }

        if(fetchStatus) {
            fetchData()
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

    const indexScore = (param) => {
        if (param >= 80) {
            return "A"
        } else if (param >= 70 && param < 80) {
            return "B"
        } else if (param >= 60 && param < 70) {
            return "C"
        } else if (param >= 50 && param < 60) {
            return "D"
        } else if (param < 50) {
            return "E"
        } else {
            return ""
        }
    }

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInput({...input, [name] : value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let {
            name,
            course,
            score
        } = input

        if (currentId === -1) {
            axios.post(`https://backendexample.sanbercloud.com/api/student-scores`, {name, course, score}).then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
        } else {
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score}).then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
        }

        setInput(
            {
                name: "",
                course: "",
                score: 0
            }
        )
    }

    const handleDelete = (event) => {
        let idData = event.target.value;

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`).then((res) => {
            setFetchStatus(true)
            console.log(res)
        })
    }

    const handleEdit = (event) => {
        let idData = event.target.value
        setCurrentId(idData)

        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`).then((res) => {
            console.log(res.data)
            let data = res.data
            setInput({
                name: data.name,
                course: data.course,
                score: data.score
            })
        })
    }

    return(
        <div className="overflow-x-auto relative sm:rounded-lg mt-20 ml-[10%] mr-[10%]">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-purple-500 dark:bg-purple-500 dark:text-white">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            NO
                        </th>
                        <th scope="col" className="py-3 px-6">
                            NAMA
                        </th>
                        <th scope="col" className="py-3 px-6">
                            MATA KULIAH
                        </th>
                        <th scope="col" className="py-3 px-6">
                            NILAI
                        </th>
                        <th scope="col" className="py-3 px-6">
                            INDEX NILAI
                        </th>
                        <th scope="col" className="py-3 px-6">
                            ACTION
                        </th>
                    </tr>
                </thead>
                { data !== null && data.map((res, index) => {
                    return (
                    <tbody>
                        <tr key={res.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                { index + 1 }
                            </th>
                            <td className="py-4 px-6">
                                { res.name }
                            </td>
                            <td className="py-4 px-6">
                                { res.course }
                            </td>
                            <td className="py-4 px-6">
                                { res.score }
                            </td>
                            <td className="py-4 px-6">
                                { indexScore(res.score) }
                            </td>
                            <td className="py-4 px-6">
                                <button onClick={handleEdit} value={res.id} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Edit</button> 
                                <button onClick={handleDelete} value={res.id} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    )
                }) }
                {
                    data === null && (
                        <>
                            {data === null ? "NULL" : <p>Tidak ada data</p>}
                        </>
                    )
                }
            </table>
            <form onSubmit={handleSubmit}>
                <div className="mt-10">
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name :</label>
                    <input onChange={handleInput} value={input.name} name="name" type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nama..." required/>
                </div>
                <div className="mt-10">
                    <label for="course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mata kuliah :</label>
                    <input onChange={handleInput} value={input.course} name="course" type="text" id="course" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mata kuliah..." required/>
                </div>
                <div className="mt-10">
                    <label for="score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nilai :</label>
                    <input onChange={handleInput} value={input.score} name="score" type="text" id="score" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required/>
                </div>
                <div className="mt-10 mb-20">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Tugas13;