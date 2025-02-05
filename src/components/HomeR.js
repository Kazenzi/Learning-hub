import React, { useState } from 'react';
import '../styles/main.css';
import icon from '../assets/LogoMawinguf.png';
import Footer from './Layout/Footer';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import mcimg from "../assets/MainContentImage.png"
import check from "../assets/Check-3.png"

function HomeR() {
// defining search

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


  const [language, setLanguage] = useState(null);

  return (
    <div className='landing-page'>
      <div className='top-nav' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div className="text-wrapper-8">
          <img className="Logo" alt="Logo" src={icon} height="48px" style={{height:"40px",left: "170px",top:"24px"}} />
        </div>
{/* change language  button */}
        <div className='changelanguage' style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => setLanguage('sw')} style={{ background: 'none', border: 'none', color: "#031D5B", fontSize: "20px", fontWeight: "bold", cursor: "pointer" }}>Swahili</button>
          <button onClick={() => setLanguage('so')} style={{ background: 'none', border: 'none', color: "#031D5B", fontSize: "20px", fontWeight: "bold", cursor: "pointer" }}>Somali</button>
          {/* {language && <span style={{ color: "#031D5B", fontSize: "20px", fontWeight: "bold" }}>Selected: {language === 'sw' ? 'English' : 'English'}</span>} */}
        </div>
      </div>
      <div

    //   maincontent
  className="maincontent"
  style={{
    margin: "10px 200px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <div className="card-left" style={{ flex: 7, marginTop:"-300px" }}>

     <div className="topsearch-bar" style={{ width: "100%" , textAlign:"left"}} >
        <form onSubmit={doSearch}  style={{ display: "flex", width: "580px", marginLeft:"-90px", }}  >
          <input
            type="text"
            placeholder="Search The Web"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"

            style={{
                flex: 1,
          padding: "16px 24px",
          fontSize: "16px",
          border: "1px solid #55C0E7",
          borderRadius: "4px",
          boxShadow: "inset 0px 1px 5px rgba(0, 0, 0, 0.15)",
          width: "100%",
          maxWidth: "600px",
          height: "56px",
          background: "#FFFFFF",
          color: "#B6BBC9",
          fontFamily: "'Encode Sans', sans-serif",
          fontWeight: 700,
              }}
          />
        </form>
       
      </div>
 

    <h1 style={{marginTop:"70px", fontSize:"60px",fontWeight:"1000px", color: "#3AB7E5", textAlign:"left"}}>Yard Ya Content</h1>
    <p style={{fontWeight:"400", fontSize:"20px", lineHeight:"32px", textAlign:"left"}}>The Mawingu Yard Ya Content is a digital platform providing easy access to educational, entertainment, and business resources, promoting digital inclusion through curated content for learning, entrepreneurship, and leisure.</p>
{/* miniconts */}
<div className="miniconts" style={{ display: 'flex', gap: '20px', alignItems: 'center' , paddingTop:"30px"}}>
  <div style={{ textAlign: 'center' }}>

    <img src={check} alt="Educational Resources"  />
  <span style={{paddingLeft:"10px" , color:"#031D5B", fontWeight:"600",fontSize:"16px"}}>Educational Resources</span>
  </div>
  <div style={{ textAlign: 'center' }}>
  <img src={check} alt="Entertainment"  />
  <span style={{paddingLeft:"10px", color:"#031D5B", fontWeight:"600",fontSize:"16px"}}>Entertainment</span>
  </div>
  <div style={{ textAlign: 'center' }}>
  <img src={check} alt="Business Tools"  />
  <span style={{paddingLeft:"10px" , color:"#031D5B", fontWeight:"600",fontSize:"16px"}}>Business Tools</span>
  </div>
</div>
  </div>
  <div className="card-right" style={{ flex: "3"}}>
    <img
      src={mcimg}
      alt="Image description"
      style={{ maxWidth: "887px", height: "807px", borderRadius: "8px"}}
    />
  </div>
</div>




      <Footer/>
    </div>
  );
}

export default HomeR;





