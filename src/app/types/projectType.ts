import {Icon} from "react-feather";

export type Project = {
    title: string;
    description: string;
    link: string;
    illustration: string;
    index?: number;
    icon?: Icon;
};