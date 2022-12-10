import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="mt-4 ml-[15%] mr-[15%] space-between flex">
            <ul>
                <li className="mr-6 text-lg font-bold inline-block"><Link to = "/">Kelas Reactjs</Link>
                </li>
                </ul>
                <ul>
                <li className="mr-6 inline-block"><Link to = "/" className="block h-full w-full">Home</Link>
                </li>
                <li className="mr-6 inline-block">
                    <Link to = "/tugas15" className="block h-full w-full">Tugas15</Link>
                </li>
                </ul>

        </nav>
    )
}

export default Navbar