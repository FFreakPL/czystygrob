import React  from 'react';
import Carousel, {CarouselItem} from "./Carousel";
import { useNavigate } from "react-router-dom";

export default function LandingPageInfo() {
    const navigate = useNavigate();
    const subPages = [
        {
            name: "visit",
            description: "Odwiedziny grobu",
            info: ""
        },
        {
            name: "cleaning",
            description: "Sprzątanie grobu"
        },
        {
            name: "washing",
            description: "Umycie grobu"
        },
        {
            name: "additional",
            description: "Usługi dodatkowe"
        }
    ];

    return(
        <section className="info">
            <article className="info_description">

                <Carousel>
                    {subPages.map((subPage, index) =>
                        <CarouselItem key={index}>
                            <div
                                className={`carousel_${subPages[index].name}`}
                                onClick={() => navigate(`/${subPages[index].name}`)}>
                                <div className="carousel_info_container">
                                    <p className="carousel_info">{subPages[index].description}</p>
                                </div>
                            </div>
                        </CarouselItem>)}
                </Carousel>

            </article>
        </section>
    )
}