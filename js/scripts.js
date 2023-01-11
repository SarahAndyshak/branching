window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();

      let legal = document.getElementById("voteAble");
      legal.setAttribute("class", "hidden");
      let illegal = document.getElementById("voteNot");
      illegal.setAttribute("class", "hidden");
  
      // we gather the age value
      const age = parseInt(document.querySelector("input#age").value);
  
      // we check if the age is greater than 21.
      if (age > 18) {
        legal.removeAttribute("class");
      } else if (age === 18) {
        window.alert("Welcome to adulthood!")
        legal.removeAttribute("class");
      } else {
        illegal.removeAttribute("class");
      }
    };
  };