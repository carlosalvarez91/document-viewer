import React, { useState } from "react";

const HeaderContext = React.createContext();

function HeaderProvider(props) {
    const [header, setHeader] =  useState(null);

    return (
        <HeaderContext.Provider value={{ header, setHeader }}>
            {props.children}
        </HeaderContext.Provider>
    );
}

export { HeaderContext, HeaderProvider };
