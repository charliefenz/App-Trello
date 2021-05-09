import { Task } from './task';

export interface Project {
    id: number;
    title: string;
    description: string;
    creationDate: Date;
    tasks: Task[];
}
