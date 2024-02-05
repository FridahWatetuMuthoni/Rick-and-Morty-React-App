import styles from "./Search.module.scss";
import PropTypes from "prop-types";

function Search(props) {
  const { setSearch, setPageNumber } = props.search_data;

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setPageNumber(1);
    setSearch(e.target.value);
  };
  return (
    <section className="container">
      <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-4 ">
        <input
          type="text"
          className={`${styles.input}`}
          placeholder="Search for charaters"
          onChange={(e) => handleChange(e)}
        />
        <button
          onClick={(e) => handleClick(e)}
          className={`btn btn-primary fs-5 ${styles.btn}`}
        >
          Search
        </button>
      </form>
    </section>
  );
}

Search.propTypes = {
  search_data: PropTypes.object,
  setSearch: PropTypes.func,
  setPageNumber: PropTypes.func,
};

export default Search;
