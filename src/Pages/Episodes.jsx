import React, {useState, useEffect} from "react";

const Episodes = () => {
    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    // Destructuring the info we get from episodes end for episodes route
    let {air_date, name} = info;
    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(()=>{
        (async function() {
            let data = await fetch(api).then((res)=>{return res.json()});
            setInfo(data);
        })();

    }, [api]);

    return (
        <div className = "container">
        <div className = "row">
            {/* If data received from api is empty it will be replaced with Unknown */}
            <h1 className="text-center mb-4">Episode : {" "}
            <span className="text-primary">
            {name === "" ? "Unknown" : name}
            </span>
            </h1>
            <h5 className="text-center">Air Date {air_date === "" ? "Unknown" : air_date}</h5>
        </div>
        <div className = "row"></div>   
        </div>
    );
}

export default Episodes;
