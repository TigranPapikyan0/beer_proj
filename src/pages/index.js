import { useState, useEffect } from 'react';
import { BeerList } from "../../components/BeerList";
import { Pagination } from "../../components/Pagination";
import { FilterData } from "../../components/Filter";

const Home = () => {
  const [pageCount, setpageCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [beerListPart, setBeerListPart] = useState([]);
  const [partData, setPartData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    setPage(1);
    setpageCount(Math.ceil(partData.length / 10));
  }, [partData]);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers` + (name ? `?beer_name=${name}` : '')).then((res) => {
      res.json().then(newData => {
        setPartData(newData);

      }).catch((e) => console.error(e));
    })
      .catch((err) => console.error(err));
  }, [name]);

  const getPage = (page, arr) => {
    const start = page === 1 ? 0 : Number(page - 1 + "0");
    const end = Number(page + "0");
    setBeerListPart(arr.slice(start, end));
  };

  const setPage = (page) => {
    setCurrentPage(page);
    getPage(page, partData);
  };

  const searchByName = name => {
    setName(name);
  }

  return (
    <>
      <FilterData searchByName={searchByName} />
      <BeerList data={beerListPart} />
      <Pagination pageCount={pageCount} currentPage={currentPage} setPage={setPage} />
    </>)

}

export default Home;