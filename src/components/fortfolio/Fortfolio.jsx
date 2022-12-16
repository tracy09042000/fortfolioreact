import { useState } from "react";
import Fortfoliolist from "../../fortfoliolist/Fortfoliolist";
import "./fortfolio.css";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import { useEffect } from "react";

export default function Fortfolio() {
  const [data, setData] = useState([]);
  const [selected, setselected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="fortfolio" id="fortfolio">
      <h1>Fortfolio</h1>
      <ul>
        {list.map((item, index) => (
          <Fortfoliolist key={index}
            title={item.title}
            active={selected === item.id}
            setselected={setselected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, index) => {
          return(
            <div key={index} className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
          )
        })}
      </div>
    </div>
  );
}
