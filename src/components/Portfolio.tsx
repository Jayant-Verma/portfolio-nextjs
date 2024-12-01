'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import project from '../assets/project.jpg';
import project1 from '../assets/proj1.jpg';

const projects = [
    {
        title: 'Project 1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        devStack: ['React', 'Next.js', 'Tailwind CSS'],
        link: 'https://github.com',
        git: 'https://github.com',
        src: project
    },
    {
        title: 'Project 2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        devStack: ['React', 'Next.js', 'Tailwind CSS'],
        link: 'https://github.com',
        git: 'https://github.com',
        src: project1
    },
    {
        title: 'Project 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        devStack: ['React', 'Next.js', 'Tailwind CSS'],
        link: 'https://github.com',
        git: 'https://github.com',
        src: project
    },
]

const Portfolio = () => {
    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52' id='portfolio'>
            
            <h1 className='text-white text-6xl max-w-[320px] mx-auto mt-40 font-semibold my-12'>
                Selected <span className='text-orange-400'>Projects</span>
            </h1>

            <div className='px-6 md:p-0 max-w-[1000px] mx-auto space-y-24'>
                {projects.map((project, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 75 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row ' : 'md:flex-row-reverse gap-12'}`}
                    >
                        <div className='space-y-2 max-w-[550px]'>
                            <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                            <h2 className='text-4xl'>{project.title}</h2>
                            <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                            <p className='text-xl text-orange-400 font-semibold'>{project.devStack}</p>
                            <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                <a href={project.link} className='mr-6' target='_blank' rel="noreferrer">Live</a>
                                <a href={project.git} target='_blank' rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Image src={project.src} alt={project.title} className='h-[350px] w-[500px] object-cover border rounded border-gray-700' />
                        </div>
                    </motion.div>
                ))}
            </div>
        
        </div>
    )
}

export default Portfolio