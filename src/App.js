import "./App.css";
import { Button } from "./commonComponent/button";
import doorlockOff from "./img/doorlockOff.jpg";
import doorlockOn from "./img/doorlockOn.jpg";
import beep from "./audio/beep.mp3";
import open from "./audio/open.mp3";
import fail from "./audio/fail.mp3";
import { useRef, useState } from "react";

function App() {
  const pass = "000000";
  const isTrying = useRef(false);
  const buf = useRef("");
  const [doorlock, setDoorlock] = useState(doorlockOff);

  function Keypad() {
    function StartEnd() {
      console.log(isTrying.current, buf.current);
      if (isTrying.current) {
        if (buf.current == pass) {
          var audio = new Audio(open);
          audio.play();
        } else if (buf.current != "") {
          var audio = new Audio(fail);
          audio.play();
        }
      }

      isTrying.current = !isTrying.current;
      if (isTrying.current) {
        setDoorlock(doorlockOn);
      } else {
        setDoorlock(doorlockOff);
      }

      buf.current = "";
    }

    function Click(e) {
      let text = e.target.innerText;
      if (isTrying.current) {
        if (text == "*") {
          StartEnd();
        } else {
          var audio = new Audio(beep);
          audio.play();
          buf.current = buf.current + text;
          // window.navigator.vibrate(150);
        }
      }
      console.log(buf.current);
    }

    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];
    return (
      <div
        style={{
          width: "95%",
          textAlign: "center",
          position: "absolute",
          zIndex: "10",
          top: "192px",
        }}
      >
        {num.map((v, i) => {
          return <Button btnWidth={"30%"} key={i} label={v} onClick={Click} />;
        })}
        <Button
          style={{ marginTop: "95px" }}
          btnWidth={"100%"}
          label="TEST"
          onClick={StartEnd}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <img src={doorlock} style={{ width: "100%" }} />
      <Keypad />
    </div>
  );
}

export default App;
