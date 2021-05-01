import { Task } from './task';

export interface Project {
    title: string;
    description: string;
    creationDate: Date;
    tasks: Task[];
}