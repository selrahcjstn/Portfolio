
function SkillsHeader({ title, desc }) {

    return (
        <div className='bg-gradient-to-r from-[#35334b] via-[#202033] to-[#101013] rounded-[10px] w-fit p-4 sm:px-6 max-w-[720px] whitespace-normal break-words'>
            <h1 className={` text-[26px] font-bold tracking-wide text-white`}>{title}</h1>
            <p className='text-[#d1d1d1] leading-[1.6] text-sm sm:text-base'>
                {desc}
            </p>
        </div>
    );
}

export default SkillsHeader;
