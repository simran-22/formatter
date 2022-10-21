import React, { useState } from "react";
import classNames from "classnames";
import "./Formater.scss";

const Formater = () => {
  const [input, setInput] = useState("");
  const [boldchr, setBoldchr] = useState(false);
  const [itelic, setItelic] = useState(false);
  const [underline, setUnderline] = useState(false);

  function inputHandler(e) {
    setInput(e.target.value);
  }

  function upercaseHandler() {
    setInput(input.toUpperCase());
  }
  function lowercaseHandler() {
    setInput(input.toLowerCase());
  }
  function boldHandler() {
    setBoldchr(!boldchr);
  }
  function italicHandler() {
    setItelic(!itelic);
  }
  function underlineHandle() {
    setUnderline(!underline);
  }
  function capitalHandler() {
    const arr = input.split(" ");
    const newarr = arr.map(function (item) {
      const text = item.toLowerCase();
      const first = item.charAt(0);
      const upper = first.toUpperCase();
      const sliceArray = text.slice(1);
      return upper + sliceArray;
    });
    setInput(newarr.join(" "));
  }

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-sm-12 bg-info p-4">
          <h3 className="text-white">Formater App</h3>
        </div>
        <div className="col-sm-12 d-flex justify-content-center align-items-center">
          <div className="main-wraper">
            <div className="wraper">
              <div className="formater-wraper">
                <textarea className="form-control" onChange={inputHandler} />
                <p
                  className={classNames({
                    bold: boldchr,
                    italic: itelic,
                    underline: underline,
                  })}
                >
                  {input}
                </p>
              </div>
              <div className="allbtns">
                <button onClick={upercaseHandler} className="btn btn-primary">
                  UPPERCASE
                </button>
                <button onClick={lowercaseHandler} className="btn btn-primary">
                  lowercase
                </button>
                <button className="btn btn-primary" onClick={capitalHandler}>
                  Capitalize
                </button>
                <button className="btn btn-primary" onClick={boldHandler}>
                  <b> Bold </b>
                </button>
                <button className="btn btn-primary" onClick={italicHandler}>
                  <i>Italic</i>
                </button>
                <button className="btn btn-primary" onClick={underlineHandle}>
                  <u> Underline </u>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formater;
