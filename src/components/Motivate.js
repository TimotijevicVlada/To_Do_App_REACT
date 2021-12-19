import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SkeletonMotivate from "./SkeletonMotivate";

const Motivate = () => {
    
  const [motivateMsg, setMotivateMsg] = useState([]);
  const [skeletonVisible, setSkeletonVisible] = useState(true);

  //Function that get motivational message from API
  const getMotivate = async () => {
    const response = await axios.get(
      "https://run.mocky.io/v3/dee319cd-aa8b-4e30-b86e-3743237fca55"
    );
    //console.log(response.data.motivational_quotes);
    setMotivateMsg(response.data.motivational_quotes);
    setSkeletonVisible(false);
  };

  useEffect(() => {
    getMotivate();
  }, []);

  return (
    <div className="motivate">
      <div className="motivate_header">
        <Link className="link" to="/">
          I am motivated!
        </Link>
      </div>
      <div className="title">
        <h2>Motivational messages</h2>
      </div>
      <div className="motivate_msg">
        {skeletonVisible ? (
          <SkeletonMotivate />
        ) : (
          motivateMsg.map((item, index) => (
            <div className="msg" key={index}>
              <div className="quote">"{item.quote}"</div>
              <div className="author">-{item.author}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Motivate;
