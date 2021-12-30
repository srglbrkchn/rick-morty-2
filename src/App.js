
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, {useState, useEffect} from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";


function App() {
    // ~~~~~~ Data Fetching Section 
    let [fetchedData, setFetchedData] = useState([]);
    let [pageNumber, setPageNumber]= useState(1);
    let[search, setSearch] = useState("");
    let [status, setStatus] = useState("");
    let [gender, setGender] = useState("");
    let [species, setSpecies] = useState("");

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    // fetch data from api using useEffect hook 
    useEffect(()=>{
        (async function() {
            let data = await fetch(api).then((res)=>res.json());
            setFetchedData(data);
        })();
    }, [api]);

    // Destructure fetchedData into info and results inorder to use then in different components
    let {info, results} = fetchedData;
    //  ~~~~~~~
    

    return (
        <div className="App">
            <h1 className="text-center ubuntu my-4">Rick & Morty <span style={{color: "#7aafec"}}>WiKi</span> </h1>
            <h1 className="text-center mb-3">Characters</h1>

            <Search setSearch={setSearch} setPageNumber={setPageNumber} />

            <div className="container">
                <div className="row">
                        <Filter setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />
                    <div className="col-lg-8 col-12">
                        <div className="row">
                            <Card results={results} />
                        </div>
                    </div>
                </div>
            </div>

            <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} />
        </div>

    );
}

export default App;
