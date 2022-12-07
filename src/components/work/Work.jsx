import "./work.scss"

import {useState} from "react";

export default function Work() {
    const [currentSlide,setCurrentSlide]= useState(0)

    const data=[
        {
            id:"1",
            icon :"./assets/rental.png",
            title: "Real Estate",
            desc : 
            "Buy or rent properties with added filterig feature, Extra deatil for properties and more",
            img :"./assets/House.jpg",
        },
        {
            id:"2",
            icon :"./assets/rec.png",
            title: "ScoopWhoop Clone",
            desc :
            "Clone of ScoopWhoop",
            img :"./assets/sw.png",
        },
        
    ];

    const handleClick = (way)=>{
        way ==="left"?setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 1)
        : setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0);
    };

    return (
        <div className="work" id='work'>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>(
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                              <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>))
                }
            </div>
            <img src="assets/down-arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/down-arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />
        </div>
    )
}
