import React from "react";

const InputGroup = ({total, name, setID}) => {
    return (
        <div className="input-group mb-3">
            <select
                onChange={(event) => {
                setID(event.target.value);
            }}
                className="form-select"
                id={name}>
                <option selected>Choose...</option>
                {[...Array(total).keys()].map((episodeNum) => {
                    return (
                        <option value={episodeNum + 1}>
                            {name}
                            - {episodeNum + 1}</option>
                    );
                })}
            </select>
        </div>
    )
}

export default InputGroup;
