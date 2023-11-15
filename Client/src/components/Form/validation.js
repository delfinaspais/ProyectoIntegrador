const validation = (inputs) => { // (userData)
    
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPass = new RegExp("[0-9]");
    const errors = {};
 
    if (!regexEmail.test (inputs.email)) {
        errors.email = "email invalido"
    }
    if (!inputs.email) {
        errors.email = "el nombre es obligatorio"
    }
    if(inputs.email.length > 35) {
        errors.email = "maximo 35 caracteres "
    }

    // if (!regexPass.test (inputs.email)) {
    //     errors.email = "al menos un numero"
    // }

    if(inputs.email.length < 6 && inputs.email.length > 10 ) {
        errors.email = "entre 6 y 10 caracteres "
    }
console.log(errors, "errors")
    return errors;

}

export default validation;







// const validation = (userData, setErrors, errors) => {
//     if (!userData.username) setErrors ({ ...errors, username: "Usuario vacío" });
//     else {
//         if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username))
//         setErrors({ ...errors, username: "" });
//         else setErrors ({ ...errors, username: "Username inválido" });
//     }

// if (!userData.password) setErrors ({ ...errors, password: "Password vacío" });
//     else {
// !         if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.password))
//         setErrors({ ...errors, password: "" });
//         else setErrors ({ ...errors, email: "Password inválido" });
//     }


// };

// export default validation;