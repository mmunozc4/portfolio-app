import { Tag } from "./Tag";

export interface project{
    id: number;
    name: string;
    summary: string;
    description: string;
    repoLink: string;
    appLink: string;
    pictures: string[];
    tags: Tag[];
}