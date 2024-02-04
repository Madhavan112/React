import c from "./style.module.css";
import Box from "./box";
import { useEffect, useState } from "react";
export default function TicTacToe() {
  const [bnt, setBnt] = useState(false);
  const [currData, setCurrData] = useState("X");
  const [what_result, setWhat_Result] = useState("");
  const [resultChecker, setResultChecker] = useState(() => {
    const array = [];
    for (let i = 0; i < 9; i++) {
      array.push("");
    }
    return array;
  });
  const [clickedBox, setClickedBox] = useState([]);

  function handleBoxClick(index) {
    if (!clickedBox.includes(index)) {
      setClickedBox((prev) => [...prev, index]);
      const updatedData = resultChecker.map((e, i) =>
        index === i ? currData : e
      );
      setResultChecker(updatedData);
      setCurrData(currData === "X" ? "O" : "X");
    }
  }
  function pureLogic(ch) {
    const zero_diagonal = [0, 4, 8];
    const last_diagonal = [2, 4, 6];

    // diagonal
    if (
      zero_diagonal.every((index) => resultChecker[index] === ch) ||
      last_diagonal.every((index) => resultChecker[index] === ch)
    ) {
      setBnt(true);
      return ch;
    }
    // column
    for (let i = 0; i < 3; i++) {
      if (
        resultChecker[i] === ch &&
        resultChecker[i + 3] === ch &&
        resultChecker[i + 6] === ch
      ) {
        setBnt(true);
        return ch;
      }
    }
    // row
    for (let i = 0; i < 9; i += 3) {
      if (
        resultChecker[i] === ch &&
        resultChecker[i + 1] === ch &&
        resultChecker[i + 2] === ch
      ) {
        setBnt(true);
        return ch;
      }
    }
    return "-1";
  }
  function gameLogic() {
    if (
      clickedBox.length === 9 &&
      pureLogic("X") === "-1" &&
      pureLogic("O") === "-1"
    ) {
      setWhat_Result("Match Draw Guys");
    } else if (pureLogic("X") === "X") {
      setWhat_Result("Player 1");
    } else if (pureLogic("O") === "O") {
      setWhat_Result("Player 2");
    }
  }
  function gameRestart() {
    setBnt(false);
    setCurrData("X");
    setWhat_Result("");
    setResultChecker(Array(9).fill(""));
    setClickedBox([]);
  }
  useEffect(() => {
    gameLogic();
  }, [resultChecker]);

  return (
    <div className={c.wrapper}>
      <div className={c.container}>
        <Box
          handleBoxClick={handleBoxClick}
          resultChecker={resultChecker}
          bnt={bnt}
        />
      </div>
      <div className={c.gameinfo}>
        <h1>{what_result}</h1>
        <button onClick={() => gameRestart()}>Restart</button>
      </div>
    </div>
  );
}
