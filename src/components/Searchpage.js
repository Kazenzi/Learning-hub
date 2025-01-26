import React from 'react'
import chat from '../assets/image.png'
import copilot from '../assets/logos/copilot.png'

function Searchpage(props) {
    return (
    <div className="container-fluid research-page">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8 left-section">
          <h2 className="title">{props.quiz}</h2>
          <div className="icon-label">
              <small>Recommended</small>
          </div>
          <hr style={{ marginRight: '20px' }} />
         
          <div className="content-box">
            <h5>Causes of Cholera</h5>
            <p>
              Cholera comes from the V. cholerae bacteria. People infected with these bacteria can spread
              disease through their feces (also called stool or poop). They do so when infected feces get into the
              water system. If the water isn’t properly sanitized (cleaned), people using the water to drink, cook
              and wash risk exposure.
            </p>
            <div className="icon-label">
              <img alt="Verified" src={copilot} />
              <small>Copilot</small>
            </div>
          </div>
          <hr style={{ marginRight: '20px' }} />
          <div className="content-box">
          <>

            {Array.isArray(props.ans) && props.ans.length > 0 ? (
                <>
                <div className="blog">
                    <div className="overlap-2">
                    <div className="text-wrapper-8">·</div>
                    <div className="frame-8">
                        <div className="text-wrapper-9">Verified Answer</div>
                    </div>
                    </div>
                    {props.ans.map((item, index) => (
                    <>
                        <div className="text-wrapper-10">{item.subtopic_name}</div>
                        <p className="p">
                        {item.content}
                        </p>
                    </>
                    ))}
                    
                </div>
                <hr style={{ marginRight: '20px' }} />
                <div className="search-box">
                    <span className="search-icon">
                    <i className="bi bi-search"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
                </>
            ) : (
                <>
                <p>No result found.</p>
                <hr style={{ marginRight: '20px' }} />
                <div className="search-box">
                    <span className="search-icon">
                    <i className="bi bi-search"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
                </>
            )}
            </>
          </div>

        </div>

        {/* Right Section */}
        <div className="col-md-4 right-section">
          <button className="related-btn">More related questions</button>
          <ul className="question-list">
            <li>What are the prevention and control of cholera?</li>
            <li>How can cholera spread?</li>
            <li>What is the best treatment for cholera?</li>
          </ul>

          <h6 className="see-list">See the full list</h6>
          <p>Recommended Topic</p>
          <div className="topics">
            {['Technology', 'Money', 'Business', 'Productivity', 'Art', 'Mindfulness', 'Yada Yada'].map((topic) => (
              <button key={topic} className="topic-btn">{topic}</button>
            ))}
          </div>
         
          <div className="chat">
            <img className="chatbox" alt="Logo" src={chat} />
            </div>
        </div>
      </div>
    </div>
      );
}

export default Searchpage
