import React from 'react';
import Gif from "../Gif";

export default function ListOfGifs({gifs}) {

    return <div className='ListOfGifs'> 
      {
        gifs.map(({id, title, url})=> 
        <Gif 
          id={id} 
          key={id} //se lo colocamos para identificarlo de forma unica y prevenir problemas
          title={title} 
          url={url}       
          />   //utiliza el map para imprimir el array recorriendolo
        )
      }
      </div>   
}