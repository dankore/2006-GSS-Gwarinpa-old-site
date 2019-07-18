import "./styles.css";

const request = new XMLHttpRequest();

request.open("GET", "https://dankore.github.io/gss-2006-json/2006.json", true);

request.onload = () => {
  const data = JSON.parse(request.responseText);
  render(data);
};
request.send();

//Render JSON data to browser
const jsonContainer = document.querySelector(".json-container");
const render = myData => {
  const html = myData.set.map(item => {
    return " " + item.name;
  });
  console.log(myData);
  jsonContainer.innerHTML = html;
};
