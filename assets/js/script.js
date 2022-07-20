const select = document.getElementById("select");
const submit = document.getElementById("submit");
var formatType = "";

var getSearchProps = function (format) {
  const input = document.getElementById("input");
  console.log(input.value);
  const q = input.value;
  var apiUrl =
    "https://www.loc.gov/" +
    format +
    "/?q=" +
    encodeURIComponent(q) +
    "&fo=json";
  console.log(apiUrl);
};

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
