import React from "react";
import Ali from "./Ali";
import Form from "./Form";

import image from "./Love_Heart_SVG.svg.png";

import Main from "./Main";

import "./App.css";

import Styles from "./App.module.css";
import Livan from "./Livan";

const Aloha = { color: "red", textAlign: "center" };

const ali = "Reza";

const App = () => {
    return (
        <div>
            <h1 style={{ color: "red", textAlign: "center" }}>Hello</h1>
            <button>Aloha</button>
            <button className="Aloha">Hiiiii</button>
            <button className={ali}>Hiiiii</button>
            <button className={Styles.button}>Modules</button>
            <p>{20 + 10}</p>
            <p>{Math.random() * 1000}</p>
            <p>Hello</p>
            <Main></Main>
            <Ali></Ali>
            {/* <img src={image} alt="RandImg"></img> */}
            <Form></Form>
            <Livan></Livan>
        </div>
    );
};

export default App;
