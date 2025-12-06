window.onload = function() {
    const lookupBtn = document.getElementById("lookup");
    const lookupCitiesBtn = document.getElementById("lookup-cities");
    const resultDiv = document.getElementById("result");
    const countryInput = document.getElementById("country");

    lookupBtn.addEventListener("click", () => {
        const country = countryInput.value.trim();

        fetch(`world.php?country=${country}`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                resultDiv.innerHTML = "Error fetching country data.";
                console.error(error);
            });
    });

    lookupCitiesBtn.addEventListener("click", () => {
        const country = countryInput.value.trim();  

        fetch(`world.php?country=${country}&lookup=cities`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                resultDiv.innerHTML = "Error fetching city data.";
                console.error(error);
            });
    });
};
