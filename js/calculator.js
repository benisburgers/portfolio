
  let digitsArray = [];
  let digitsString = "";
  let displayOutput = "";
  let pressedButtonsArray = [];
  let pressedButtonsString = "";
  let visibleArray = [];
  let visibleText = "";
  let result = "";
  let displayTextWidth;
  let numberOfCharacters;
  let pixelsPerCharacter;
  let numberOfVisibleCharacters;
  let outerDivWidth;

  window.onload = function() {
    outerDivWidth = document.getElementById("outerDiv").offsetWidth - 20;
  };

  window.onresize = function() {
    outerDivWidth = document.getElementById("outerDiv").offsetWidth - 20;
  };


    document.onkeypress = function(event) {
    let buttonValue = event.which || event.keyCode;
    let buttonCharacter = String.fromCharCode(buttonValue);
    if (/[0123456789]/.test(buttonCharacter)) {
      clickNumberButton(buttonCharacter)
    }
    if (buttonCharacter == "+") {
      clickOperationButton('+','+');
    }
    if (buttonCharacter == "-") {
      clickOperationButton('-','-');
    }
    if (buttonCharacter == "*") {
      clickOperationButton('*','×')
    }
    if (buttonCharacter == "/") {
      clickOperationButton('/','÷');
    };
    if (buttonCharacter == "=") {
      equate();
    }
  };


  function limitDisplayDigits() {
    outerDivWidth = document.getElementById("outerDiv").offsetWidth - 20;

    // Put in here, so that it's executed everytime a button is pressed //
    displayTextWidth = document.getElementById("displayText").offsetWidth;
    numberOfCharacters = visibleText.length;
    pixelsPerCharacter = displayTextWidth/numberOfCharacters;
    numberOfVisibleCharacters = Math.floor(outerDivWidth / pixelsPerCharacter);

    displayText = visibleText.slice(-numberOfVisibleCharacters)
    document.getElementById("displayText").innerHTML = displayText;
  }


  function clickNumberButton(button) {
    //Equation has happened//
    if (pressedButtonsArray[pressedButtonsArray.length-1] == "=") {
      pressedButtonsArray = [];
      pressedButtonsArray.push(button);
      pressedButtonsString = pressedButtonsArray.join("");

      visibleArray = [];
      visibleArray.push(button);
      visibleText = visibleArray.join("");
      document.getElementById("displayText").innerHTML = visibleText;
      limitDisplayDigits();
    }
    //Equation hasn't happened//
    else {
      pressedButtonsArray.push(button);
      pressedButtonsString = pressedButtonsArray.join("");

      visibleArray.push(button);
      visibleText = visibleArray.join("");
      document.getElementById("displayText").innerHTML = visibleText;
      limitDisplayDigits();
    }
    console.log("PBA: " + pressedButtonsArray);
    console.log("VA: " + visibleArray);
    console.log("PBS: " + pressedButtonsString);
    console.log("VT: " + visibleText);
  }

  function clickOperationButton(button, symbol) {
    if (pressedButtonsArray.length > 0 && (/[0123456789=]/.test(pressedButtonsArray[pressedButtonsArray.length-1])) || (button == "-" && pressedButtonsArray[pressedButtonsArray.length-1] !== "-")) {
      if (pressedButtonsArray[pressedButtonsArray.length-1] == "=") {
        pressedButtonsArray = [];
        pressedButtonsArray.push(result, button);
        pressedButtonsString = pressedButtonsArray.join("");

        visibleArray = [];
        visibleArray.push(result, symbol);
        visibleText = visibleArray.join("");
        document.getElementById("displayText").innerHTML = visibleText;
        limitDisplayDigits();
      }
      else {
        pressedButtonsArray.push(button);
        pressedButtonsString = pressedButtonsArray.join("");

        visibleArray.push(symbol);
        visibleText = visibleArray.join("");
        document.getElementById("displayText").innerHTML = visibleText;
        limitDisplayDigits();
      }
    }
    console.log("PBA: " + pressedButtonsArray);
    console.log("VA: " + visibleArray);
    console.log("PBS: " + pressedButtonsString);
    console.log("VT: " + visibleText);
  }

  function equate() {
    if (pressedButtonsArray.length > 0 && (/[0123456789]/.test(pressedButtonsArray[pressedButtonsArray.length-1]))) {
      pressedButtonsArray.push("=");
      result = eval(pressedButtonsString);
      pressedButtonsString = result.toString();

      visibleArray.push("=");
      visibleText = result.toString();
      document.getElementById("displayText").innerHTML = visibleText;
      limitDisplayDigits();
    }
    console.log("PBA: " + pressedButtonsArray);
    console.log("VA: " + visibleArray);
    console.log("PBS: " + pressedButtonsString);
    console.log("VT: " + visibleText);
  }

  function del() {
    if (pressedButtonsArray[pressedButtonsArray.length-1] == "=") {
      pressedButtonsArray = [];
      pressedButtonsString = "";

      visibleArray = [];
      visibleText = "";
      result = "";
      document.getElementById("displayText").innerHTML = "";
      limitDisplayDigits();
    }
    else {
      pressedButtonsArray.splice(-1,1);
      pressedButtonsString = pressedButtonsArray.join("");

      visibleArray.splice(-1,1)
      visibleText = visibleArray.join("");
      document.getElementById("displayText").innerHTML = visibleText;
      limitDisplayDigits();
    }
    console.log("PBA: " + pressedButtonsArray);
    console.log("VA: " + visibleArray);
    console.log("PBS: " + pressedButtonsString);
    console.log("VT: " + visibleText);
  }

  function cancel() {
    pressedButtonsArray = [];
    pressedButtonsString = "";
    visibleArray = [];
    visibleText = "";
    result = "";
    limitDisplayDigits();
    document.getElementById("displayText").innerHTML = "";
    console.log("PBA: " + pressedButtonsArray);
    console.log("VA: " + visibleArray);
    console.log("PBS: " + pressedButtonsString);
    console.log("VT: " + visibleText);
  }
