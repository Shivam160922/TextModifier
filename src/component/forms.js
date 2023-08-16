import React, { useState } from "react";

export default function Forms(props) {
    
  const Upclick = () => {
    console.log("upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Uppercase convertion done", "Success");
  };
  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };
  const lowclick = () => {
    console.log("lower case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Lowercase convertion done", "Success");
  };
  const speak = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
    props.showalert(" Voice Application Successful", "Success");
  };
  const [weight, setWeight] = useState("normal");
  const RES = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join([" "]));
  };
  const boldText = () => {
    if (weight === "normal") setWeight("bold");
    else if (weight === "bold") setWeight("normal");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              fontWeight: weight,
              backgroundColor: props.mode === "light" ? "blue" : "white",
            }}
            id="Write your text"
            rows="2"
          ></textarea>
        </div>
        <button disabled={text.length===0}  className="btn btn-info mx-2 my-2" onClick={Upclick}>
          Convert to uppercase{" "}
        </button>
        <button disabled={text.length===0} className="btn btn-info  mx-2 my-2" onClick={lowclick}>
          Convert to lowercase{" "}
        </button>
        <button
           disabled={text.length===0}
          type="submit"
          onClick={speak}
          className="btn btn-info mx-2 my-2"
        >
          Voice
        </button>
        <button
        disabled={text.length===0}
          type="submit"
          onClick={boldText}
          className="btn btn-info mx-2 my-2"
        >
         Bold
        </button>
        <button disabled={text.length===0} type="submit" onClick={RES} className="btn btn-info mx-2 my-2">
          Remove Extra Space
        </button>
      </div>
      <div className="container" my-3>
        <h1>Conclusion</h1>
        <p>
          {" "}
          {
            text.split(/\s+/ ).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Letters
        </p>
        <p> {0.16 * text.split(" ").length} minutes to read the text. </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Please Write Something"}</p>
      </div>
    </>
  );
}
