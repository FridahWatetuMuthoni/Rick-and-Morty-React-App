import FilterBtn from "../FilterBtn";
import PropTypes from "prop-types";

function Species(props) {
  let { setSpecies, setPageNumber } = props.species_data;

  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse "
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3 ">
          {species.map((item, index) => {
            return (
              <FilterBtn
                setPageNumber={setPageNumber}
                task={setSpecies}
                key={index}
                item={item}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

Species.propTypes = {
  species_data: PropTypes.object,
};

export default Species;
