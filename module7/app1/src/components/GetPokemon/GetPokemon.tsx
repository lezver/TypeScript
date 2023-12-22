import { useEffect, useState } from 'react';

type ExampleObj = {
  name: string;
  id: number;
  sprites?: {
    front_default: string;
  };
};

export const GetPokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<ExampleObj>();

  const fetchPokemon = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');

    return setPokemon(await data.json());
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const changeHangler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(target.value);
  };

  return (
    <section>
      <article>
        <h1>Name: {pokemon?.name}</h1>
        <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
      </article>

      <input type="text" onChange={changeHangler} />
    </section>
  );
};
