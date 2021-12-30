import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filter = ({setStatus, setPageNumber, setGender, setSpecies}) => {
    function clear() {
        setSpecies("");
        setStatus("");
        setGender("")
        setPageNumber(1);
        // Refresh the page
        window.location.reload(false);
    }
    return (
        <div className="col-3">
            <div className="text-center fw-bold fs-4 mb-2">Filter</div>
            <div
                onClick={clear}
                style={{
                    cursor: "pointer"
                }}
                className="text-center text-decoration-underline text-primary mb-4">Clear Filters
            </div>
            <div className="accordion" id="accordionExample">
                <Status setStatus={setStatus} setPageNumber={setPageNumber} />
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Gender setGender={setGender} setPageNumber={setPageNumber} />     
            </div>
        </div>
    )
}

export default Filter
