import React, { useContext } from "react";
import Experience from "../components/Experience";
import { ShoeContextProvider } from "../context/ShoeContextProvider";

const Index = () => {
    return (
        <>
            <ShoeContextProvider>
                <Experience />
            </ShoeContextProvider>
        </>
    );
};

export default Index;
