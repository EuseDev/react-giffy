import React from "react"
import Gif from "../../components/Gif"
import useGlobalGifs from "../../hooks/usoGlobalGifs"


 //  const staticConfig = useContext(StaticContext)
export default function Detail({params}){
    const gifs = useGlobalGifs()

    const gif = gifs.find(singleGif =>
        singleGif.id === params.id)
   // console.log(params.id)

    return  <Gif {...gif} />
}