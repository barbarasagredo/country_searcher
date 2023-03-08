import "./style.css";
import { showCountry } from "./clicker.js";

document.querySelector("#app").innerHTML = `
    <div class="container">
    <div class="fieldset fieldset-box" id="searcher">
      <h2>Are you looking for some country?</h2>
      <select id="selectedCountry">
        <option value="options">Select a country...</option>
      </select>
      <button
        type="button"
        id="selected"
      >
        SEARCH
      </button>
    </div>
    <div id="result"> </div>
    <footer>
      © Barbara Sagredo C <br />
      2021
    </footer>

  </div>
`;

showCountry(document);

fetch("https://restcountries.com/v2/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((response) => {
      // console.log(response);
      let newOption = document.createElement("option");
      newOption.text = response.name;
      newOption.value = JSON.stringify({
        name: response.name,
        region: response.region,
        capital: response.capital,
        flag: response.flag,
      });
      selectedCountry.appendChild(newOption);
    });
  });
