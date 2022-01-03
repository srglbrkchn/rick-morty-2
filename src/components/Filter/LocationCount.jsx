import React, {useState, useEffect} from "react";

let locations;

function LocationCount() {
    let [info, setInfo] = useState([]);
    let api = `https://rickandmortyapi.com/api/location`;
    let [count, setCount] = useState("");

    useEffect(()=>{
        (async function() {
            let data = await fetch(api).then((res)=>{return res.json()});
            setInfo(data);
            setCount(data.info.count);   
        })();

    }, [api]);    

    locations = count;
    return locations;
    
}

export default LocationCount;

