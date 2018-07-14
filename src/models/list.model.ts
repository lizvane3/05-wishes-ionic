import { ListItem } from './list-item.model';

export class List {
    id: number;
    title: string;
    createdOn: Date;
    finishedOn: Date;
    finished: boolean;
    items: ListItem[];

    constructor(title: string) {
        this.title = title;
        this.finished = false;
        this.createdOn = new Date();
        this.items = [];
        this.id = new Date().getTime();

    }


}