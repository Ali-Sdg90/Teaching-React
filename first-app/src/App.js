import React from "react";
import Ali from "./Ali";

import image from "./Love_Heart_SVG.svg.png";

import Main from "./Main";

const App = () => {
    return (
        <div>
            <h1>Hello</h1>
            <button>Aloha</button>
            <p>{20 + 10}</p>
            <p>{Math.random() * 1000}</p>
            <p>Hello</p>
            <Main></Main>
            <Ali></Ali>
            {/* <img src={image} alt="love"></img> */}
        </div>
    );
};

export default App;
