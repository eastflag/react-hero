import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const Heroes = (props) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    getHeroes()
  }, []);

  const getHeroes = async () => {
    let response = await axios.get('http://api.eastflag.co.kr:8000/api/user/heroes');
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
