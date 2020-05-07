import React from 'react';

// ROUTER
import { Router, Route, Link, Redirect, Switch } from 'react-router-dom';

// VIDEO THIMBNAILS
import chapel_5_7 from '../../assets/images/chapel_5-7.png';
import chapel_4_30 from '../../assets/images/chapel_4-30.png';
import pe_e_1 from '../../assets/images/pe_e_1.png';
import pe_m_1 from '../../assets/images/pe_m_1.png';

const Home = () => {
  return (
    <>
      <div className="Main__Content-Wrapper">
        <div className="Content-Wrapper">
          <p className="Content-Header">Chapel Videos</p>
          <div className="Content__Video-Wrapper">
            <Link to={`/watch?v=chapel_5-7-20&til=Chapel&tec=Pastor%20Jake`}>
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={chapel_5_7}
                ></img>
                <div className="Video-Context">Pastor Jake (May 7th)</div>
              </div>
            </Link>
            <Link
              to={`/watch?v=chapel_4-30-20&til=Chapel&tec=Principal%20Reid`}
            >
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={chapel_4_30}
                ></img>
                <div className="Video-Context">Principal Reid (April 30th)</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="Content-Wrapper">
          <p className="Content-Header">Physical Education: Elementary</p>
          <div className="Content__Video-Wrapper">
            <Link to={`/watch?v=ElementaryPE_1&til=PE&tec=Dani%20Fraley`}>
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={pe_e_1}
                ></img>
                <div className="Video-Context">Elementary PE (April 27th)</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="Content-Wrapper">
          <p className="Content-Header">Physical Education: Middle School</p>
          <div className="Content__Video-Wrapper">
            <Link to={`/watch?v=MiddleschoolPE_1&til=PE&tec=Dani%20Fraley`}>
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={pe_m_1}
                ></img>
                <div className="Video-Context">
                  Middle School PE (April 27th)
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
