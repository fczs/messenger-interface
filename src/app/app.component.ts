import { Component } from '@angular/core';

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

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})

export class AppComponent {
    date: string;
    owner: string;
    id: number = 0;
    opponent = 'Siri';
    opponentMessages: string[] = [
        "Sorry, I'm not sure what you said.",
        "Surprisingly, that is not within my capabilities.",
        "Sorry, I missed that.",
        "I don't understand you.",
        "Hello!",
        "What's that again?",
        "What did you say?",
    ];
    messages: Messages[] = [];
    
    submitMessage(text: string): void {
        text = text.trim();
        if (!text) { return; }
        this.date = new Date().toLocaleString();
        this.owner = 'bg-success';
        this.messages.push(new Messages(this.id, text, this.date, this.owner));
        this.id++;

        setTimeout(() => {
            text = this.opponentMessages[Math.floor(Math.random() * 7)];
            this.date = new Date().toLocaleString();
            this.owner = 'bg-info';
            this.messages.push(new Messages(this.id, text, this.date, this.owner));
            this.id++;
        }, 1000);
    }

    deleteMessage(message: Messages): void {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].id === message.id) {
                this.messages.splice(i, 1);
            }
        }
    }

    deleteAll(): void {
        this.messages = [];
    }
}
