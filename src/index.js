//START: Get data from JSON file and render to browse
// Get data from JSON file stored in github.com
const request = new XMLHttpRequest();
const jsonContainerinHtml = document.querySelector(".json-container");

request.open("GET", "https://dankore.github.io/gss-2006-json/2006.json", true);

const storeDataInArray = [];

request.onload = () => {
  // Error handling
  if (request.status < 200 && request.status > 400) {
    jsonContainerinHtml.innerHTML =
      "Opps! The server did not honor the request. Please try again later or refresh the page.";
    request.onerror = () => {
      jsonContainerinHtml.innerHTML =
        "Apologies! We connected to the server, but it returned an error. Check your internet connection and refresh the page or try again later.";
    };
  } else {
    // Get JSON data and store in an object
    const data = JSON.parse(request.responseText);

    // sort by name
    data.set.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    storeDataInArray.push(...data.set);

    //Save data to local storage
    localStorage.setItem("items", JSON.stringify(storeDataInArray));
    localStorage.setItem("items2", JSON.stringify(data));
    render(data);
  }
};
request.send();
// Search functionality begins
const findMatches = searchedLetters => {
  return storeDataInArray.filter(item => {
    const regex = new RegExp(searchedLetters, "gi");
    return (
      item.name.match(regex) ||
      item.state.match(regex) ||
      item.dob.match(regex) ||
      item.class.match(regex) ||
      item.occupation.match(regex)
    );
  });
};

//Search functionality ends
function displayMatches() {
  let filteredProfiles = findMatches(input.value);
  render({ set: filteredProfiles });
}
const input = document.querySelector("#search");
input.addEventListener("input", displayMatches);

//Render JSON data to browser
const render = myData => {
  const handleBarTemplate = document.querySelector("#template").innerHTML;

  const compiled = Handlebars.compile(handleBarTemplate);
  const generatedHtml = compiled(myData);
  jsonContainerinHtml.innerHTML = generatedHtml || "hi";
};
//END: Get data from JSON file and render to browser

//START: Calculate days till birthday
// Calculate number of days
Handlebars.registerHelper("calculateUntillBirthDay", dob => {
  const daysIntoYear = date => {
    return (
      (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
        Date.UTC(date.getFullYear(), 0, 0)) /
      24 /
      60 /
      60 /
      1000
    );
  };
  //Get input
  const arr = dob.split(" ");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const arr1 = arr[0];
  const arr2 = parseInt(arr[1], 10);

  const monthStr = months.indexOf(arr1);

  const currentDate = new Date();
  const futureDate = new Date(0, monthStr, arr2);
  const futureDays = daysIntoYear(futureDate);
  const numberOfDaysToDate = daysIntoYear(currentDate);

  const daysRemaining = futureDays - numberOfDaysToDate;

  if (daysRemaining < 0) {
    return daysRemaining + 365 + " days to birthday";
  } else if (daysRemaining === 0) {
    const birthDayIsToday = "Today is birthday 🎂";
    return birthDayIsToday;
  } else {
    const remaining = daysRemaining + " days to birthday";
    return remaining;
  }
});
//ENDS: Calculate days till birthday

// Cancel button
const cancelButton = document.querySelector(".cancel-button");

const emptyInputBoxAndDisplayContainer = e => {
  e.preventDefault();
  input.value = "";
  cancelButton.classList.add("hidden");
  xIcon.style.display = "none";
  displayMatches(" ");
};
cancelButton.addEventListener("click", emptyInputBoxAndDisplayContainer);

// Display cancel button and toggle it
const displayCancelButton = () => {
  if (input.value === "") {
    cancelButton.classList.add("hidden");
    xIcon.style.display = "none";
  } else {
    xIcon.style.display = "block";
    cancelButton.classList.remove("hidden");
    cancelButton.classList.add("block");
  }
};
input.addEventListener("input", displayCancelButton);

// Clear button
const xIcon = document.querySelector(".x-icon");

xIcon.addEventListener("click", () => (xIcon.style.display = "none"));
