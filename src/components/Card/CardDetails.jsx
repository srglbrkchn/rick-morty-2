import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {

    let [fetchedData, setFetchedData] = useState([]);
    let {id} = useParams();
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    let {name, image, origin, location, gender, status, species, type} = fetchedData;


    // fetch data from api using useEffect hook 
    useEffect(()=>{
        (async function() {
            let data = await fetch(api).then((res)=>res.json());
            setFetchedData(data);
        })();
    }, [api]);
     
    return (
        <div className="container d-flex justify-content-center">
            <div className="d-flex flex-column gap-3">
                <h1 className="text-center">
                    {name}
                </h1>
                <img src={image} alt={name} className="img-fluid"></img>
                {(() => {
                        if (status === "Dead") {
                            return (
                                <div className={"badge bg-danger fs-5"}>
                                    {status}
                                </div>
                            )
                        }else if(status === "Alive") {
                            return (
                                <div className={"badge bg-success fs-5"}>
                                    {status}
                                </div>
                            )
                        }else {
                            return (
                                <div className={"badge bg-secondary fs-5"}>
                                    {status}
                                </div>
                            )
                                }
                        })()
                }

                <div className="content">
                    <div className="">
                        <span className="fw-bold">Gender : </span> {gender}
                    </div>
                    <div className="">
                        <span className="fw-bold">Location : </span> {location.name}
                    </div>
                    <div className="">
                        <span className="fw-bold">Origin : </span> {origin.name}
                    </div>
                    <div className="">
                        <span className="fw-bold">Species : </span> {species}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;
