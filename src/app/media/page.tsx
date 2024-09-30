
import React from "react";
import Header from "@/modules/conponents/Header";
import Footer from "@/modules/conponents/Footer";
import Media from "./Media";

const MediaHomePage: React.FC = async () => {
    

    return (
        <>
        <Header title="Media" />
        <Media />
        <Footer />
        </>
    );
};

export default MediaHomePage;