import React from "react";

const FilterBtn = ({name, index, item, task, setPageNumber}) => {
    return (
        <div>
            <style jsx>
                {`
                    input[type="radio"] {
                        display: none
                    }
                    .form-check-input:checked + label {
                        background-color: #7aafec;
                        color: #fff;
                        border-color: #7aafec;
                    }
                `}
            </style>
            <div className="form-check">
                <input onClick={() => {
                    setPageNumber(1);
                    task(item);
                }} className="form-check-input" type="radio" name={name} id={`${name}-${index}`} />
                <label style={{textTransform: "capitalize"}} class="btn btn-outline-primary" for={`${name}-${index}`} >{item}</label>
            </div>
        </div>
    );
};

export default FilterBtn;

