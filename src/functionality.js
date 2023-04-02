// eslint-disable-next-line no-unused-vars
function getResponse() {
  fetch('https://backend-project-vzn7.onrender.com/')
    .then((response) => response.json())
    .then((data) => {
      // // create a new div element
      // // eslint-disable-next-line no-undef
      // const newDiv = document.createElement('div');

      // // add data to the div
      // newDiv.innerHTML = data;

      // // append the div to the body
      // // eslint-disable-next-line no-undef
      // document.body.appendChild(newDiv);
      // eslint-disable-next-line no-undef
      document.getElementById('tempdiv').innerHTML = data;
    })
    .catch((error) => console.error(error));
}
