fetch("https://jsonplaceholder.typicode.com/posts/1/comments") //local.. // or https://www.thecocktaildb.com/api/json/v1/1/random.php
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);

    })
    .catch((error) => console.error("FETCH ERROR:", error));



// 1. if password and email both are valid then "passed" string will 
// stored in passCheck and emailCheck. if not passed the else statement.
// 2. finally both conditions are true (password and email check) then 
// i have two variables with the values of "passed"