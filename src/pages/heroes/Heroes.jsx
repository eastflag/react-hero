import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import Pagination from 'rc-pagination';
import {Switch, Route} from "react-router-dom";
import {Hero} from "../hero/Hero";

export const Heroes = (props) => {
  const [heroes, setHeroes] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getHeroes()
  }, [currentPage]);

  const getHeroes = async () => {
    let response = await api.get(`/api/user/heroes?start_index=${pageSize * (currentPage - 1)}&page_size=${pageSize}`);
    console.log(response);
    setHeroes(response.data.data);
    setTotalCount(response.data.total);
  }

  const handleClick = (event, id) => {
    console.log(event, id);
    event.preventDefault();
    props.history.push(`/heroes/hero/${id}`);
  }

  return (
    <>
      <Switch>
        <Route path="/heroes/hero/:id" component={Hero}></Route>
      </Switch>

      <div className="row">
        {heroes.map(hero => (
          <div className="col-12 p-1 col-sm-4 p-sm-2 col-md-3 p-md-3" key={hero.id}>
            <div className="card" key={hero.id}
                 onClick={(e) => handleClick(e, hero.id)} style={{cursor: 'pointer'}}>
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

      <Pagination total={totalCount} current={currentPage} pageSize={pageSize}
                  onChange={(page) => setCurrentPage(page)} className="d-flex justify-content-center" />
    </>
  )
}
