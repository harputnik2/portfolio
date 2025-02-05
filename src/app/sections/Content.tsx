"use client";
import React, { useState } from "react";
import {ProjectElement} from "@/app/components";
import {Project} from "@/app/types";
import { Share2, Home, Settings, Map, BookOpen, FileText } from "react-feather";

const projects: Project[] = [
    {
        title: "The Swarm App",
        description: "Network Management SaaS. Major stack: Tanstack Table and Tanstack Query. My biggest quests in this project included user onboarding, content filters, user-customizable columns, table bulk actions and tags feature.",
        link: "https://app.theswarm.com",
        illustration: 'theswarm.png',
        icon: Share2
    },
    {
        title: "Mattermotion",
        description: "My husband's company page. Previously fed by and hosted on Netlify until a crucial image-storing addon stopped to be free. Bummer. Thanks to the project being a React app, I was able to easily migrate to Wordpress as a headless CMS.",
        link: "https://mattermotion.com/",
        illustration: 'mm.png',
        icon: Home
    },
    {
        title: "Bike Studio",
        description: "SoBi, 2017. A tool for customizing bikes. Consists of six images layered on top of each other. First one is plain bike, five others contain different parts. Imported to svgs, they are being painted by ColorMatrix filter attribute manipulation. Rotation is simulated by synchronized change of sprites position.",
        link: "http://smialy.bdl.pl/bike-studio/",
        illustration: 'bike.png',
        icon: Settings
    },
    {
        title: "Bee Tale",
        description: "Lonely Lama, 2014. Wings move a few degrees back and forth around their joints. The joints move up and down along with the body. The body moves forward, but also rotates doing a flip on its way. Every jump, dance and acrobation can be combined from basic transformations. The animation is JS, produced and enhanced with Adobe Edge.",
        link: "http://smialy.bdl.pl/bee/",
        illustration: 'bee.png',
        icon: BookOpen
    },
    {
        title: "Peace Health Rides",
        description: "During my time in Sobi (later doing business as JUMP) I've created quite a number of landing pages for Bike Sharing Networks. A few of originally SoBi networks are still active in the world, one of them is Peace Health Rides operating in Eugene, Oregon.",
        link: "https://www.peacehealthrides.com/",
        illustration: 'peacehealth.png',
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
            <a href='http://smialy.bdl.pl/cv/' target='_blank' rel='noopener noreferrer'>
                <div
                    className={`absolute hover:scale-105 transition ease-in p-4 text-center rounded-full text-white cursor-pointer border border-2 border-beetroot border-dashed`}
                    style={{ width: bubbleSize, height: bubbleSize, left: radius - bubbleSize / 2, top: radius - bubbleSize / 2}}
                >
                    <FileText className="w-6 h-6 mx-auto mt-6" />
                    <h3 className="text-base font-semibold h-12 mt-4">CV</h3>
                </div>
            </a>

            {projects.map(({ title, description, link , icon, illustration}, index) => (
                <ProjectElement
                    title={title}
                    description={description}
                    link={link} key={index}
                    index={index}
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    totalCount={projects.length}
                    icon={icon}
                    illustration={illustration}
                />
            ))}
        </div>
    );
};
