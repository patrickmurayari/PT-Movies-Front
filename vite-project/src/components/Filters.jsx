export default function Filters() {
    return (
        <div className='flex justify-center'>
            <select
                defaultValue="DEFAULT"
                className="bg-gray-300 w-20 md:w-20 h-12 text-black rounded-xl font-bold mt-4 mr-3"
                // onChange={handleCategoria}
                name="categoria"
            >
                <option value="DEFAULT" disabled className="text-center">
                    Año
                </option>
                <option value="hamburguesa">Hamburguesas</option>
                <option value="burrito">Burritos</option>
                <option value="Sandwich">Sandwich</option>
                <option value="perro_caliente">Perros Calientes</option>
            </select>

            <select
                defaultValue="DEFAULT"
                className="bg-gray-300 w-24 md:w-20 h-12 text-black rounded-xl font-bold mt-4 mr-3"
                // onChange={handleCategoria}
                name="categoria"
            >
                <option value="DEFAULT" disabled className="text-center">
                    Ordenar
                </option>
                <option value="hamburguesa">Ascendente</option>
                <option value="burrito">Descendente</option>
            </select>

            <select
                defaultValue="DEFAULT"
                className="bg-gray-300 w-20 md:w-20 h-12 text-black rounded-xl font-bold mt-4 mr-3"
                // onChange={handleCategoria}
                name="categoria"
            >
                <option value="DEFAULT" disabled className="text-center">
                    Pelicula
                </option>
                <option value="hamburguesa">Hamburguesas</option>
                <option value="burrito">Burritos</option>
                <option value="Sandwich">Sandwich</option>
                <option value="perro_caliente">Perros Calientes</option>
            </select>

            <button
                //   onClick={handlereset}
                className=" bg-blue-400  w-20 md:w-24 h-12 text-white rounded-xl font-bold mt-4"
            >
                Limpiar
            </button>

        </div>
    )
}

