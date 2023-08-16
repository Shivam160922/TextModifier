import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

export default function More() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btn, setBtn] = useState("Enable dark mode");
  const toggle = () => {
    if (myStyle.backgroundColor === "white") {
      setMyStyle({
        backgroundColor: "#c6b890",
      });
      setBtn("Enable Light mode");
    } else {
      setMyStyle({
        backgroundColor: "white",
      });
      setBtn("Enable Dark mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1>About my App</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              style={myStyle}
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Why TextModifier?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Text Modifier is basically a site which is designed to be used for
              displaying the contents in some modified manner. These
              modifications includes things like converting the content from
              uppercase to lowercase ,from lowercase to uppercase. It also have
              the ability to produce voice notes from the written text prodive
              in the work space area. It can covert your text from simple text
              to bold text and visa versa. It is helpful in reducing the extra
              spaces in the text provided.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              style={myStyle}
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How It Works!
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This is one of the simplest website for your daily text
              modifications.Here you hava to just put your text in the working
              space and then your have to click on any of the modifier button as
              per your choice and it will provide you with your required
              functionality within a second .This website is formed using
              JavaScript,Html,Css and React.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button onClick={toggle} type="button" className="btn btn-warning">
          {" "}
          {btn}
        </button>
      </div>
    </div>
  );
}
