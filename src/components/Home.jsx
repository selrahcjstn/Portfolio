import { useState } from "react";

import homeData from "../data/home-data.js"
import Content from "./home/Content.jsx";
import Animation from "./home/Animation.jsx";
import GradientButton from "./home/GradientButton.jsx";
import BorderButton from "./home/BorderButton.jsx";
import LinksButton from "./home/LinksButton.jsx";

function Home() {

    const [data] = useState(homeData);

    return (
        <section id="me" className="h-screen flex sm:h-fit flex-col-reverse justify-around sm:flex-row items-center min-h-screen pt-20  gap-4 sm:gap-7 ">
            <div className="flex-2 flex flex-col gap-4 items-center text-center sm:text-left sm:items-start w-full">
                <Content
                    name={data.name}
                    paragraph={data.paragraph}
                    tagLine={data.tagLine}
                />

                <LinksButton />

                <div className="flex gap-2 lg:gap-4">
                    <GradientButton />
                    <BorderButton />
                </div>
            </div>
            <Animation
                blob={data.blob}
                animation={data.animation}
            />

        </section>
    );
}

export default Home;
