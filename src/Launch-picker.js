import React, { useState, useEffect } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "./lunch-LaunchPicker.css";

export default function LaunchPicker() {
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/moved0311/lunch-picker/master/public/lunch_unique"
    )
      .then(res => {
        return res.text();
      })
      .then(data => {
        console.log(data);
      });
  });
  return (
    <div>
      <CodeMirror
        value="<h1>I ♥ react-codemirror2</h1>"
        options={{
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
}
