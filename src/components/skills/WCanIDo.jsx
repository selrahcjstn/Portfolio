import { useState } from 'react';
import WCanIDoData from '../../data/skills/what-can-i-do-data'
function WCanIDo() {
    const [data] = useState(WCanIDoData);

    return (
        <div className="space-y-4">
            <h1 className="text-[26px]">What Can I Do?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.map((items, index) => (
                    <div key={index} className="bg-[#363450]/50 p-6 rounded-[10px] space-y-3 ">
                        <items.logo className="text-[50px] text-[#9389fe]" />
                        <h1 className="font-semibold text-[18px]">{items.title}</h1>
                        <p className="text-[#e6e6e6]  leading-relaxed">{items.description}</p>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default WCanIDo;
