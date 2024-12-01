'use client';

import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';

const skillIcons = [
    { icons: <FaHtml5 size={140} />, label: "HTML" },
    { icons: <FaCss3Alt size={140} />, label: "CSS" },
    { icons: <FaReact size={110} />, label: "React" },
    { icons: <FaJsSquare size={140} />, label: "JavaScript" },
]
const Skills = () => {
    return (
        <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
            <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {skillIcons.map((skill, index) => (
                        <div key={index} className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col items-center justify-between bg-white/10 p-4 rounded-xl'>
                            {skill.icons}
                            <p className='mt-2'>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills