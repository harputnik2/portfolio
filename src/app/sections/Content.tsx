"use client";
import { useState } from "react";
import {ProjectElement} from "@/app/components";
import {Project} from "@/app/types";
import { Share2, Home, Settings, Map, BookOpen, FileText } from "react-feather";

const projects: Project[] = [
    {
        title: "The Swarm App",
        description: "Network Management SaaS. Major stack: Tanstack Table and Tanstack Query. My biggest quests in this project included user onboarding, content filters, user-customizable columns, table bulk actions and tags feature.",
        link: "https://app.theswarm.com",
        icon: Share2
    },
    {
        title: "Mattermotion",
        description: "My husband's company page. Previously fed by and hosted on Netlify until a crucial image-storing addon stopped to be free. Thanks to it being a React app, I was able to easily migrate to Wordpress as a headless CMS.",
        link: "https://mattermotion.com/",
        icon: Home
    },
    {
        title: "Bike Studio",
        description: "SoBi, 2017. A tool for customizing bikes. Consists of six images layered on top of each other. First one is plain bike, five others contain different parts. Imported to svgs, they are being painted by ColorMatrix filter attribute manipulation. Rotation is simulated by synchronized change of sprites position.",
        link: "http://smialy.bdl.pl/bike-studio/",
        icon: Settings
    },
    {
        title: "Bee Tale",
        description: "JS animation created in Adobe Edge",
        link: "http://smialy.bdl.pl/bee/",
        icon: BookOpen
    },
    {
        title: "Peace Health Rides",
        description: "During my employment in Sobi (later doing business as JUMP) I've created quite a number of landing pages for Bike Sharing Networks. A few of originally SoBi networks are still active in the world, one of them is Peace Health Rides operating in Eugene, Oregon.",
        link: "https://www.peacehealthrides.com/",
        icon: Map
    },
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
                icon={FileText}
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
