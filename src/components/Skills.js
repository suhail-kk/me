import React from 'react'
import {  SkillCard, TextWhiteMedium } from './display'

export default function Skills() {
  const skills = ['Html','CSS','GIT','Next.js','React.js','MongoDB','Bootstrap','MUI','Tailwind css','Javascript','Node js','Express js']
  return (
    <div className="flex flex-col  justify-center h-fit items-center gap-10 p-5 sm:px-20">
          <div>
            <TextWhiteMedium text="What tools do I use in development?" />
          </div>
          <div className="w-full h-full flex flex-wrap gap-6 sm:gap-10 justify-start sm:justify-center">
            {
              skills && skills.map((item,i)=>{
                return (
                  <SkillCard title={item} key={i}/>
                )
              })
            }
          </div>
        </div>
  )
}
