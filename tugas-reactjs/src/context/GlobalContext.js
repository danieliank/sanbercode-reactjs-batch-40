import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

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

    let state = {
        data, setData,
        input, setInput,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
    }

    let handleFunction = {
        indexScore,
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit
    }

    return(
        <GlobalContext.Provider value = {
            {
                state,
                handleFunction
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}