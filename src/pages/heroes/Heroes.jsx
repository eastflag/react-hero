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
    <ul className="img-box">
      {heroes.map(hero => (
        <li key={hero.id} className="row align-items-center m-0">
          <div className="col-1 py-2">
            <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/face-black-18dp.svg'}
                 alt={hero.name} style={{width: '100%'}}></img>
          </div>
          <span className="col">{hero.name}</span>
        </li>
      ))}
    </ul>
  )
}
