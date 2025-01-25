import {fetchData} from "../data/fetchData"

export default function Data({data}){    

    return(    
        <div>
            <div className="p-4 bg-gray-300">
                <ul className="grid grid-cols-9 gap-2 font-bold text-center">
                    <li>IdCalzado</li>
                    <li>Talla</li>
                    <li>Color</li>
                    <li>Precio</li>
                    <li>Tipo</li>
                    <li>Nombre</li>
                    <li>ExistenciasActuales</li>
                    <li>Editar</li>
                    <li>Eliminar</li>
                </ul>
            </div>
            {data.map((calzado) => (
                    <div key={calzado.IDCalzado} className="p-4 bg-gray-400 text-center">
                        <ul className="grid grid-cols-9 gap-2">
                            <li>{calzado.IDCalzado}</li>
                            <li>{calzado.Talla}</li>
                            <li>{calzado.Color}</li>
                            <li>{calzado.Precio}</li>
                            <li>{calzado.Tipo}</li>
                            <li>{calzado.Nombre}</li>
                            <li>{calzado.ExistenciasActuales}</li>
                            <li><button className="bg-">Editar</button></li>
                            <li><button>Eliminar</button></li>
                        </ul>
                    </div>
                )
            )}
        </div>
    )
}