import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api_url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

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
        <section className="row">
          <div className="col-3 border border-danger">
            <Filters />
          </div>
          <div className="col-8 border border-primary">
            <div className="row">
              <Cards />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default App;
