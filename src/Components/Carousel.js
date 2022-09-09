import React, {useState, useEffect} from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, width}) => {
    return (
        <div className="carousel_item" style={{ width: width}}>
            {children}
        </div>
    );
};


export default function Carousel({ children}){
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (!paused) {
    //             updateIndex(activeIndex + 1);
    //         }
    //     }, 2000);
    //     return () => {
    //         if (interval) {
    //             clearInterval(interval)
    //         }
    //     };
    // });

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = (React.Children.count(children)- 1);
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="inner"
                 style={{ transform : `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, );
                })}
            </div>
            <div className="carousel_indicators">
                <button
                    className="carousel_button_prev"
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <div className="carousel_container">
                    {React.Children.map(children, (child, index) => {
                        return (

                            <button
                                className={`carousel_btn ${index === activeIndex ? "active" : ""} `}
                                onClick={() => {
                                    updateIndex(index);
                                }}
                            >
                                {/*{index + 1}*/}
                            </button>
                        )
                    })}
                </div>
                <button
                    className="carousel_button_next"
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    <i className="fa-solid fa-arrow-right-long"></i>
                </button>
            </div>
        </div>
    );
};