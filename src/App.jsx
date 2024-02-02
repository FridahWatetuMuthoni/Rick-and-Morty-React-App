import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search/Search";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  let { info, results } = fetchedData;

  const data = {
    setPageNumber: setPageNumber,
    info: info,
    pageNumber: pageNumber,
  };

  const search_data = {
    setSearch: setSearch,
    setPageNumber: setPageNumber,
  };

  const filter_data = {
    setStatus: setStatus,
    setPageNumber: setPageNumber,
    setGender: setGender,
    setSpecies: setSpecies,
  };

  let api_url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    async function get_data() {
      try {
        let response = await axios.get(api_url);
        let results = response.data;
        setFetchedData(results);
      } catch (error) {
        console.log(error);
      }
    }

    get_data();
  }, [api_url]);

  return (
    <section>
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">WiKi</span>
      </h1>
      <section className="container">
        <Search search_data={search_data} />
      </section>
      <section className="container-md border border-warning">
        <section className="row">
          <div className="col-sm-12 col-lg-3 border border-danger mx-3">
            <Filters filter_data={filter_data} />
          </div>
          <div className="col-sm-12 col-lg-8 mx-3 border border-primary">
            <div className="row ">
              <Cards results={results} />
            </div>
          </div>
        </section>
      </section>
      <section className="container-md border border-success">
        <Pagination data={data} />
      </section>
    </section>
  );
}

export default App;
