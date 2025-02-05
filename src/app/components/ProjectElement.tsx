"use client";
import React, { useEffect, useState } from "react";
import { MotionDiv } from "@/app/components/MotionDiv";
import { Modal } from "@/app/components/Modal";
import {Project} from "@/app/types";

export type PlacedProject = Project & {
    x?: number;
    y?: number;
    isHovered: boolean;
    setIsHovered: (isHovered: boolean) => void;
    index?: number;
    totalCount?: number;
};

const radius = 200;
const bubbleSize = 150;
const center = radius;

export const ProjectElement = ({
    title,
    description,
    link,
    icon: Icon,
    illustration,
    totalCount = 0,
    index = 0,
    isHovered,
    setIsHovered,
    x,
    y,
}: PlacedProject) => {
    const [angle, setAngle] = useState((index / totalCount) * 2 * Math.PI);
    const [targetX, setTargetX] = useState(center + radius * Math.cos(angle) - bubbleSize / 2);
    const [targetY, setTargetY] = useState(center + radius * Math.sin(angle) - bubbleSize / 2);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!isHovered) {
            const angleAddition = isHovered ? -0.04 : 0.006;
            interval = setInterval(() => {
                setAngle((prevAngle) => prevAngle + angleAddition);
                setTargetX(center + radius * Math.cos(angle) - bubbleSize / 2);
                setTargetY(center + radius * Math.sin(angle) - bubbleSize / 2);
            }, 100);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isHovered, angle]);

    const openModal = () => {
        setIsModalOpen(true);
        setIsHovered(false);
    };

    return (
        <>
            <MotionDiv
                className="absolute"
                animate={{ x: targetX, y: targetY }}
                transition={{
                    duration: isHovered ? 1 : 0.2,
                    ease: "easeInOut",
                }}
                style={{ x: x || targetX, y: y || targetY, width: bubbleSize, height: bubbleSize }}
            >
                <div
                    onClick={() => openModal()}
                    className={`hover:scale-105 transition ease-in p-4 text-center rounded-full text-white cursor-pointer bg-beetroot`}
                    style={{ width: bubbleSize, height: bubbleSize }}
                >
                    {Icon && <Icon className="w-6 h-6 mx-auto mt-6" />}
                    <h3 className="text-base font-semibold h-12 mt-4">{title}</h3>
                </div>
            </MotionDiv>

            <Modal
                visible={isModalOpen}
                setVisible={setIsModalOpen}
                title={title}
                content={description}
                link={link}
                illustration={illustration}
            />
        </>
    );
};
