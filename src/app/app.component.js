"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var messages_1 = require('./messages');
var AppComponent = (function () {
    function AppComponent() {
        this.id = 0;
        this.opponent = 'Siri';
        this.opponentMessages = [
            "Sorry, I'm not sure what you said.",
            "Surprisingly, that is not within my capabilities.",
            "Sorry, I missed that.",
            "I don't understand you.",
            "Hello!",
            "What's that again?",
            "What did you say?",
        ];
        this.messages = [];
        this.chatHeight = window.innerHeight - 110 - 155;
    }
    AppComponent.prototype.submitMessage = function (text) {
        var _this = this;
        text = text.trim();
        if (!text) {
            return;
        }
        this.addMessage(text, 'bg-success');
        setTimeout(function () {
            text = _this.opponentMessages[Math.floor(Math.random() * 7)];
            _this.addMessage(text, 'bg-info');
        }, 1000);
    };
    AppComponent.prototype.addMessage = function (text, owner) {
        var _this = this;
        this.date = new Date().toLocaleString();
        this.owner = owner;
        this.messages.push(new messages_1.Messages(this.id, text, this.date, this.owner));
        this.id++;
        setTimeout(function () {
            _this.scrollToBottom();
        }, 100);
    };
    AppComponent.prototype.deleteMessage = function (message) {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].id === message.id) {
                this.messages.splice(i, 1);
            }
        }
    };
    AppComponent.prototype.deleteAll = function () {
        this.messages = [];
    };
    AppComponent.prototype.scrollToBottom = function () {
        try {
            this.scrollMessages.nativeElement.scrollTop = this.scrollMessages.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    __decorate([
        core_1.ViewChild('scrollMessages'), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "scrollMessages", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map