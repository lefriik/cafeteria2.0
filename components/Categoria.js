import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'

const Categoria = ({categoria}) => {

  const { categoriaActual, handleClickCategoria } = useQuiosco()  

    const { nombre, icono, id } = categoria

  return (
    <div className={`${categoriaActual?.id === id ? "bg-amber-400" : ""} flex item-center gap-4 border w-full p-5 hover:bg-amber-400`}>
        <Image 
            width={100}
            height={100}
            src={`/assets/img/icono_${icono}.svg`}
            alt='Icono imagen'
            
        />

        <button
          type='button'
          className='text-2xl font-bold hover:cursor-pointer'
          onClick = {() => handleClickCategoria(id)}
        >
          {categoria.nombre}
        </button>
    </div>
  )
}

export default Categoria