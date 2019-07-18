// import Handlebars from "handlebars";

const request = new XMLHttpRequest();

request.open("GET", "https://dankore.github.io/gss-2006-json/2006.json");

request.onload = () => {
  const data = JSON.parse(request.responseText);

  // sort by name
  const sorted = data.set.sort(function(a, b) {
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
  console.log(sorted);
  render(data);
};
request.send();

//Render JSON data to browser
const render = myData => {
  const handleBarTemplate = document.querySelector("#template").innerHTML;

  const compiled = Handlebars.compile(handleBarTemplate);
  const generatedHtml = compiled(myData);
  const jsonContainerinHtml = document.querySelector(".json-container");

  jsonContainerinHtml.innerHTML = generatedHtml;
};

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
    return "Today is birthday 🎂";
  } else {
    return daysRemaining + " days to birthday";
  }
});
