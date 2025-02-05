import {ProjectElement} from "@/app/components";
import {Icon} from "react-feather";

export type Project = {
    title: string;
    description: string;
    link: string;
    dashedStyle?: boolean;
    motionless?: boolean;
    index?: number;
    icon?: Icon;
};