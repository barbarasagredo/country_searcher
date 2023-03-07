export const showCountry = (document) => {
  let click = document.querySelector("#selected");
  click.addEventListener("click", () => {
    let dataSelected = document.getElementById("selectedCountry");

    if (dataSelected.value !== "options") getDataCountry(document);
  });
};

const getDataCountry = (document) => {
  document.getElementById("searcher").innerHTML = `  
  <h2>Nombre de país </h2>
  <ul>
    <li>Capital: hola</li>
    <li>Region: hola</li>
    <li>Language:hola</li>
  </ul>
  <button type="button" class="btn" id="goBack">BACK</button>
  `;

  let goBackButton = document.getElementById("goBack");
  goBackButton.addEventListener("click", backHome); 
  function backHome() {
    window.location.reload();
  }
};
