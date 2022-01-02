import React, {useState, useEffect} from "react";

let episodeTotal;

function Count() {
    let [info, setInfo] = useState([]);
    let api = `https://rickandmortyapi.com/api/episode/`;
    let [count, setCount] = useState("");

    useEffect(()=>{
        (async function() {
            let data = await fetch(api).then((res)=>{return res.json()});
            setInfo(data);
            setCount(data.info.count);   
        })();

    }, [api]);    

    episodeTotal = count;
    return episodeTotal;
    
}

export default Count;

