import React from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({params}){
  
    const { keyword } = params
    const { loading, gifs} = useGifs({keyword})
   
    return <>
    {loading ? <i>CARGANDO</i>
        : <ListOfGifs gifs={gifs} />
}
    </>
}