import React, { useState, useEffect } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "./lunch-LaunchPicker.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function LaunchPicker() {
  const [lunch, setLunch] = useState("1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12");
  let len = lunch.split("\n").length;
  //get default data from github raw data.
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/moved0311/lunch-picker/master/public/lunch_unique"
    )
      .then(res => {
        return res.text();
      })
      .then(data => {
        setLunch(data);
      });
  }, []);

  function handleClick(e) {
    handleReset();
    setTimeout(() => {
      $(".row").removeClass("notransition");
      let rowHeight = $(".row").height();
      let randNumOfDataLen = Math.floor(Math.random() * len);
      console.log(randNumOfDataLen + 1);
      let offset = -rowHeight * randNumOfDataLen;
      $(".row").css("top", offset);
    }, 200);
  }
  function handleReset() {
    $(".row").addClass("notransition");
    $(".row").css("top", "0");
  }
  return (
    <div>
      <CodeMirror
        value={lunch}
        options={{
          lineNumbers: true,
          mode: "text/css",
          styleSelectedText: true
        }}
        onChange={(editor, data, value) => {
          setLunch(value);
        }}
      />
      <Button variant="outline-primary" id="btn" onClick={handleClick}>
        Draw
      </Button>
      <div id="container">
        <div id="selected"></div>
        {lunch.split("\n").map((row, idx) => (
          <p className="row" key={idx}>
            {row}
          </p>
        ))}
      </div>
    </div>
  );
}
