import FilterBtn from "../FilterBtn";
import PropTypes from "prop-types";

function Gender(props) {
  let gender = ["female", "male", "unknown", "genderless"];
  let { setGender, setPageNumber } = props.gender_data;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3 ">
          {gender.map((item, index) => {
            return (
              <FilterBtn
                setPageNumber={setPageNumber}
                task={setGender}
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

Gender.propTypes = {
  gender_data: PropTypes.object,
  setGender: PropTypes.func,
  setPageNumber: PropTypes.func,
};

export default Gender;
