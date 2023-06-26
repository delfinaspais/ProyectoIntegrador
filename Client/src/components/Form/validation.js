const validation = (inputs) => {
    
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPass = new RegExp("[0-9]");
    const errors = {};
 
    if (!regexEmail.test (inputs.username)) {
        errors.username = "email invalido"
    }
    if (!inputs.username) {
        errors.username = "el nombre es obligatorio"
    }
    if(inputs.username.length > 35) {
        errors.username = "maximo 35 caracteres "
    }

    if (!regexPass.test (inputs.username)) {
        errors.password = "al menos un numero"
    }

    if(inputs.username.length < 6 && inputs.username.length > 10 ) {
        errors.username = "entre 6 y 10 caracteres "
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