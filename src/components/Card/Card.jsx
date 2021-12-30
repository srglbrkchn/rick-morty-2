import {div} from "prelude-ls";
import React from "react";
import styles from "./Card.module.scss";

const Card = ({results}) => {
    let display;

    if (results) {
        // Mapping the results from API into character cards
        display = results.map((result) => {
            let {id, image, name, status, location} = result;

            return (
                <div
                    key={id}
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
                    <div className={`${styles.card} d-flex flex-column justify-content-center`}>
                        <img className={`${styles.img} img-fluid`} src={image} alt=""/>
                        <div className={`${styles.content}`}>
                            <div className="fs-5 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-5 fw-normal">Last Location</div>
                                <div className="fs-6">{location.name}</div>
                            </div>
                        </div>
                    </div>

                    {/* Use IIFE function to return the badge based on status the moment cards are loaded */}
                    {(() => {
                        if (status === "Dead") {
                            return (
                                <div className={`${styles.badge} badge bg-danger position-absolute`}>
                                    {status}
                                </div>
                            )
                        }else if(status === "Alive") {
                            return (
                                <div className={`${styles.badge} badge bg-success position-absolute`}>
                                    {status}
                                </div>
                            )
                        }else {
                            return (
                                <div className={`${styles.badge} badge bg-secondary position-absolute`}>
                                    {status}
                                </div>
                            )
                                }
                        })()
                    }

                </div>

            );
        });

    } else {
        display = "No characters found: /";
    }

    return <> {
        display
    } </>;
}

export default Card;