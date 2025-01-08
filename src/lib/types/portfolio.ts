import type { Timestamp } from "firebase/firestore";

export interface Portfolio {
    id: string;
    name: string;
    createdBy: string;
    created: Timestamp;
    members?: string[];
    teams?: string[];
    color?: string;
    logo?: Logo;
}

export interface Logo {
    type: LogoType;
    data: any;
}

export enum LogoType {
    Icon = "Icon",
    Image = "Image",
}
