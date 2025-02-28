import React, { useState } from "react";
import "../styles/main.css";
import icon from "../assets/LogoMawinguf.png";
import Footer from "./Layout/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import mcimg from "../assets/MainContentImage.png";
import check from "../assets/Check-3.png";
import educate from "../assets/Education.png"
import health from "../assets/Health.png"
import social from "../assets/social.png"
import culture from "../assets/culture.png"
import finacial  from "../assets/Finacial.png"
import legal  from "../assets/Legal.png"


function HomeR() {
  // Card content
  const topCards = [
    { title: "Education", text: "Discover a wealth of resources designed to expand your knowledge and sharpen your skills. Whether you're learning a new subject or deepening your expertise, find the right tools to support your journey.", image: educate },
    { title: "Health", text: "Stay informed on how to lead a healthier life with expert advice and wellness tips. From nutrition to mental well-being, explore guides that help you take charge of your health.", image: health },
    { title: "Social", text: "Foster meaningful connections and build strong relationships within your community. Learn how to engage with others, improve communication, and create lasting bonds.", image: social },
  ];

  const bottomCards = [
    { title: "Culture", text: "Immerse yourself in the richness of diverse traditions, arts, and customs from around the world. Gain a deeper appreciation for cultural heritage and its impact on society.", image: culture },
    { title: "Financial", text: "Take control of your financial future with expert guidance on budgeting, saving, and investing. Learn practical strategies to achieve stability and grow your wealth.", image:finacial },
    { title: "Legal", text: "Empower yourself with knowledge about your rights and legal protections. Access resources that help you navigate legal matters with confidence and clarity from experts", image: legal },
  ];

  // Defining search
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const doSearch = (ev) => {
    ev.preventDefault();

    let data = { searchwords: searchTerm };

    axios
      .post("https://learninghub.mawingu.co/api/searchdata", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const respoData = { resData: response.data, quiz: searchTerm };
        navigate("/community", { state: { resData: respoData } });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [language, setLanguage] = useState(null);

  return (
    <div className="land">
      <div
        className="top-nav"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="text-wrapper-8" style={{ marginLeft: "300px" }}>
          <img className="Logo" alt="Logo" src={icon} style={{ height: "40px" }} />
        </div>

        {/* Change language button */}
        <div className="changelanguage" style={{ display: "flex", gap: "15px" }}>
          <button onClick={() => setLanguage("sw")} style={buttonStyle}>Swahili</button>
          <button onClick={() => setLanguage("so")} style={buttonStyle}>Somali</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="maincontent" style={{ marginTop: "10px", margin: "0 150px", display: "flex", alignItems: "center" }}>
        <div className="card-left" style={{ flex: 7, marginTop: "70px" }}>
          {/* Search bar */}
          <div className="topsearch-bar" style={{ marginLeft: "20px" }}>
            <form onSubmit={doSearch} style={{ width: "550px" }}>
              <input
                type="text"
                placeholder="Search The Web"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                style={searchBarStyle}
              />
            </form>
          </div>

          <h1 style={mainHeadingStyle}>Yard Ya Content</h1>
          <p style={paragraphStyle}>
            The Mawingu Yard Ya Content is a digital platform providing easy access to educational, entertainment, and business resources, promoting digital inclusion through curated content for learning, entrepreneurship, and leisure.
          </p>

          {/* Mini Content */}
          <div className="miniconts" style={{ display: "flex", gap: "20px", alignItems: "center", paddingTop: "30px" }}>
            {["Educational Resources", "Entertainment", "Business Tools"].map((text, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img src={check} alt={text} />
                <span style={miniContentTextStyle}>{text}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="buttons" style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
            <button style={loginButtonStyle}>Login</button>
            <button style={signUpButtonStyle}>Sign Up</button>
          </div>

          <h1 style={categoryHeadingStyle}>Top Categories</h1>
        </div>

        {/* Right Side Image */}
        <div className="card-right" style={{ flex: 3, marginLeft: "-300px" }}>
          <img src={mcimg} alt="Main Content" style={{ maxWidth: "887px", height: "807px", borderRadius: "8px" }} />
        </div>
      </div>

      {/* Top Category Cards */}
      
      <div className="cardstosp" style={{paddingTop: "-20px"}}>
        <div style={cardContainerStyle}>
          {topCards.map((card, index) => (
            <div key={index} style={cardStyle}>
              <img src={card.image} alt={card.title} style={cardImageStyle} />
              <div style={{ padding: "15px" }}>
                <h5 style={h2style}>{card.title}</h5>
                <p style={cardTextStyle}>{card.text}</p>
                <a href="#" style={cardButtonStyle}>Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Category Cards */}
      <div className="cardstosp" style={{paddingTop:"20px", }}>
        <div style={cardContainerStyle}>
          {bottomCards.map((card, index) => (
            <div key={index} style={cardStyle}>
              <img src={card.image} alt={card.title} style={cardImageStyle} />
              <div style={{ padding: "15px" }}>
                <h5 style={h2style}>{card.title}</h5>
                <p style={cardTextStyle}>{card.text}</p>
                <a href="#" style={cardButtonStyle}>Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Styles
const buttonStyle = {
  background: "none",
  border: "none",
  color: "#031D5B",
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer",
};

const searchBarStyle = {
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
  fontWeight: "700",
};
const h2style={
    fontSize:"28px",
    lineHeight: "35px",
    color:"#012B45",
    fontWeight:"900",
    textAlign:"left",
    

};



const mainHeadingStyle = {
  marginTop: "40px",
  fontSize: "60px",
  fontWeight: "bold",
  color: "#3AB7E5",
  textAlign: "left",
};

const paragraphStyle = {
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "32px",
  textAlign: "left",
 
};

const miniContentTextStyle = {
  paddingLeft: "10px",
  color: "#031D5B",
  fontWeight: "600",
  fontSize: "16px",
};

const loginButtonStyle = {
  backgroundColor: "#031D5B",
  color: "white",
  padding: "12px 24px",
  border: "none",
  borderRadius: "16px",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold",
};

const signUpButtonStyle = {
  backgroundColor: "#3AB7E5",
  color: "white",
  padding: "12px 24px",
  border: "none",
  borderRadius: "16px",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold",
};

const categoryHeadingStyle = {
  marginTop: "40px",
  fontSize: "60px",
  fontWeight: "bold",
  color: "#031D5B",
  textAlign: "left",
};

const cardStyle = {
    width: "367px", // Set width to 367px as per the Figma design
    height: "577px", // Set height to 577px to match the Figma card size
    border: "1px solid #ddd",
    borderRadius: "12px", // Adding rounded corners for consistency
    overflow: "hidden",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    position: "relative", // To handle absolute positioning inside
};

const cardButtonStyle = {
  display: "inline-block",
  textDecoration: "none",
  backgroundColor: "#3AB7E5",
  color: "#fff",
  padding: "10px 15px",
  borderRadius: "5px",
  paddingTop:"10px",
  borderRadius:"100px",
  width:"253px",
  height:'48px'
 

};

const cardContainerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginLeft:"-170px"
  };
  
  const cardImageStyle = {
    width: "367px",  // Match Figma image width
  height: "270px", // Match Figma image height
  borderRadius: "12px 12px 0 0", // Rounded corners at the top
  objectFit: "cover",  // Ensure image fits correctly inside the box
  };
  
  const cardTextStyle = {
    fontSize: "14px",
    color: "#868686",
    fontWeight:"400",
    lineHeight: "24px",
    textAlign:"left",
    paddingTop: "10px",
    paddingBottom: "20px"
  };

export default HomeR;
