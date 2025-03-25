document.addEventListener("DOMContentLoaded", function () {
    const umbrella1 = document.getElementById("umbrella1");
    const umbrella2 = document.getElementById("umbrella2");
    const umbrella3 = document.getElementById("umbrella3");
    const rainEffect = document.getElementById("rain");
    const popupMessage = document.getElementById("popup-message");
    const happyCat = document.getElementById("happy-cat");
    const normalCat = document.getElementById("normal-cat");
    const madCat = document.getElementById("mad-cat");
    const raindropContainer = document.getElementById("raindrop-container");

    // Assigning correct and incorrect umbrellas
    const correctUmbrella = 2; // Umbrella 2 is correct!

    function revealUmbrella(umbrella, isCorrect, id) {
        if (isCorrect == true) {
            umbrella.src = "Images/Umbrella_Colored.png"; // Correct umbrella image
            happyCat.style.display = "block"; // Show happy cat
            normalCat.style.display = "none"; // hide normal cat
            madCat.style.display = "none"; // hide mad cat
            popupMessage.style.display = "flex"; // Show popup message
            popupMessage.innerHTML = "<h2>Correct choice! Now the kitten is HAPPY and DRY!</h2>";
        } else if(isCorrect == false) {
            if(id === "ummbrella1"){
                umbrella.src = "Images/Broken_Unbrella_2.png"; 
            }
            else{
                umbrella.src = "Images/Broken Umbrella.png"; 
            }
            happyCat.style.display = "none"; // hide happy cat
            normalCat.style.display = "none"; // hide normal cat
            madCat.style.display = "block"; // show mad cat
            popupMessage.style.display = "flex"; // Show popup message
            popupMessage.innerHTML = "<h2>WRONG! The kitty is DEAD!</h2>";
            createRaindrops();
        }
    }

    function resetUmbrella(umbrella) {
        umbrella.src = "Images/Umbrella_Gray Hatched.png"; // Reset to default gray umbrella
        happyCat.style.display = "none"; // hide happy cat
        normalCat.style.display = "block"; // show normal cat
        madCat.style.display = "none"; // hide mad cat
        raindropContainer.innerHTML = ""; // Clear existing raindrops
        popupMessage.style.display = "none";

    }

    function createRaindrops() {
        raindropContainer.innerHTML = ""; // Clear existing raindrops
        let raindrop = document.createElement("img");
        raindrop.src = "Images/Rain Drops.png";
        raindrop.classList.add("raindrop");
        raindropContainer.appendChild(raindrop);
    }

    umbrella1.addEventListener("click", () => revealUmbrella(umbrella1, false, "ummbrella1"));
    umbrella2.addEventListener("click", () => revealUmbrella(umbrella2, true, "ummbrella2"));
    umbrella3.addEventListener("click", () => revealUmbrella(umbrella3, false, "ummbrella3"));

    umbrella1.addEventListener("mouseleave", () => resetUmbrella(umbrella1));
    umbrella2.addEventListener("mouseleave", () => resetUmbrella(umbrella2));
    umbrella3.addEventListener("mouseleave", () => resetUmbrella(umbrella3));
});