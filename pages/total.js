import { useEffect, useCallback } from 'react'
import Layout from "../layout/Layout"
import useQuiosco from '../hooks/useQuiosco'
import { formatearDinero } from '../helpers'



export default function Total(){

    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

    const comprobarPedido = useCallback( () => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    }, [pedido, nombre]); /* Para que la funcion se ejecute unicamente cuando pedido cambie */

    useEffect(() => {
        comprobarPedido()
    }, [pedido, comprobarPedido])


    return (

        <Layout pagina='Total'>
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a Continuacion</p>

            <form onSubmit={colocarOrden}>

                <div>
                    <label className="block uppercase text-slate-800 font-bold text-xl" htmlFor="nombre">Nombre</label>
                    <input 
                        type="text"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                        id='nombre'
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                    />
                </div>
                <div className="mt-10">
                    <p className="text-2xl">Total a pagar {''} <span className="font-bold">{formatearDinero(total)}</span> </p>

                </div>
                <div className="mt-5">
                    <input 
                      type = "submit"
                      value="Confirmar Pedido"
                      className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800 '} bg-indigo-600 w-full lg:w-auto px-5 py-2 text-white rounded uppercase font-bold text-center`}  
                      disabled={comprobarPedido()}
                    />
                </div>

                    
            </form>

        </Layout>
        
    )
    
}