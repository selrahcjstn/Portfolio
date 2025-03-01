import { useState } from 'react';
import WCanIDoData from '../../data/skills/what-can-i-do-data'
function WCanIDo() {
    const [data] = useState(WCanIDoData);

    return (
        <div className="space-y-4 p-6 rounded-[10px]">
            <div className='bg-gradient-to-r from-[#35334b] via-[#202033] to-[#101013] rounded-[10px] w-fit p-4 sm:px-6 max-w-[720px] whitespace-normal break-words'>
                <h1 className="text-[26px] font-bold tracking-wide text-white">What Can I Do?</h1>
                <p className='text-[#d1d1d1] leading-[1.6] text-sm sm:text-base'>
                    I offer seamless digital experiences, scalable applications, and optimized hardware solutions focused on efficiency and innovation.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.map((items, index) => (
                    <div key={index} className="bg-[#363450]/50 p-6 rounded-[10px] space-y-2 border-b-[#9389fe] border-b-4">
                        <items.logo className="text-[50px] text-[#9389fe]" />
                        <h1 className="font-semibold text-[18px]">{items.title}</h1>
                        <p className="text-[#e6e6e6] text-[14px] leading-relaxed ">{items.description}</p>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default WCanIDo;
