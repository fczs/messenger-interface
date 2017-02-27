import { Component, ElementRef, ViewChild } from '@angular/core';

import { Messages } from './messages';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})

export class AppComponent {
    @ViewChild('scrollMessages') scrollMessages: ElementRef;

    chatHeight: number;
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

    constructor() {
        this.chatHeight = window.innerHeight - 110 - 155;
    }

    submitMessage(text: string): void {
        text = text.trim();
        if (!text) { return; }
        this.addMessage(text, 'bg-success');

        setTimeout(() => {
            text = this.opponentMessages[Math.floor(Math.random() * 7)];
            this.addMessage(text, 'bg-info');
        }, 1000);
    }

    addMessage(text: string, owner: string): void {
        this.date = new Date().toLocaleString();
        this.owner = owner;
        this.messages.push(new Messages(this.id, text, this.date, this.owner));
        this.id++;
        setTimeout(() => {
            this.scrollToBottom();
        }, 100);
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

    scrollToBottom(): void {
        try {
            this.scrollMessages.nativeElement.scrollTop = this.scrollMessages.nativeElement.scrollHeight;
        } catch(err) { }
    }
}