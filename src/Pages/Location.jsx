import React, {useState, useEffect} from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/Category/InputGroup";
import LocationCount from "../components/Filter/LocationCount";

const Location = () => {
    let [id,
        setID] = useState(1);
    let [info,
        setInfo] = useState([]);
    let [results,
        setResults] = useState([]);

    let count = LocationCount();

    // Destructuring the info we get from episodes end for episodes route
    let {name, type, dimension} = info;
    let api = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => {
                return res.json()
            });
            setInfo(data);

            let locations = await Promise.all(data.residents.map((location) => {
                return (fetch(location).then((res) => {
                    return res.json();
                }));
            }));
            setResults(locations);
        })();

    }, [api]);

    return (
        <div className="container">
            <div className="row mb-4">
                {/* If data received from api is empty it will be replaced with Unknown */}
                <h1 className="text-center mb-4">Location : {" "}
                    <span className="text-primary">
                        {name === ""
                            ? "Unknown"
                            : name}
                    </span>
                </h1>
                <h5
                    style={{
                    textTransform: "capitalize"
                }}
                    className="text-center">Dimension: {dimension === ""
                        ? "Unknown"
                        : dimension}</h5>

                <h6
                    style={{
                    textTransform: "capitalize"
                }}
                    className="text-center">Type: {type === ""
                        ? "Unknown"
                        : type}</h6>
            </div>

            <div className="row">
                <div className="col-3">
                    <h4 className="text-center mb-4">
                        Pick location
                    </h4>
                    <InputGroup name="Location" setID={setID} total={count}/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <Card results={results}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;
