
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
//import '../styles/app.css';

function Mainmenu() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const doSearch = (ev) => {
    ev.preventDefault();

    let data = {
      "searchwords": searchTerm
    };

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://learninghub.mawingu.co/api/searchdata',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        const respoData = {
          resData: response.data, 
          quiz: searchTerm
        };
        navigate('/community', { state: { resData: respoData } });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="topsearch"  style={{padding:"10px"}} > 
      <div className="topsearch-bar">
        <form onSubmit={doSearch}>
          <input
            type="text"
            placeholder="Search...                                                          🔍"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </form>
       
      </div>
    <div className="mainmenu-container" style={{ height: '200%', overflowY: 'hidden', overflowX: 'hidden' }}>
      
      
    
      <div className="cards" style={{width:"100% "}} >
  {[
    { 
      description: "Access resources to enhance your knowledge.", 
      image: "/images/image1.png", 
      link: "/education" 
    },
    { description: "Stay informed about health and wellness.", image: "/images/image2.png", link: "/register" },
    { description: "Connect and share with your community.", image: "/images/image3.png", link: "/social" },
    { description: "Explore and celebrate diverse cultures.", image: "/images/image4.png", link: "/culture" },
    { description: "Manage your finances effectively.", image: "/images/image5.png", link: "/financial" },
    { description: "Understand your legal rights and obligations.", image: "/images/image6.png", link: "/legal" }
  ].map((item, index) => (
    <div  style={{height:"37vh"}}
      key={index} 
      className="card" 
      onClick={() => navigate(item.link)}
    >
      <img src={item.image} alt="card image" className="card-image"  style={{width:"30vh",height: "30vh"}}/>
      <div className="card-content">
        <p className="card-description" style={{fontSize:"14px"}}>{item.description} </p>
        <a href={item.link} className="read-more">View More</a>
      </div>
    </div>
  ))}
</div>


    </div>
    </div>
  );
}

export default Mainmenu;
