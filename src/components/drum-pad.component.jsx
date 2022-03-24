import {Component} from "react";

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    playSound() {
        const sound = document.getElementById(this.props.letter);
        sound.currentTime = 0;
        sound.play();
        this.props.updateDisplay(this.props.letter);
    }

    render() {
        return (
            <div
                className="drum-pad"
                id={`drum-pad-${this.props.letter}`}
                onClick={this.playSound}
                onKeyDown={this.handleKey}>
                {this.props.letter}
                <audio
                    id={this.props.letter}
                    className="clip"
                    src={this.props.src}
                />
            </div>
        );
    }
}

export default DrumPad;
