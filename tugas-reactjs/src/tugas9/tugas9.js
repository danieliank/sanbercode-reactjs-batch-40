import React from "react";
import { useState } from "react";
import '../App.css'

const Tugas9 = () => {
    const [num, setNum] = useState(1);

    const handleNum = () => {
        setNum(num+1)
    }

    return (
        <div className="App">
            <div className="container">
                <p className="center">{num}</p>
                <button class="centerName" onClick={handleNum}>Tambah</button> 
                { num > 10 ? <p>State count sudah lebih dari 10!!</p> : <p></p>}
            </div>
        </div>
    );
}

export default Tugas9;