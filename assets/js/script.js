const select = document.getElementById("select");
const submit = document.getElementById("submit");

var locApi = "https://www.loc.gov/?fo=json"
// var apiUrl = "https://www.loc.gov/" + format + "/?q=" + "&fo=json";

select.addEventListener("change", function handleChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    formatType = event.target.value;
});

submit.addEventListener("click", function handleClick(event) {
    event.preventDefault();
    console.log("clicked");
    getSearchProps(formatType);
});

fetch(locApi)
    .then(function (response) {
        console.log(response.status)
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });