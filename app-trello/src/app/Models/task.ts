export interface Task {
    id: number;
    name: string;
    priority: number;
    creationDate: Date;
    dueDate: Date;
    completed: boolean;
}
