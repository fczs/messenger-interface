import {Injectable} from '@angular/core';

@Injectable()
export class Messages {
    id: number;
    message: string;
    date: string;
    owner: string;

    constructor(id: number, message: string, date: string, owner: string) {
        this.id = id;
        this.message = message;
        this.date = date;
        this.owner = owner;
    }
}