import React, {useEffect, useState} from "react";
import { Link , useLocation} from "wouter";
import getGifs from "../../services/getGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
//usoLocation es un hook que nos devuelve un array de 2 posiciones
// en la primera es el path y en la segunda una funcion para navegar
const POPULAR_GIFS = ["Genshin", "V rising", "No mans sky", "Gatos"]

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs({})

    const handleSubmit = evt => {
        evt.preventDefault() //para evitar que el submit del formulario envie un POST a la pagina que seria su comportamiento por defecto
        //navega a otra ruta
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value) 
        //actualizamos el estado cada vez que cambie el input
        
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input placeholder="busca un gif..."  
        onChange={handleChange} type="text" value={keyword}  />
        <button>Buscar</button>
        </form>
        <h3 className="App-title">Ultima Busqueda</h3>
        <ListOfGifs gifs={gifs} />
        <h3 className="App-title">Los gifs mas populares</h3>
        <ul>
            {POPULAR_GIFS.map((popularGif)=>(
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>
                        Gifs de {popularGif}
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
}