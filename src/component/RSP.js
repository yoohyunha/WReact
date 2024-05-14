import React from "react";
import "./RSP.css";

const RSP = ({ userChoice, computerChoice, result,RockImg,ScissorsImg,PaperImg }) => {
  const getImage = (choice) => {
    switch (choice) {
      case "Scissors":
        return ScissorsImg;
      case "Rock":
        return RockImg;
      case "Paper":
        return PaperImg;
      default:
        return null;
    }
  };
  return (
    <div>
      <h4>가위바위보 게임</h4>
      <div className="RSP_tool">
        <div className="me">
          <h2>나</h2>
          <h3 className="mecho">{userChoice}</h3>
        </div>
        <div className="you">
          <h2>상대</h2>
          <h3 className="youcho">{computerChoice}</h3>
        </div>
      </div>
      <img src={getImage(userChoice)} alt={userChoice} className="userImg" />
      <img src={getImage(computerChoice)} alt={computerChoice} className="computerImg" />
   
      <h2>결과 :  {result}</h2>
    </div>
  );
};

export default RSP;