import React from "react";
import styles from "../About/About.module.css"

const About = () => {
    return (
        <div className= {styles.content} >
            <h1>Rick & Morty Api by Delfina</h1>

            <h2>This is my first integration project in which I apply the basic knowledge of programming such as: 
                <br></br>                
                a Login form with validations, build a Home Page view where cards brought from an external API are displayed 
                and access a detail of it, select favorites and save them in the database, filter them, among other functionalities.
                <br></br>       
                Principal technologies used:
                <br></br>       
                Pure CSS styles
                <br></br>       
                Javascript
                <br></br>       
                React, Redux, Node.js, Express, PostreSQL, Sequelize</h2>
        </div>
    )
}

export default About;




// CLASS C
// import React from "react";

// class About extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render () {
        
//         return (
//             <>
//             <h1> ESTE ES EL COMPONENTE ABOUT </h1>
//             </>
//         );
//     }
   
// }
// export default About;


