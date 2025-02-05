"use client";
import { useState } from "react";
import {ProjectElement} from "@/app/components";
import {Project} from "@/app/types";
import { Share2, Home, Settings, Map, BookOpen } from "react-feather";

const projects: Project[] = [
    { title: "The Swarm App", description: "Connections Network Management SaaS", link: "https://app.theswarm.com", icon: Share2 },
    { title: "Mattermotion", description: "Company Portfolio built on top of headless cms", link: "https://mattermotion.com/robocza/", icon: Home },
    { title: "Bike Studio", description: "Tool for bike customization - 5 sprites, endless combinations", link: "http://smialy.bdl.pl/bike-studio/", icon: Settings },
    { title: "Bee Tale", description: "JS animation created in Adobe Edge", link: "http://smialy.bdl.pl/bee/", icon: BookOpen },
    { title: "Peace Health Rides", description: "One of many Bike Network landing pages. Operating in Eugene, Oregon", link: "https://www.peacehealthrides.com/", icon: Map },
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
            <ProjectElement
                title="CV"
                description="My CV"
                link="http://smialy.bdl.pl/cv"
                dashedStyle
                x={radius - bubbleSize / 2}
                y={radius - bubbleSize / 2}
                motionless
                setIsHovered={setIsHovered}
                isHovered
            />

            {projects.map(({ title, description, link , icon}, index) => (
                <ProjectElement
                    title={title}
                    description={description}
                    link={link} key={index}
                    index={index}
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    totalCount={projects.length}
                    icon={icon}
                />
            ))}
        </div>
    );
};
