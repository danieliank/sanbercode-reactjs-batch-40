import React, { useEffect, useContext } from "react"
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const Tugas13 = () => {
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

    let { IdData } = useParams()

    useEffect(() => {
        if (IdData !== undefined) {
            let fetchData = () => {
                axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${IdData}`).then((res) => {
                    let resultData = res.data
                    console.log(resultData)
                    setData([...resultData])
                })
            }
    
            if(fetchStatus) {
                fetchData()
                setFetchStatus(false)
            }
        }
    }, [fetchStatus, setData, setFetchStatus])


    return(
        <div className="overflow-x-auto relative sm:rounded-lg mt-26 ml-[10%] mr-[10%]">
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