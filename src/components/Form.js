import React, { useState } from 'react'

export default function Form() {
  const [text, setText] = useState("");

  // // For update the text on change it
  const onChangeText = (e) => {
    setText(e.target.value);
  }

  // For showing the alert message
  const alertFunction = (newClassName) => {
    if (text.trim() !== "") {
      document.querySelector(".textArea_container").classList.toggle(newClassName);
      document.querySelector(".textArea_container").classList.toggle("hide")
      setTimeout(() => {
        document.querySelector(".textArea_container").classList.toggle("hide")
        document.querySelector(".textArea_container").classList.toggle(newClassName);
      }, 2000);
    }
  }

  // For uppercase
  const convertUpperCase = () => {
    setText(text.toUpperCase().trim());
    alertFunction("upperCase");
  }

  // For Lowercase
  const convertLowerCase = () => {
    setText(text.toLowerCase().trim());
    alertFunction("lowerCase");

  }

  // For Capitalize text
  const convertCapitalizeCase = () => {
    var newText = "";
    let lowerText = text.toLowerCase();
    for (let i = 0; i < lowerText.split(" ").length; i++) {
      let ch = lowerText.split(" ")[i].charAt(0);

      newText = newText + lowerText.split(" ")[i].replace(ch, ch.toUpperCase());
      newText += " ";
    }
    setText(newText.trim());
    alertFunction("capitalizeCase");

  }

  // For Sentence case
  const convertSentenceCase = () => {
    var newText = "";
    let lowerText = text.toLowerCase().trim();
    if (lowerText.charAt(lowerText.length - 1) !== ".") {
      lowerText += ".";
    }
    for (let i = 0; i < (lowerText.split(".").length - 1); i++) {
      let ch = lowerText.split(".")[i].trim().charAt(0);

      newText = newText + lowerText.split(".")[i].replace(ch, ch.toUpperCase());
      if (text.trim() !== "") {
        newText += ".";
      }
    }
    setText(newText.trim());
    alertFunction("sentenceCase");

  }

  // For alternate case
  const convertAlternateCase = () => {
    var newText = "";
    let lowerText = text.toLowerCase();
    for (let i = 0, j = 0; i < lowerText.split("").length; i++, j++) {

      if (j % 2 === 0) {

        let ch = lowerText.split("")[i];
        newText = newText + lowerText.split("")[i].replace(ch, ch.toUpperCase());
      }
      else {
        newText = newText + lowerText.split("")[i];
      }
    }
    setText(newText.trim());
    alertFunction("alternateCase");

  }

  // For Inverse the alternate case
  const convertInverseAlternate = () => {
    var newText = "";
    let lowerText = text.toUpperCase();
    for (let i = 0, j = 0; i < lowerText.split("").length; i++, j++) {

      if (j % 2 === 0) {

        let ch = lowerText.split("")[i];
        newText = newText + lowerText.split("")[i].replace(ch, ch.toLowerCase());
      }
      else {
        newText = newText + lowerText.split("")[i];
      }
    }
    setText(newText.trim());
    alertFunction("inverseAlternateCase");

  }

  // For removing extra spaces the text
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ").trim());
    alertFunction("removeExtraSpaces");
  }

  // For copy the text
  const copyText = () => {
    navigator.clipboard.writeText(text);
    alertFunction("copyText");
  }

  // For clear the textArea
  const clearText = () => {
    setText("");
    alertFunction("clearText");
  }

  let words = text.split(/[ ]+/).join(" ").trim().split(" ").length;
  if (text.length === 0) {
    words = 0;
  }

  let chars = text.replace(/ /g, "").length;

  return (
    <div className='form_container'>
      <div className='form'>
        <div className='textArea_container hide'>
          <textarea className="textArea" value={text} placeholder="Enter your text here" onChange={onChangeText}></textarea>
          <div className='counter'>{words} words and {chars} characters</div>
        </div>
        <button className='upperCase' onClick={convertUpperCase}>UPPERCASE</button>
        <button className='lowerCase' onClick={convertLowerCase}>lowercase</button>
        <button className='capitalizeCase' onClick={convertCapitalizeCase}>Capitalize</button>
        <button className='sentenceCase' onClick={convertSentenceCase}>Sentence case.</button>
        <button className='alternateCase' onClick={convertAlternateCase}>aLtErNaTe cAsE</button>
        <button className='inverseAlternateCase' onClick={convertInverseAlternate}>InVeRsE AlTeRnAtE CaSe</button>
        <button className='removeExtraSpaces' onClick={removeExtraSpaces}>Remove extra spaces</button>
        <button className='copyText' onClick={copyText}>Copy to clipboard</button>
        <button className='clearText' onClick={clearText}>Clear</button>
      </div>
    </div>
  )
}