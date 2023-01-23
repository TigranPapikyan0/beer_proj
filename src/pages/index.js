import { BeerList } from "../../components/BeerList";
import { Pagination } from "../../components/Pagination";

export async function getServerSideProps() {
  const res = await fetch(`https://api.punkapi.com/v2/beers?page=2&per_page=5`)
  const data = await res.json();
  return { props: { beerListData: data } }
}

const Home = ({ beerListData }) => {
  return (<>
    <BeerList data={beerListData} />
    <Pagination />
  </>)

}

export default Home;
