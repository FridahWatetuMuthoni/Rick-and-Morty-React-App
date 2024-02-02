import PropTypes from "prop-types";
import styles from "./Cards.module.scss";

function Cards(props) {
  const { results } = props;

  return results ? (
    results.map((item) => {
      let { id, name, image, location, status } = item;
      let color;

      if (status === "Alive") {
        color = "success";
      } else if (status === "Dead") {
        color = "danger";
      } else {
        color = "primary";
      }
      return (
        <article
          className={`col-xm-11 col-sm-6 col-md-4  mb-3 p-0 position-relative shadow-sm  ${styles.card_wrapper}`}
          key={id}
        >
          <section className={styles.image_wrapper}>
            <img src={image} alt="" className="img-fluid" />
          </section>
          <section className={`${styles.content} my-2 p-2`}>
            <p className="fs-5 fw-bold my-1">{name}</p>
            <p className="fs-6 my-1"> Last Location: {location.name}</p>
          </section>
          <button
            className={`${styles.badge} btn position-absolute badge bg-${color}`}
          >
            {status}
          </button>
        </article>
      );
    })
  ) : (
    <p>No Charaters Found :/</p>
  );
}

Cards.propTypes = {
  results: PropTypes.array,
};

export default Cards;
