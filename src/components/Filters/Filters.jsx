import styles from "./Filters.module.scss";
import Species from "./category/Species";
import Status from "./category/Status";
import Gender from "./category/Gender";
import PropTypes from "prop-types";

function Filters(props) {
  const { setStatus, setGender, setSpecies, setPageNumber } = props.filter_data;

  const status_data = {
    setStatus: setStatus,
    setPageNumber: setPageNumber,
  };
  const gender_data = {
    setGender: setGender,
    setPageNumber: setPageNumber,
  };
  const species_data = {
    setSpecies: setSpecies,
    setPageNumber: setPageNumber,
  };

  const clear_filters = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);

    //refreshing the window
    window.location.reload(false);
  };

  return (
    <>
      <section>
        <p className="text-center fw-bold fs-4 mb-2">Filters</p>
        <p
          onClick={clear_filters}
          className={`text-center text-primary text-decoration-underline mb-4 ${styles.clear_filter}`}
        >
          Clear Filter
        </p>
      </section>
      <div className="accordion" id="accordionExample">
        <Status status_data={status_data} />
        <Species species_data={species_data} />
        <Gender gender_data={gender_data} />
      </div>
    </>
  );
}

Filters.propTypes = {
  setPageNumber: PropTypes.func,
  filter_data: PropTypes.object,
  setStatus: PropTypes.func,
};

export default Filters;
