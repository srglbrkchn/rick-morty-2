import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({info, pageNumber, setPageNumber}) => {
    // Capturing inner width of our browser
    let [width, setWidth] = useState(window.innerWidth);
    console.log(width);

    function updateDimention () {
        setWidth(window.innerWidth);
    }
    // Capture change in the browser size
    useEffect(() => {
        // Add event listener
        window.addEventListener("resize", updateDimention);
        return (() => {
            window.removeEventListener("resize", updateDimention);
        });
    }, []);

    return (
        // Check if the info is fetched from the API before add pages to the component, to avoid code breaks.

        <ReactPaginate
            className= "pagination justify-content-center gap-2 my-4"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            nextLabel="Next"
            previousLabel="Previous"
            nextClassName="btn btn-primary"
            previousClassName="btn btn-primary"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            onPageChange={(data)=> {
                setPageNumber(data.selected + 1);
            }}
            pageCount={info?.pages} 
        />
    );
}

export default Pagination;
