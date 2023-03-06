import "./style.css";
import showCountry from "./clicker";

fetch("https://restcountries.com/v2/all")
  .then((res) => res.json())
  .then((data) => {
    let names = data.map((element) => element.name);

    document.querySelector("#app").innerHTML = `
    <div class="container">
    <form method="get" id="formCountries">
      <fieldset>
        <h2>Are you looking for some country?</h2>
        <select id="selectedCountry" class="searchInput">
          <option value="options">Select a country...</option>
        </select>
        <button
          type="button"
          class="btn"
          id="selected"
          onclick="showCountry()"
        >
          SEARCH
        </button>
      </fieldset>
    </form>
    <span id="result" class="cards"></span>
    <footer class="footer">
      © Barbara Sagredo C <br />
      2021
    </footer>
    <script src="./clicker.js"> </script>
  </div>
`;

    names.forEach((country) => {
      let newOption = document.createElement("option");
      newOption.text = country;
      newOption.value = country;
      selectedCountry.appendChild(newOption);
    });
  });