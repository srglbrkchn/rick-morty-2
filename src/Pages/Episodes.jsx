import React, {useState, useEffect} from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/Category/InputGroup";
import Count from "../components/Filter/Count";

const Episodes = () => {
    let [id,
        setID] = useState(1);
    let [info,
        setInfo] = useState([]);
    let [results,
        setResults] = useState([]);

    let count = Count();

    // Destructuring the info we get from episodes end for episodes route
    let {air_date, name} = info;
    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => {
                return res.json()
            });
            setInfo(data);

            let episodeCharacters = await Promise.all(data.characters.map((charLink) => {
                return (fetch(charLink).then((res) => {
                    return res.json();
                }));
            }));
            setResults(episodeCharacters);
        })();

    }, [api]);

    return (
        <div className="container">
            <div className="row mb-4">
                {/* If data received from api is empty it will be replaced with Unknown */}
                <h1 className="text-center mb-4">Episode : {" "}
                    <span className="text-primary">
                        {name === ""
                            ? "Unknown"
                            : name}
                    </span>
                </h1>
                <h5 className="text-center">Air Date {air_date === ""
                        ? "Unknown"
                        : air_date}</h5>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                    <h4 className="text-center mb-4">
                        Pick episodes
                    </h4>
                    <InputGroup name="Episode" setID={setID} total={count}/>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Card page="/episodes/" results={results}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Episodes;
