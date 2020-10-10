import React, {useEffect} from 'react';
import axios from 'axios';

export const Heroes = (props) => {
  useEffect(() => {
    getHeroes()
  }, []);

  const getHeroes = async () => {
    let response = await axios.get('http://api.eastflag.co.kr:8000/api/user/heroes');
    console.log(response);
  }

  return (
    <div>
      Heroes works!!
    </div>
  )
}
