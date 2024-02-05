import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/category/InputGroup";

function Location() {
  const [id, SetId] = useState(1);
  const [info, setInfo] = useState({});
  const [results, setResults] = useState([]);
  let { name, type, dimension } = info;
  let api_url = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    async function get_episode() {
      try {
        let response = await axios.get(api_url);
        let data = response.data;
        console.log(data);
        setInfo(data);

        let characters = await Promise.all(
          data.residents.map((url) => {
            let response = axios.get(url);
            return response;
          })
        );
        setResults(characters);
        console.log(characters);
      } catch (error) {
        console.log(error);
      }
    }

    get_episode();
  }, [api_url]);

  let my_results = results.map((element) => {
    return element.data;
  });
  console.log(my_results);

  return Object.keys(info).length ? (
    <div className="container">
      <section className="row">
        <h2 className="text-center my-3">
          Location:
          <span className="text-primary"> {name ? name : "Unknown"}</span>
        </h2>
        <h5 className="text-center">
          Dimension: {dimension ? dimension : "Unknown"}
        </h5>
        <h6 className="text-center">Type: {type ? type : "Unknown"}</h6>
      </section>
      <section className="row">
        <section className="col-12 col-md-3">
          <h4 className="text-center mt-2 mb-4">Pick Location</h4>
          <InputGroup name="Location" SetId={SetId} total={126} />
        </section>
        <section className="col-12 col-md-8">
          <section className="row">
            <Cards page="/location/" results={my_results} />
          </section>
        </section>
      </section>
    </div>
  ) : (
    <section className="container">
      <h1 className="text-center my-5 ">
        No data to display. Please Check your Internet Connection
      </h1>
    </section>
  );
}

export default Location;
