import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameSearch } from "../redux/actions";

export default function SearchBar() {

    const dispatch = useDispatch()
    const [name, setName] = useState("");


    const handleInputChange = (event) => {
        event.preventDefault();
        const valor = event.target.value;
        setName(valor)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getNameSearch(name))
        setName("");
    }

    return (
        <div className="flex justify-center mt-24">
            <div className="relative">
                <input
                    className=" w-80 md:w-96 pl-10 pr-4 py-2 rounded-l-lg border border-black"
                    type="text"
                    placeholder="Search"
                    value={name}
                    onChange={(e) => handleInputChange(e)}
                />
                <button
                    className="absolute inset-y-0 right-0 px-4 py-2 rounded-r-lg bg-blue-400 text-white"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    <SearchIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}