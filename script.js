
let fullParagraph = document.querySelector(".results");
let input = document.querySelector("input");
let greeting = document.querySelector(".currentUser");
let submit = document.querySelector("button");
submit.onclick = function() {
    let Q1 = document.querySelector(".Question1").value;
    let Q2 = document.querySelector(".Question2").value;
    let result = document.querySelector(".result");
    console.log(Q1);
    console.log(Q2);

    //result.innerHTML = (Q2);//

    if (Q1 <= 2 && Q2 === "Snow White") {
        document.querySelector(".result").innerHTML =  "<p>"+"You drink" + Q1 + "</p>" + "<p>" + "You prefer" + Q2 + "</p>" + "<p>" + "You are an Amethyst Star Unicorn" + "</p>";
            
        
    }

   else if (Q1 <= 3  && Q2 === "Moana") {
        document.querySelector(".result").innerHTML =  "<p>"+"You drink " + Q1 + "</p>" + "<p>" + "You prefer" + Q2 + "</p>" + "<p>" + "Omg you are a Diamond Mint Unicorn." + "</p>";
       
   }
        
            
            
   };