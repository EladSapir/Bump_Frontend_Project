console.log('ELADELADELADELAD');
fetch('https://backend-project-vzn7.onrender.com/')
  .then((response) => {
    console.log('SUCCEDDED ');
    console.log(response);
  })
  .catch((error) => {
    console.log('ERROR');
    console.log(error);
  });
