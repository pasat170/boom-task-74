import "./App.css";
import { useState, useMemo } from "react";
function App() {
    let [text, setText] = useState("");
    let tru = false;
    const reg = new RegExp("^[0-9]+$")
    const check =
        useMemo(() => {
            if (reg.test(text) == false) {
                tru = false;
            } else {
                tru = true;
            }
        }, [text])

    return (
        <div className="App">
            <div className="control has-icons-right">
                <input
                    className="input is-large"
                    type="text"
                    placeholder="Enter number..."
                    value={text}
                    onChange={
                        (e) => {
                            setText(e.target.value)
                        }}
                />
                <span className="icon is-small is-right">
                    <i className={tru ? "fas fa-check" : "fas fa-times"} />
                </span>
            </div>
        </div>
    );
}

export default App;
