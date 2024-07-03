document.addEventListener("DOMContentLoaded", () => {
  const url = new URL("https://nameday.abalin.net/api/V1/today");

  const params = {
    country: "pl",
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  fetch(url, {
    method: "POST",
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      let nameday = data.nameday.pl;
      const namedayElement = document.getElementById("nameday");
      if (data && nameday) {
        namedayElement.innerHTML = `Happy Nameday, ${nameday}!`;
      } else {
        namedayElement.innerHTML = "No nameday information available.";
      }
    })
    .catch((error) => {
      console.error("Error fetching nameday data:", error);
      const namedayElement = document.getElementById("nameday");
      namedayElement.innerHTML = "Failed to fetch nameday data.";
    });
});
