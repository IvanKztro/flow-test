import type { Timestamp } from "firebase/firestore";
import type { Portfolio } from "./portfolio";

export interface Workspace {
    id: string;
    name: string;
    createdBy: string;
    created: Timestamp;
    members?: string[];
    teams?: string[];
    color?: string;
    logo?: Logo;
    portfolios: Portfolio[];
    //only read
    creator: any;
}

export interface Logo {
    type: LogoType;
    data: any;
}

export enum LogoType {
    Icon = "Icon",
    Image = "Image",
}
