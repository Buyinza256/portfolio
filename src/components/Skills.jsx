// import React from "react";

// const Skills = () => {
//   return (
//     <div className="w-full min-h-[500px] bg-[--primary-light] text-center">
//       <div className="w-[60%] mx-auto">
//         <h1 className="lg:text-[3rem] text-[2rem]">Designated Skills</h1>

//         <p className="text-justify ">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
//           tenetur blanditiis voluptas deserunt? Eos voluptate repudiandae
//           inventore, autem iure tempora deleniti non nesciunt accusantium,
//           laborum nulla enim facilis aliquid itaque.
//         </p>

//         <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
//           <div className="flex justify-center gap-4"><p>HTML</p> <p>Expert</p> </div>
//           <div>Laboriosam </div>
//           <div>Laboriosam </div>
//           <div>Laboriosam </div>
//           <div>Laboriosam </div>
//           <div>Laboriosam </div>
//           <div>Laboriosam </div>
//           <div>Laboriosam </div>
//           <div>Laboriosam </div>
//           <div>Laboriosam </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React, { useEffect } from 'react';
import { skills } from '../resources';

const SkillSection = ({ section, skills }) => {
  useEffect(() => {
    console.log(skills.rating);
    const ratingfunctionality =() => {
      for (let skill = 0; skill < skills.rating; skill++) {
        const element = skills[skill];
        console.log(element);
      }
    }

    ratingfunctionality()
  },[skills])
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4 opacity-50 text-[--black] border-b pb-2 px-2">{section}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.skillName}
            className="p-4 bg-white shadow-md rounded-md transition-transform transform hover:scale-105 border-solid border-1 border-orange-300"
          >
            <h3 className="text-xl font-semibold mb-2">{skill.skillName}</h3>
            <p className="text-gray-600 mb-2">Proficiency: {skill.proficiencyLevel}</p>
            <p className="text-gray-600 mb-2">Years of Experience: {skill.yearsOfExperience}</p>
            <p className="text-gray-700">{skill.description}</p>
            <div className="mt-4">
              <strong>Projects:</strong>
              <ul className="list-disc ml-6">
                {skill.examplesOfProjects.map((project, index) => (
                  <li key={index} className="text-gray-600">
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      {skills.map((section) => (
        <SkillSection key={section.section} {...section} />
      ))}
    </div>
  );
};

export default Skills;
