import React from "react"
import FilterBTN from "../FilterBTN";

const Gender = ({setPageNumber, setGender}) => {
    let gender = ["female", "male", "genderless", "unknown"];

    return (
        <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne">
                            Gender
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body d-flex flex-wrap gap-3">
                            {  gender.map((item, index) => {
                                return(
                                    <FilterBTN task={setGender} setPageNumber={setPageNumber} key={index} index={index} name="gender" item={item} />
                                );
                            })}
                        </div>
                    </div>
                </div>
    );
}

export default Gender;
