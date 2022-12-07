import "./portfolio.scss"

import { featuredPortfolio, webDev, } from "../../data";

import PortfolioList from "../portfolioList/PortfolioList";
import {useEffect} from "react";
import {useState} from "react";

export default function Portfolio() {
    const[selected, setSelected] = useState("featured");
    const[data, setData] = useState([]);
    const list=[
        {
            id:"featured",
            title:"Featured",
        },
        {
            id:"web-dev",
            title:"Web Dev",
        },
        
        
    ];
     
    useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web-dev":
                setData(webDev);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])
    return (
        <div className="portfolio" id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
               {list.map((item) => (
                   <PortfolioList title={item.title} 
                   active={selected===item.id}
                   setSelected={setSelected}                 
                   id={item.id}
                   />
               )
               )}
 
            </ul>
            <div className="container">
                {data.map((d)=>(
                      <div className="item" onClick={d.link}>
                      <img src={d.img} alt="" />
                      <h3> {d.title}</h3>
                      </div>
                ))}
              
                
            </div>
            <a href="https://github.com/amar13mehta">
                <div className="github">
                <img src="assets/github1.png" alt="" />
            </div>
            
            </a>
            <a href="https://www.linkedin.com/in/amar-mehta-48a6b814b/">
                <div className="github">
                <img src="assets/linkedin.png" alt="" />
            </div>
            
            </a>
        </div>
    )
}
