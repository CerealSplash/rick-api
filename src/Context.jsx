import React, { createContext, useEffect, useState } from "react";

export const context = createContext();

export const Context = (props) => {
  const [numPages, setNumPages] = useState();
  const [actualPage, setActualPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  //EL segundo parametro del useEffect es a lo que están observando
  useEffect(() => {
    const req = async () => {
      const fetchin = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${actualPage}`
      );
      const js = await fetchin.json();
      setNumPages(js.info.pages);
      setCharacters(js.results);
      setLoading(false);
    };
    req();
  }, [characters]);

  return <context.Provider value={{
    numPages,
    setNumPages,
    actualPage,
    setActualPage,
    characters, 
    setCharacters,
    loading,
    setLoading
  }}>{props.children}</context.Provider>;
};
