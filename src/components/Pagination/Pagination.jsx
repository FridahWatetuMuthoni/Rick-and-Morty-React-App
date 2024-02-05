import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

function Pagination(props) {
  const { setPageNumber, info, pageNumber } = props.data;
  const [width, setWidth] = useState(window.innerWidth);

  let updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    //removing the event listener
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      <style>
        {`
        @media (max-width:768px){
          .next, .prev{
            display:none;
          }

          .pagination{
            font-size:14px;
          }
        }
        `}
      </style>

      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        previousLabel="Previous"
        previousClassName="page-item  prev"
        previousLinkClassName="page-link"
        nextLabel="Next"
        nextClassName="page-item next"
        nextLinkClassName="page-link"
        pageClassName="page-item"
        breakClassName="text-primary"
        pageLinkClassName="page-link"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        pageCount={info?.pages}
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
      />
    </>
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
