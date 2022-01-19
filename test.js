
//  Local Storage, Session Storage, Cookies in JS.

function handleSubmit () {
    let userGivenValue = document.getElementById("name").value;
    console.log(userGivenValue);

    localStorage.setItem("name" , userGivenValue);
    sessionStorage.setItem("sessionName", userGivenValue)
}

function handleShow () { 
    const value = localStorage.getItem("name");
    console.log(value);

    localStorage.clear()
}
// {
//     key : value 
// }

// let obj = {
//     name : "John",
//     age : 24, 
//     salary : 34000
// }