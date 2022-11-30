import React from "react";
import '../App.css';

const Tugas8 = (props) => {
    return (
      <div className="App">
        <div className="container">
          <h1>Data diri peserta kelas Reactjs</h1>
          <hr></hr>
          <ul>
            <li><strong>Nama Lengkap : </strong>{props.name}</li>
            <li><strong>Email : </strong>{props.email}</li>
            <li><strong>Batch Pelatihan : </strong>{props.batch}</li>
          </ul>
        </div>
      </div>
    );
}

export default Tugas8;