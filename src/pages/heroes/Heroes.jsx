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
    <div className="row">
      {heroes.map(hero => (
        <div className="col-12 p-1 col-sm-4 p-sm-2 col-md-3 p-md-3" key={hero.id}>
          <div className="card">
            <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/face-black-18dp.svg'}
                 style={{width: '100%'}} alt={hero.name}></img>
            <div className="card-body">
              <h5 className="card-title">{hero.name}</h5>
              <p className="card-text">email: {hero.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
