import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from "react";
import CardPokemon from './CardPokemon';

const Main = () => {

  const [input, setInput] = useState('');
  const [pokemons, setPokemons] = useState([]);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          if (input !== '') {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
            const data = await resp.data;
            // setPokemons({ data });
            setPokemons([data, ...pokemons]);
            setInput('');
          }
        } catch (error) {
          console.log(error);
          setInput(''); // No pinta nada
        }
      };
      fetchData();
    },
    [input] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.input.value.toLowerCase()); // Modificando el estado de Input
    e.target.input.value = '';
  };

  const paintCards = () => {
    return pokemons.map(pokemon => (
      <CardPokemon key={uuidv4()} data={pokemon} />
    ));
  }

  return (
    <section>
      <h1>Busca tu Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input name='input' />
        <button type="submit">Buscar</button>
      </form>
      {pokemons.length !== 0
        ? paintCards()
        : ""
      }
    </section>
  );

}

export default Main;
