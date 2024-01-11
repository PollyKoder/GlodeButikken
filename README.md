
# Navngivings system og kommentarer:
 - alle klasse og mappe navn: camelCase og snake_case (kebab-case i helt spesielle tilfeller hvor koden knekker hvis den ikke bruker denne typen)
 - Husk å legge inn kommentarer: en som en overskrift for hva koden gjør eks= <!-- HEADER STYLING -->, og en for hvem som har kodet <!-- kodet av "Navn" -->



# !NB! - samling fra brnach til Merge:
 - Når man samler til Main fra de forskjellige branchene er det viktig å holde kontroll på om mappe systemene samsvarer eller om det trengs endringer, slik at alle linkene er funksjonable. 
 - Husk å redigere styling av tekst/link-tekst button i landing page html.
 - Fix splash bilde margin og height(slik at det ser mindre strekt ut)!!!!!
 - imageanimation skal flyttes over i produkter, lurt å finne ut før det flyttes om det skal plasseres ved hver enkelt produkt eller om det skal legges i produkt mappen generelt.
 - Legg til klassenavn til elementer som er stylet uten klasse. Polly fix (eks, elemeneter under .infoText trenger classe!)

- Har lagt inn styling av header og footer i HandleKurv mappen, som en midlertidig visning slik at det er lett å legge in template koden av handlekurven.



# js fra første utgave av landing page:

document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    let form = document.querySelector('form');

    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the values from the form fields
        let rating = document.getElementById('yourInput').value;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;

        // Log the values to the console
        console.log("Din vudering: " + rating);
        console.log("Navn: " + name);
        console.log("E-post: " + email);

        // You can also send this data to a server using AJAX if needed

        // Reset the form if necessary
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let quantityInput = document.getElementById('quantity');
    let form = document.getElementById('cartForm');

    // Add event listener for changes in quantity
    quantityInput.addEventListener('input', function () {
        // You can perform actions here, e.g., update total price
        updateTotalPrice();
    });

    // Function to update total price (replace this with your logic)
    function updateTotalPrice() {
        // Example: Get quantity value and calculate total price
        let quantity = parseInt(quantityInput.value);
        let unitPrice = 10; // Replace with your actual unit price
        let totalPrice = quantity * unitPrice;

        // Display or use the total price as needed
        console.log('Total Price: $' + totalPrice);
    }

    // Add other event listeners or functions as needed

    // Prevent the default form submission for demonstration purposes
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Perform your form processing logic here
        console.log('Form submitted!');
    });
});



# css fra første landing page:

.btn {
    border-radius: 4px;
    background-color: #fb5607;
    border: none;
  color: white;
  text-align: center;
  font-size: 32px;
  padding: 16px;
  width: 220px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 36px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 7);
}

.btn {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    border-radius: 25px;
}

.btn:after {
    content: ">>";
    position: absolute;
    opacity: 0;
    top: 14px;
    right: -20px;
    transition: 0.5s;
}

.btn:hover {
   padding-right: 24px;
   padding-left: 8px;
}

.btn:hover:after {
    opacity: 1;
    right: 10px;
}
.slide {
    position: absolute;
    display: block;
    top: 2em;
    width: 60%;
    font-size: 2em;
  
    animation-duration: 20s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  
  .slide {
      animation-name: anim-1;
      animation-name: anim-2;
      animation-name: anim-3;
  }
  
  @keyframes anim-1 {
      0%, 8.3% { left: -100%; opacity: 0; }
      8.3%,25% { left: 25%; opacity: 1; }
      33.33%, 100% { left: 110%; opacity: 0;}
  }
  
  @keyframes anim-2 {
      0%, 33.33% { left: -100%; opacity: 0; }
      41.63%, 58.29% { left: 25%; opacity: 1; }
      66.66%, 100% { left: 110%; opacity: 0;}
  }
  
  @keyframes anim-1 {
      0%, 66.66% { left: -100%; opacity: 0; }
      74.96%, 91.62% { left: 25%; opacity: 1; }
      100% { left: 110%; opacity: 0;}
  }