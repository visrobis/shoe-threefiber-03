import { createContext, useContext, useState } from "react";

export const ShoeContext = createContext();

export const ShoeContextProvider = (props) => {
    const [mesh, setMesh] = useState("");
    const [stripes, setStripes] = useState("");
    const [sole, setSole] = useState("");
    const [laces, setLaces] = useState("");
    const [caps, setCaps] = useState("");
    const [inner, setInner] = useState("");
    const [band, setBand] = useState("");
    const [patch, setPatch] = useState("");

    console.log(mesh, stripes);

    return (
        <ShoeContext.Provider
            value={{
                mesh,
                setMesh,
                stripes,
                setStripes,
                sole,
                setSole,
                laces,
                setLaces,
                caps,
                setCaps,
                inner,
                setInner,
                band,
                setBand,
                patch,
                setPatch,
            }}
        >
            {props.children}
        </ShoeContext.Provider>
    );
};
