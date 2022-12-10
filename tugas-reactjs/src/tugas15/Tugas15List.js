import React, { useEffect, useContext } from "react"
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Tugas15List = () => {
    const { state, handleFunction } = useContext(GlobalContext)
    const {
        data, setData,
        input, setInput,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
    } = state
    
    const {
        indexScore,
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit
    } = handleFunction
    
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
    }, [fetchStatus, setData, setFetchStatus])

    return(
        <>
            <button type="button" class="overflow-x-auto relative sm:rounded-lg mt-16 ml-[15%] mr-[15%] text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link to = "/create">Create data</Link></button>
            <div className="overflow-x-auto relative sm:rounded-lg ml-[15%] mr-[15%]">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-purple-700 dark:bg-purple-500 dark:text-white">
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
        </div>
        </>
    );
}

export default Tugas15List;