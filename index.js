// Add your code here
// const userData ={
//     name: "Darrin",
//     email: "DarrinB@gmail.com",
// };
//     const options ={
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify(userData)
//     };

//     fetch("http://localhost:3000/users", userObj)
function submitData(userName,userEmail){
    
const userData ={
            name: userName,
            email: userEmail,
        };

    const options ={
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(userData)


}
return fetch("http://localhost:3000/users", options)
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp.id)
        document.querySelector('body').append(resp.id)
    })
    .catch(function (error) {
        alert("Unauthorized Access");
        console.log(error.message);
        document.querySelector('body').append(error.message)
      });
    

    

}