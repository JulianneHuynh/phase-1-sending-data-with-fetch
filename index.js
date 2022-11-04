// // Add your code here

// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify(formData),
// };
// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//     .then (function (object){
//       console.log(object);
//     })
//  .catch(function (error) {
//   alert("Bad things! Ragnarők!");
//   console.log(error.message);
// });
  // configurationObject contains 3 core components
  // - std POST, -request HTTP verb, -headers,-body

function submitData (name, email){
  const configurationObject = {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({name,email}),
  };
  return fetch ("http://localhost:3000/users", configurationObject)
    .then (function (response){
      return response.json();
    })
    .then (function (object){
      document.body.innerHTML = object["id"]
    })
    .catch(function (error) {
      alert("What went wrong");
      document.body.innerHTML = error.message;
      });
    }

    submitData("Julianne","abc@gmail.com"); 

 