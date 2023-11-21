document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 2000);
    function hideLoader() {
        const loader = document.getElementById('loader');
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
    }
    const tableBody = document.querySelector("#countryTable tbody");
    const landlockedCheckbox = document.querySelector("#landlockedCheckbox");
    const notLandlockedCheckbox = document.querySelector(
      "#notLandlockedCheckbox"
    );
    const allCheckbox = document.querySelector("#allCheckbox");
    
    
  
    allCheckbox.addEventListener("change", function () {
      landlockedCheckbox.checked = notLandlockedCheckbox.checked = this.checked;
      fetchCountries();
    });
  
    landlockedCheckbox.addEventListener("change", fetchCountries);
    notLandlockedCheckbox.addEventListener("change", fetchCountries);
    
  
    function fetchCountries() {
        
        
      const url = "https://restcountries.com/v3.1/lang/spanish";
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(JSON.stringify(data));
  
          const filteredData = data.filter((country) => {
            const landlockedValue = String(country?.landlocked)?.toLowerCase();
            if (allCheckbox.checked) {
                return true; 
              } else if (landlockedCheckbox.checked) {
                return isLandlocked(landlockedValue);
              } else if (notLandlockedCheckbox.checked) {
                return !isLandlocked(landlockedValue);
              } else {
                return true; 
              }
            });
          
  
          console.log(JSON.stringify(filteredData));
  
          renderTable(filteredData);
         
        })
        .catch((error) => console.error("Error fetching data:", error));
        loader.style.display = "none";
    }
  
    function isLandlocked(landlockedValue) {
      return landlockedValue === 'true';
    }
  
    function renderTable(data) {
      tableBody.innerHTML = "";
  
      data.forEach((country) => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = country.name.common || "-";
        row.insertCell().textContent = country.capital ? country.capital[0] : "-";
        row.insertCell().textContent = country.region || "-";
        row.insertCell().textContent = country.landlocked;
        row.insertCell().textContent = country.borders
          ? country.borders.join(", ")
          : "-";
      });
    }
  
    fetchCountries();
  });
  