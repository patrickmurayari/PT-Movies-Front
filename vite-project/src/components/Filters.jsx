// import { useState } from "react"
import { useDispatch } from "react-redux";
import { getMovies, getOrderMovie, getTypeMovie, getYearFilter } from "../redux/actions";
import { useState } from "react";

export default function Filters() {

    const dispatch = useDispatch()

    const [minYear, setMinYear] = useState('');
    const [maxYear, setMaxYear] = useState('');

    const [input, setInput] = useState({
        rango: [], // Inicialmente, ambos valores están vacíos
    });
    // const [input, setInput] = useState({

    // })

    let anios = []

    for (let index = 2018; index <= 2030; index++) {
        anios.push(index)
    }

    const handleOrdenar = (event) => {
        const value = event.target.value
        dispatch(getOrderMovie(value))
    }

    const handleTyoeMovie = (event) => {
        const value = event.target.value
        dispatch(getTypeMovie(value))
    }

    const handleAnios = (event) => {
        const selectedYear = event.target.value;

        // Verifica si ya se seleccionó un año mínimo
        if (minYear === '') {
            setMinYear(selectedYear);
        } else {
            setMaxYear(selectedYear);
            // Aquí ambos valores están seleccionados, llama a getYearFilter
            dispatch(getYearFilter(minYear, selectedYear));
        }
    };

    const handlereset = () => {
        dispatch(getMovies())
    }

    return (
        // if (input.rango.length === 2) {
        //     dispatch(getYearFilter(input.rango[0], input.rango[1]))
        // }

        // setInput({
        //     ...input,
        //     rango: [...input.rango, event.target.value]
        // });
        <div>

            <div className='flex justify-center'>
                <select
                    defaultValue="DEFAULT"
                    className="bg-gray-300 w-20 md:w-20 h-12 text-black rounded-xl font-bold mt-4 mr-3"
                    onChange={handleAnios}
                    name="categoria"
                >
                    <option value="DEFAULT" disabled className="text-center">
                        Año
                    </option>
                    {
                        anios && anios.map((el, i) => (
                            <option key={i} value={el}>{el}</option>
                        ))
                    }
                </select>

                <select
                    defaultValue="DEFAULT"
                    className="bg-gray-300 w-24 md:w-24 h-12 text-black rounded-xl font-bold mt-4 mr-3"
                    onChange={handleOrdenar}
                    name="categoria"
                >
                    <option value="DEFAULT" disabled className="text-center">
                        Ordenar
                    </option>
                    <option value="ASC">Ascendente</option>
                    <option value="DESC">Descendente</option>
                </select>

                <select
                    defaultValue="DEFAULT"
                    className="bg-gray-300 w-20 md:w-24 h-12 text-black rounded-xl font-bold mt-4 mr-3"
                    onChange={handleTyoeMovie}
                    name="categoria"
                >
                    <option value="DEFAULT" disabled className="text-center">
                        Pelicula
                    </option>
                    <option value="Movie">Movies</option>
                    <option value="TV Series">TV Series</option>
                    <option value="Short">Short</option>
                    <option value="TV Episode">TV Episode</option>
                </select>
                <button
                    onClick={handlereset}
                    className=" bg-blue-400  w-20 md:w-24 h-12 text-white rounded-xl font-bold mt-4"
                >
                    Limpiar
                </button>

            </div>
            <div className="flex justify-center mt-3" >
                {/* Muestra los valores seleccionados */}
                {minYear !== "" && maxYear !== "" && (
                    <p className="text-lg text-center bg-gray-200 p-2 rounded-lg mt-2">
                        Años seleccionados: {minYear} - {maxYear}
                    </p>
                )}
            </div>
        </div>
    )
}

