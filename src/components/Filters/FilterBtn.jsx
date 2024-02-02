import PropTypes from "prop-types";

function FilterBtn(props) {
  const { item, index, setPageNumber, task } = props;

  return (
    <>
      <style>
        {`
            .x:checked + label{
                background-color: #0b5ed7;
                color:white;
            }
            input[type="radio"]{
                display:none;
            }
            `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(item);
          }}
          className="form-check-input x"
          type="radio"
          name="status"
          id={`status-${index}`}
        />

        <label className="btn btn-outline-primary" htmlFor={`status-${index}`}>
          {item}
        </label>
      </div>
    </>
  );
}

FilterBtn.propTypes = {
  item: PropTypes.string,
  index: PropTypes.number,
  status_data: PropTypes.object,
  setPageNumber: PropTypes.func,
  task: PropTypes.func,
};

export default FilterBtn;
