const validation = (inputs) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPass = /\d/; // Al menos un número en la contraseña
    const errors = {};

    if (!regexEmail.test(inputs.email)) {
        errors.email = "Email invalido";
    }

    if (!inputs.email) {
        errors.email = "El email es obligatorio";
    }

    if (inputs.email.length > 35) {
        errors.email = "Máximo 35 caracteres";
    }

    if (!regexPass.test(inputs.password)) {
        errors.password = "Al menos un número";
    }

    if (inputs.password.length < 6 || inputs.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }

    return errors;
};

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