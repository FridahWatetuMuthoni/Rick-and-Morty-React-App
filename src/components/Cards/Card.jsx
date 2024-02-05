import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Card() {
  let { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  let { name, image, location, origin, gender, species, status, type } =
    fetchedData;

  let api_url = `https://rickandmortyapi.com/api/character/${id}`;

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

  console.log(fetchedData);

  let color;
  if (status === "Alive") {
    color = "success";
  } else if (status === "Dead") {
    color = "danger";
  } else {
    color = "primary";
  }
  return (
    <div className="container d-flex justify-content-center mt-1">
      <section className="d-flex flex-column gap-1 shadow-lg px-5 py-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="charater image" className="img-fluid" />
        <button className={`btn bg-${color}`}>{status}</button>
        <section className="content">
          <p className="m-0">
            <span className="fw-bold">Gender: </span>
            {gender}
          </p>
          <p className="m-0">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </p>
          <p className="m-0">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </p>
          <p className="m-0">
            <span className="fw-bold">Species: </span>
            {species}
          </p>
          <p className="m-0">
            <span className="fw-bold">Type: </span>
            {type ? type : "Unknown"}
          </p>
        </section>
      </section>
    </div>
  );
}

export default Card;
