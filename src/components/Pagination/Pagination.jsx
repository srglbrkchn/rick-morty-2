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
        <>
        <style jsx>
            {`
                @media(max-width: 768px) {
                    .next, .previous {
                        display: none;
                    }

                    .pagination {
                        font-size: 11px;
                    }
                }
            `}
        </style>
        <ReactPaginate
            className= "pagination justify-content-center gap-2 my-4"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            nextLabel="Next"
            previousLabel="Previous"
            nextClassName="btn btn-primary next"
            previousClassName="btn btn-primary previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            marginPagesDisplayed={width < 576 ? 1 : 2}
            pageRangeDisplayed={width < 576 ? 1 : 2}
            onPageChange={(data)=> {
                setPageNumber(data.selected + 1);
            }}
            // Check if the info is fetched from the API before add pages to the component, to avoid code breaks.
            pageCount={info?.pages} 
        />
        </>
    );
}

export default Pagination;
