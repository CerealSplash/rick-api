import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { FetchingComponent } from './FetchingComponent'
import { useContext } from "react";
import { context } from "./Context";
import { Charachter } from './Charachter';

export const Router = () => {

  const { characters } = useContext(context)


  return (
    <>
        <Routes>
            <Route path="/" element={<FetchingComponent />} />
            {characters.map((data)=>{
               return <Route key={data.id} path={`/${data.id}`} element={<Charachter data={data} />} />
            })}
        </Routes>
    </>
  )
}
