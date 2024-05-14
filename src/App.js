import React from "react";
import { useState } from "react";
import RSP from "./component/RSP";
import './App.css';

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const choice = ["Scissors","Rock","Paper"];
  const ScissorsImg = "/Scissors.png";
  const RockImg = "/Rock.png";
  const PaperImg = "/Paper.png";

  const randomChoice = () => {
    const itemArray = Object.keys(choice);// choice 객체의 키들로 배열을 반환하고
    const randomItem = Math.floor(Math.random() * itemArray.length);
    //Math.random은 0부터 1미만까지의 랜덤수를 생성하므로
    //그 생성된 수와 itemarray.length, 즉 배열 0,1,2를 곱하고 
    //floor로 소수를 반올림하거나 내림해서 정수로 만든다.
    const final = itemArray[randomItem];
    return choice[final];
  };
  

  const onHandleClick = (choice) => {
    setComputerChoice(randomChoice());
    setUserChoice(choice);

    if (userChoice === computerChoice) {
      setResult("draw");
    } else if (
      (userChoice === "Scissors" && computerChoice === "Paper") ||
      (userChoice=== "Scissors" && computerChoice === "Rock") ||
      (userChoice === "Rock" && computerChoice === "Paper")
    ) {
      setResult("win");
    } else {
      setResult("lose");
    }
  };

  return (
    <div className="App">
      <RSP
        userChoice={userChoice}
        computerChoice={computerChoice}
        result={result}
        ScissorsImg={ScissorsImg}
        RockImg={RockImg}
        PaperImg={PaperImg}
      />

      <div className="RSP_button">
        <button onClick={() => onHandleClick(choice[0])}>가위</button>
        <button onClick={() => onHandleClick(choice[1])}>바위</button>
        <button onClick={() => onHandleClick(choice[2])}>보</button>
      </div>
    </div>
  );
}

export default App;
