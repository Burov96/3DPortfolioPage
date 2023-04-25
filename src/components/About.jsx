import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard=({index, title, icon})=> {
  return (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>

        </div>
      </motion.div>
</Tilt>
  )
}

const About = () => {
  return (
<>
<motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>
    Introduction
  </p>
  <h2 className={styles.sectionHeadText}>
Overview
  </h2>
</motion.div>
<motion.p 
variants={fadeIn("", "", 0.1, 1)}
className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
>
Hi there! My name is Teodor Burov, and I am a recent graduate from SoftUni with a focus on Javascript. As a developing programmer with experience in VanillaJS and React, I have a passion for creating sleek, user-friendly web applications that provide value to users.

In addition to my programming skills, I also enjoy creating 3D models and logos that are visually appealing and memorable. I have a deep understanding of Javascript, HTML, and CSS, and I always strive to keep up with the latest technologies and trends in the industry.

Whether you're looking for a skilled programmer to help bring your web application to life or need a creative mind to design your next logo, I would love to work with you. Feel free to browse my portfolio and reach out to me if you have any questions or would like to collaborate on a project.
</motion.p>
<div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service, index) => (
      <ServiceCard key={service.title} index={index} {...service} />
    ))}
</div>
</>
  )
}

export default SectionWrapper (About, 'about')