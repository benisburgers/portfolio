


      let brightness = [];

      //randomColor function is taken from http://www.devcurry.com/2010/08/generate-random-colors-using-javascript.html //
      function randomRgb(value) {

      col =  "hsl("
      + randomColor(360)  + ","
      + randomColor(100)  + "%,"
      + 100 * value  + "%)";
      }

      function randomColor(num) {
        return Math.ceil(Math.random() * num);
      }

      function resetColorOfBoxes() {
        boxes = document.querySelectorAll('.etch-a-sketch div');
        boxes.forEach(box => box.style.backgroundColor = "white");
      }

      function resetBrightness() {
        brightness.forEach(brightness[i] = 1);
      }

      function promptEntry() {

        let userInput = prompt("How many rows would you like?", "Enter a number less than 30");

        if (isNaN(userInput) || userInput > 30 || userInput != Math.floor(userInput)) {
          alert("That's not a valid entry. Try again");
          promptEntry();
        }

        else {
          createGrid(userInput);
        }
      }

      function createGrid(numberOfRows) {

        resetColorOfBoxes();

        let gridTemplateColumns = 'repeat('+numberOfRows+', 1fr)'

        var container = document.getElementById("container");
        container.style.gridTemplateColumns = gridTemplateColumns;
        container.style.gridTemplateRows = gridTemplateColumns;


        let i = 0;
        let numberOfBoxes = numberOfRows**2;


        /*Create boxes*/
        for (i; i < numberOfBoxes ; i++) {
          brightness[i+1] = 1;
          console.log(brightness);

          var div = document.createElement("div");
          div.classList.add(i+1);
          document.getElementById("container").appendChild(div);

          div.addEventListener("mouseenter", function () {
            var className = this.className;
            brightness[className] = brightness[className] - 0.1;
            console.log(brightness[className]);
            randomRgb(brightness[className]);
            this.style.backgroundColor = col;
          });
        }
      }

      let btn = document.getElementById("start")
      btn.addEventListener("click", promptEntry)
