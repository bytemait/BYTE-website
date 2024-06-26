import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utlis";
import achbff from "../Assets/ach_bff.png"
import achsih from "../Assets/ach3.jpg"
import achiiit from "../Assets/ach5.jpg"
import achiit from "../Assets/ach6.jpeg"
import acht from "../Assets/ach7.png"
import achhwm from "../Assets/ach8.png"


const ParticleRingAchievements = ({ title }) => {
  const achievements = [
    {
      id: 1,
      image: achsih,
      heading: 'SIH 2023 Winners',
      projectLink: 'https://example.com/project2'
    },
    {
      id: 2,
      image: achbff,
      heading: `BFF '23 and Bitbox '23 Winners`,
      projectLink: 'https://example.com/project1'
    },
    {
      id: 3,
      image: achiiit,
      heading: `Empowher '23 Runner Ups`,
      projectLink: 'https://example.com/project2'
    },
    {
      id: 4,
      image: achiit,
      heading: `HackXtreme '23 Winners`,
      projectLink: 'https://example.com/project2'
    },
    // {
    //   id: 5,
    //   image: acht,
    //   heading: `TechnoHacks Runner Ups`,
    //   projectLink: 'https://example.com/project2'
    // },
    {
      id: 5,
      image: achhwm,
      heading: `HackWithMAIT 4.0 Winners`,
      projectLink: 'https://example.com/project2'
    },
    // {
    //   id: 4,
    //   image: achiiit,
    //   heading: `Empowher '23 Winners`,
    //   projectLink: 'https://example.com/project2'
    // },
    // Add more achievements as needed
  ];
  return (
    <div className="relative -z-10">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium pointer-events-none z-2" style={{ }}>
        <div className="bg-gray-900 bg-opacity-50 p-4">

          <h1 className="text-4xl">

            {title}
          </h1>
          <div className="container mx-auto px-4 py-8">
            <div className="flex gap-2 flex-wrap z-20" >
              {achievements.map((achievement) => (
                <div key={achievement.id} className="border-[1px] w-[200px] border-green-400 p-2 rounded-lg shadow-md overflow-hidden">
                  <img src={achievement.image} alt={achievement.heading} className="w-full bg-cover h-32 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl  mb-2">{achievement.heading}</h2>
                    {/* <a href={achievement.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a> */}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRingAchievements;