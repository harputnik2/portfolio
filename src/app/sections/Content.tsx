"use client";

import { MotionDiv } from "@/app/components";
import { useEffect, useState } from "react";

type Project = {
    title: string;
    description: string;
    link: string;
    dashedStyle?: boolean;
    motionless?: boolean;
    index?: number;
};

type PlacedProject = Project & {
    x?: number;
    y?: number;
    isHovered?: boolean;
    index?: number;
};

const projects: Project[] = [
    { title: "The Swarm App", description: "Connections Network Management SaaS", link: "https://app.theswarm.com" },
    { title: "Mattermotion", description: "Company Portfolio built on top of headless cms", link: "https://mattermotion.com/robocza/" },
    { title: "Bike Studio", description: "Tool for bike customization - 5 sprites, endless combinations", link: "http://smialy.bdl.pl/bike-studio/" },
    { title: "Bee Tale", description: "JS animation created in Adobe Edge", link: "http://smialy.bdl.pl/bee/" },
    { title: "Peace Health Rides", description: "One of many Bike Network landing pages. Operating in Eugene, Oregon", link: "https://www.peacehealthrides.com/" },
];

const radius = 200;
const bubbleSize = 150;
const center = radius;

export const Content = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative border-beetroot border-dashed border-2 rounded-full shrink-0"
            style={{
                width: center * 2,
                height: center * 2,
                marginTop: bubbleSize / 2 + 15,
                marginBottom: bubbleSize / 2 + 15,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ProjectElement title="CV" description="My CV" link="http://smialy.bdl.pl/cv" dashedStyle x={radius - bubbleSize / 2} y={radius - bubbleSize / 2} motionless />

            {projects.map(({ title, description, link }, index) => (
                <ProjectElement title={title} description={description} link={link} key={index} index={index} isHovered={isHovered} />
            ))}
        </div>
    );
};

const ProjectElement = ({ title, description, link, dashedStyle, motionless = false, index = 0, isHovered, x, y }: PlacedProject) => {
    const [angle, setAngle] = useState((index / projects.length) * 2 * Math.PI);
    const [targetX, setTargetX] = useState(center + radius * Math.cos(angle) - bubbleSize / 2);
    const [targetY, setTargetY] = useState(center + radius * Math.sin(angle) - bubbleSize / 2);

    useEffect(() => {
        if (motionless) return; // No movement for CV

        const originalX = center + radius * Math.cos(angle) - bubbleSize / 2;
        const originalY = center + radius * Math.sin(angle) - bubbleSize / 2;

        let interval: NodeJS.Timeout;

        if (isHovered) {
            interval = setInterval(() => {
                setTargetX((prevX) => {
                    const driftX = Math.random() * 10 - 5; // Random ±5px
                    const newX = prevX + driftX;
                    return Math.max(originalX - 10, Math.min(originalX + 10, newX)); // Keep within ±10px
                });

                setTargetY((prevY) => {
                    const driftY = Math.random() * 10 - 5;
                    const newY = prevY + driftY;
                    return Math.max(originalY - 10, Math.min(originalY + 10, newY));
                });
            }, 500);
        } else {
            interval = setInterval(() => {
                setAngle((prevAngle) => prevAngle + 0.02);
                setTargetX(center + radius * Math.cos(angle) - bubbleSize / 2);
                setTargetY(center + radius * Math.sin(angle) - bubbleSize / 2);
            }, 50);
        }

        return () => clearInterval(interval);
    }, [isHovered, angle]);


    const appearance = dashedStyle ? "border-dashed border-2 border-beetroot bg-black" : "bg-beetroot";

    return (
        <MotionDiv
            className="absolute"
            animate={motionless ? {} : { x: targetX, y: targetY }}
            transition={{
                duration: isHovered ? 1.2 : 0.2,
                ease: "easeInOut",
            }}
            style={{ x: x || targetX, y: y || targetY, width: bubbleSize, height: bubbleSize }}
        >
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div
                    className={`p-4 text-center rounded-full text-white ${appearance}`}
                    style={{ width: bubbleSize, height: bubbleSize }}
                >
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-600 text-sm mt-4">{description}</p>
                </div>
            </a>
        </MotionDiv>
    );
};
