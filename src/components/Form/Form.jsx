import style from "./Form.module.css"
import { useState } from "react";
// import validation from "./Form/validation";

const Form = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData ({ ...userData, [property]: value });
        // validation ({ ...userData, [property]: value }, setErrors, errors);
        
    }


  return (
        <form className={style.container}>
        <div>
            <label htmlFor="username">E-mail: </label>
            <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={errors.email ? style.error : style.success}
            >
            </input>
            <span>{errors.email}</span>
        </div>

        <div>
        <label htmlFor="password">Password: </label>
            <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={errors.email ? style.error : style.success}
            />
            <span>{errors.password}</span>
        </div>

        <button type="submit">Submit</button>

    </form>
    )
}

export default Form;