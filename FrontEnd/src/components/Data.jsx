import {fetchData} from "../data/fetchData"

export default function Data({data}){    

    return(    
        <div>
            <div className="p-4 bg-gray-300">
                <ul className="grid grid-cols-9 max-[1300px]:grid-cols-8 max-[900px]:grid-cols-7 gap-2 font-bold text-center">
                    <li>IdCalzado</li>
                    <li>Talla</li>
                    <li className="max-[900px]:hidden">Color</li>
                    <li>Precio</li>
                    <li>Tipo</li>
                    <li>Nombre</li>
                    <li className="max-[1300px]:hidden">ExistenciasActuales</li>
                    <li>Editar</li>
                    <li>Eliminar</li>
                </ul>
            </div>
            {data.map((calzado) => (
                    <div key={calzado.IDCalzado} className="p-2 bg-gray-400 text-center">
                        <ul className="grid grid-cols-9 max-[1300px]:grid-cols-8 max-[900px]:grid-cols-7 gap-2">
                            <li>{calzado.IDCalzado}</li>
                            <li>{calzado.Talla}</li>
                            <li className="max-[900px]:hidden">{calzado.Color}</li>
                            <li>{calzado.Precio}</li>
                            <li>{calzado.Tipo}</li>
                            <li>{calzado.Nombre}</li>
                            <li className="max-[1300px]:hidden">{calzado.ExistenciasActuales}</li>
                            <li><button className="bg-green-800 w-full p-2 rounded-md hover:bg-green-700 cursor-pointer">Editar</button></li>
                            <li><button className="bg-red-800 w-full p-2 rounded-md hover:bg-red-700 cursor-pointer">Eliminar</button></li>
                        </ul>
                    </div>
                )
            )}
        </div>
    )
}