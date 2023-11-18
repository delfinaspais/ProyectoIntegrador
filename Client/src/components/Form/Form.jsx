import style from "./Form.module.css"
import { useState } from "react";
import validation from "./validation.js";
import logoImage from "./RIKIMORT.png";


const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const {name, value}= event.target
        setUserData ({...userData, [name]: value });
        
        setErrors(
            validation ({...userData, [name]: value})
    )
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }


  return (
      
      <section>
        <div className={style.formbox}>
        <img
          src={logoImage} // Reemplaza 'ruta_del_logo.png' con la ruta correcta de tu logo
          alt="Logo"
          className={style.logo}
        />
                    <form onSubmit={handleSubmit}> 
                    <h2>Login</h2>
                    <div className={style.inputbox}>
                    <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
                        <label htmlFor="">Email</label>
                        <p className={style.errors}>{errors.email && errors.email}</p>
                    </div>
                    <div className={style.inputbox}>
                        <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
                        <label htmlFor="">Password</label>
                        <p className={style.errors}>{errors.password && errors.password}</p>
                    </div>
                                         
                    <button className={style.loginbutton}>Log in</button>
                    
                </form>
            </div>
        
        
    </section>
    )
}
export default Form;





//     <div className={style.container}>
//     <form>
//         <label classname={style.labeldi}>Username: </label>
//         <input
//         type="text"
//         name="username"
//         value={userData.username}
//         onChange={handleInputChange}
//         >
//         </input>
//         <p className={style.errors}>{errors.username && errors.username}</p>
    

    
//     <label>Password: </label>
//         <input
//         type="password"
//         name="password"
//         value={userData.password}
//         onChange={handleInputChange}
//         />
//         <p className={style.errors}>{errors.password && errors.password}</p>

//     <button className={style.loginbutton}>Login</button>

// </form>
//     </div>
// )