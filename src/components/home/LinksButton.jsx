import { useState } from "react";
import linksData from "../../data/links.-data.js"
function LinksButton() {
    const [links] = useState(linksData);

    return (
        <div className="flex gap-3 mt-2  lg:gap-6">
            {links.socialMedia.map((link, index) => (
                <a
                    key={index}
                    className="w-9 sm:w-10 h-9 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-[#4d74c0] hover:bg-[#4f4777] transition"
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <link.icon className="text-lg sm:text-xl" />
                </a>
            ))}
        </div>
    )
}

export default LinksButton