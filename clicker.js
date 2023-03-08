export const showCountry = (document) => {
  let click = document.querySelector("#selected");
  click.addEventListener("click", () => {
    let dataSelected = document.getElementById("selectedCountry");

    if (dataSelected.value !== "options") getDataCountry(document);
  });
};

const getDataCountry = (document) => {
  let dataSelected = document.getElementById("selectedCountry");
  let obj = JSON.parse(dataSelected.value);
  document.getElementById("searcher").innerHTML = `
  <div class="fieldset">
  <h2>${obj.name}</h2>
  <img alt="country flag" src="${obj.flag}"/>
  <ul>
    <li>Capital: ${obj.capital}</li>
    <li>Region: ${obj.region}</li>
  </ul>
  <button type="button" id="goBack">BACK</button>
  </div>
  `;

  let goBackButton = document.getElementById("goBack");
  goBackButton.addEventListener("click", backHome);
  function backHome() {
    window.location.reload();
  }
};
