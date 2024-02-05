import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/category/InputGroup";

function Episode() {
  const [id, SetId] = useState(1);
  const [info, setInfo] = useState({});
  const [results, setResults] = useState([]);
  let { air_date, name } = info;
  let api_url = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    async function get_episode() {
      try {
        let response = await axios.get(api_url);
        let data = response.data;
        console.log(data);
        setInfo(data);

        let characters = await Promise.all(
          data.characters.map((url) => {
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
          Episode:
          <span className="text-primary"> {name ? name : "Unknown"}</span>
        </h2>
        <h5 className="text-center">
          Air Date: {air_date ? air_date : "Unknown"}
        </h5>
      </section>
      <section className="row">
        <section className="col col-md-3">
          <h4 className="text-center mt-2 mb-4">Pick Episodes</h4>
          <InputGroup name="Episode" SetId={SetId} total={51} />
        </section>
        <section className="col-12 col-md-8">
          <section className="row">
            <Cards page="/episodes/" results={my_results} />
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

export default Episode;
