import React from "react";

import "./Livan.css";

import Styles from "./Livan.module.css";

const Livan = () => {
    return (
        <div>
            <br></br>
            <button className="btn1">Btn1</button>
            <button className={Styles.btn2}>Btn2</button>
            <button style={{ color: "orange" }}>Btn3</button>
        </div>
    );
};

export default Livan;
