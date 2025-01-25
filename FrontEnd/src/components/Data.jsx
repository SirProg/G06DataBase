import {fetchData} from "../data/fetchData"

export default function Data(){    
    const {d: data, loading, error} = fetchData();

    console.log(data);

    return(    
        <div>
            <div>
                <ul className="flex flex-row gap-2 justify-between aling-center">
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
            {loading ? <p>Cargando... </p> : data.map((calzado) => (
                    <div key={calzado.IDCalzado}>
                        <ul className="grid grid-cols-9">
                            <li>{calzado.IDCalzado}</li>
                            <li>{calzado.Talla}</li>
                            <li>{calzado.Color}</li>
                            <li>{calzado.Precio}</li>
                            <li>{calzado.Tipo}</li>
                            <li>{calzado.Nombre}</li>
                            <li>{calzado.ExistenciasActuales}</li>
                            <li><button>Editar</button></li>
                            <li><button>Eliminar</button></li>
                        </ul>
                    </div>
                )
            )}
        </div>
    )
}