import { useState } from "react";

import homeData from "../../data/home/home-data.js"
import Content from "./Content.jsx";
import Animation from "./Animation.jsx";
import GradientButton from "./GradientButton.jsx";
import BorderButton from "./BorderButton.jsx";
import LinksButton from "./LinksButton.jsx";
import VerticalLine from "./verticalLine.jsx";
function Home() {

    const [data] = useState(homeData);

    return (
        <section id="me" className="flex flex-col-reverse justify-around sm:flex-row items-center min-h-screen gap-4 sm:gap-7 ">

            <VerticalLine />
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
