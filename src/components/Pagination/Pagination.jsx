import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

function Pagination(props) {
  const { setPageNumber, info, pageNumber } = props.data;

  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      previousLabel="Previous"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextLabel="Next"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      pageClassName="page-item"
      breakClassName="text-primary"
      pageLinkClassName="page-link"
      activeClassName="active"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageCount={info?.pages}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
    />
  );
}

Pagination.propTypes = {
  setPageNumber: PropTypes.func,
  data: PropTypes.object,
  info: PropTypes.object,
  pageNumber: PropTypes.number,
};

export default Pagination;

// function Pagination(props) {
//   const { setPageNumber, info, pageNumber } = props.data;

//   console.log(info);

//   let next = () => {
//     setPageNumber((prev) => {
//       if (prev >= info.pages) {
//         return prev;
//       } else {
//         return prev + 1;
//       }
//     });
//   };
//   let previous = () => {
//     setPageNumber((prev) => {
//       if (prev <= 1) {
//         return prev;
//       } else {
//         return prev - 1;
//       }
//     });
//   };

//   return (
//     <div className="py-3 d-flex justify-content-center gap-5">
//       <button onClick={previous} className="btn btn-outline-primary">
//         Previous
//       </button>
//       <button className="btn btn-outline-primary">{pageNumber}</button>
//       <button onClick={next} className="btn btn-outline-primary">
//         Next
//       </button>
//     </div>
//   );
// }
