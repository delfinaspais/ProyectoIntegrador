import style from "./Form.module.css"
import { useState } from "react";
import validation from "./validation.js";


const Form = () => {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const {name, value}= event.target
        setUserData ({...userData, [name]: value });
        
        setErrors(
            validation ({...userData, [name]: value})
    )
        
    }


  return (
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

   <section>
        <div className={style.formbox}>
                    <form>
                    <h2>Login</h2>
                    <div className={style.inputbox}>
                    <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
                        <label for="">Email</label>
                        <p className={style.errors}>{errors.username && errors.username}</p>
                    </div>
                    <div className={style.inputbox}>
                        <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
                        <label for="">Password</label>
                        <p className={style.errors}>{errors.password && errors.password}</p>
                    </div>
                                         
                    <button className={style.loginbutton}>Log in</button>
                    
                </form>
            </div>
        
        
    </section>
    )
    }
export default Form;