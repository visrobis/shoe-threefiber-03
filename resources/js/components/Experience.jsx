import {
    MeshReflectorMaterial,
    OrbitControls,
    PresentationControls,
    Stage,
} from "@react-three/drei";
import React, { useContext } from "react";
import { Shoe } from "./Shoe";
import { Canvas } from "@react-three/fiber";
import { ShoeContext } from "../context/ShoeContextProvider";

const Experience = () => {
    const {
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
    } = useContext(ShoeContext);
    return (
        <section className="flex justify-center items-center bg-[#5aa999] h-screen w-screen font-mono">
            {/* Card */}
            <div className="relative w-[800px] h-[600px] bg-[#61c8b2] p-7 rounded-2xl shadow-zinc-950/30 shadow-lg space-y-5">
                <div className=" bg-zinc-100 h-[450px] w-full ">
                    <Canvas>
                        <PresentationControls
                            speed={1}
                            global
                            zoom={0.6}
                            polar={[-0.1, Math.PI / 4]}
                        >
                            <Stage
                                environment={"city"}
                                intensity={0.6}
                                contactShadow={true}
                                shadows={true}
                            >
                                <OrbitControls />
                                <Shoe />
                            </Stage>
                        </PresentationControls>
                    </Canvas>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 text-zinc-800/80 ">
                    <div>
                        <h3 className="text-xl font-bold">Menu</h3>
                    </div>
                    <div className="flex gap-2 text-center">
                        <div className="flex flex-col text-center h-14 w-14 rounded-full">
                            <input
                                className="w-full h-full rounded-full"
                                type="color"
                                name="mesh"
                                onChange={(e) => setMesh(e.target.value)}
                            />
                            <label htmlFor="mesh">Mesh</label>
                        </div>

                        <div className="flex flex-col text-center h-14 w-14 rounded-full">
                            <input
                                className="w-full h-full rounded-full"
                                type="color"
                                name="soul"
                                onChange={(e) => setSole(e.target.value)}
                            />
                            <label htmlFor="soul">Soul</label>
                        </div>

                        <div className="flex flex-col text-center h-14 w-14 rounded-full">
                            <input
                                className="w-full h-full rounded-full"
                                type="color"
                                name="laces"
                                onChange={(e) => setLaces(e.target.value)}
                            />
                            <label htmlFor="laces">Laces</label>
                        </div>

                        <div className="flex flex-col text-center h-14 w-14 rounded-full">
                            <input
                                className="w-full h-full rounded-full"
                                type="color"
                                name="caps"
                                onChange={(e) => setCaps(e.target.value)}
                            />
                            <label htmlFor="caps">Caps</label>
                        </div>

                        <div className="flex flex-col text-center h-14 w-14 rounded-full">
                            <input
                                className="w-full h-full rounded-full"
                                type="color"
                                name="inner"
                                onChange={(e) => setInner(e.target.value)}
                            />
                            <label htmlFor="inner">Inner</label>
                        </div>

                        <div className="flex flex-col text-center h-14 w-14 rounded-full">
                            <input
                                className="w-full h-full rounded-full"
                                type="color"
                                name="band"
                                onChange={(e) => setBand(e.target.value)}
                            />
                            <label htmlFor="band">Band</label>
                        </div>

                        <div className="flex flex-col text-center h-14 w-14 rounded-full">
                            <input
                                className="w-full h-full rounded-full"
                                type="color"
                                name="patch"
                                onChange={(e) => setPatch(e.target.value)}
                            />
                            <label htmlFor="patch">Patch</label>
                        </div>
                        <div className="flex flex-col text-center h-14 w-14 rounded-full">
                            <input
                                className="w-full h-full rounded-full"
                                type="color"
                                name="stripe"
                                onChange={(e) => setStripes(e.target.value)}
                            />
                            <label htmlFor="stripe">Stripe</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Card */}
        </section>
    );
};

export default Experience;
