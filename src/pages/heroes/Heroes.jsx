import React, {useEffect, useState} from 'react';
import api from "../../utils/api";

export const Heroes = (props) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    getHeroes()
  }, []);

  const getHeroes = async () => {
    let response = await api.get('/api/user/heroes');
    console.log(response);
    setHeroes(response.data.data);
  }

  return (
    <ul>
      {heroes.map(hero => (
        <li key={hero.id}>
          <img src={hero.photo} alt={hero.name}/>
          <span>{hero.name}</span>
        </li>
      ))}
    </ul>
  )
}
