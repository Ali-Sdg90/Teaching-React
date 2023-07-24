import React, { useState } from "react";

const UseState = () => {
    const [name, setName] = useState("Hanieh");

    const [livan, setLivan] = useState(200);

    const changeName = () => {
        setLivan(4777);
    };

    return (
        <div>
            <button onClick={changeName}> {livan}</button>
        </div>
    );
};

export default UseState;
