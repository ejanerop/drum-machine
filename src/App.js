import {useState} from "react";
import "./App.scss";
import DrumPad from "./components/drum-pad.component";

import Q from "./audio/Q.wav";
import W from "./audio/W.wav";
import E from "./audio/E.wav";
import A from "./audio/A.wav";
import S from "./audio/S.wav";
import D from "./audio/D.wav";
import Z from "./audio/Z.wav";
import X from "./audio/X.wav";
import C from "./audio/C.wav";

function App() {
    const [sound, setSound] = useState(null);

    const handleClick = (e) => {
        setSound(e.target.id);
    };

    const displayName = (name) => {
        setSound(name);
    };
    return (
        <div className="App">
            <div id="drum-machine">
                <div className="buttons">
                    <DrumPad
                        letter="Q"
                        src={Q}
                        handleClick={handleClick}
                        updateDisplay={displayName}
                        keyCode={81}
                    />
                    <DrumPad
                        letter="W"
                        src={W}
                        handleClick={handleClick}
                        updateDisplay={displayName}
                        keyCode={87}
                    />
                    <DrumPad
                        letter="E"
                        src={E}
                        handleClick={handleClick}
                        updateDisplay={displayName}
                        keyCode={69}
                    />
                    <DrumPad
                        letter="A"
                        src={A}
                        handleClick={handleClick}
                        updateDisplay={displayName}
                        keyCode={65}
                    />
                    <DrumPad
                        letter="S"
                        src={S}
                        handleClick={handleClick}
                        updateDisplay={displayName}
                        keyCode={83}
                    />
                    <DrumPad
                        letter="D"
                        src={D}
                        handleClick={handleClick}
                        updateDisplay={displayName}
                        keyCode={68}
                    />
                    <DrumPad
                        letter="Z"
                        src={Z}
                        handleClick={handleClick}
                        updateDisplay={displayName}
                        keyCode={90}
                    />
                    <DrumPad
                        letter="X"
                        src={X}
                        handleClick={handleClick}
                        updateDisplay={displayName}
                        keyCode={88}
                    />
                    <DrumPad
                        letter="C"
                        src={C}
                        handleClick={handleClick}
                        updateDisplay={displayName}
                        keyCode={67}
                    />
                </div>
                <div className="controls">
                    <p id="display">{sound}</p>
                </div>
            </div>
        </div>
    );
}

export default App;
