import FilterBtn from "../FilterBtn";
import PropTypes from "prop-types";

function Status(props) {
  let status = ["Alive", "Dead", "Unknown"];
  let { setStatus, setPageNumber } = props.status_data;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3 ">
          {status.map((item, index) => {
            return (
              <FilterBtn
                key={index}
                item={item}
                index={index}
                setPageNumber={setPageNumber}
                task={setStatus}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

Status.propTypes = {
  status_data: PropTypes.object,
};

export default Status;
