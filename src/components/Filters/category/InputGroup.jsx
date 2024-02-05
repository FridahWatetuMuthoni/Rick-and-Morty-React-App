import PropTypes from "prop-types";

function InputGroup(props) {
  let { name, total, SetId } = props;
  console.log(props);
  let numbers = [...Array(total).keys()];

  const handleChange = (e) => {
    SetId(e.target.value);
  };

  return (
    <section className="input-group mb-3">
      <select
        onChange={(e) => handleChange(e)}
        id={name}
        className="form-select"
      >
        <option value="1">Choose</option>
        {numbers.map((element) => {
          return (
            <option key={element + 1} value={element + 1}>
              {name} - {element + 1}
            </option>
          );
        })}
      </select>
    </section>
  );
}

InputGroup.propTypes = {
  total: PropTypes.number,
  name: PropTypes.string,
  SetId: PropTypes.func,
};

export default InputGroup;
