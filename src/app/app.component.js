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
var Messages = (function () {
    function Messages(id, message, date, owner) {
        this.id = id;
        this.message = message;
        this.date = date;
        this.owner = owner;
    }
    return Messages;
}());
exports.Messages = Messages;
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
    }
    AppComponent.prototype.submitMessage = function (text) {
        var _this = this;
        text = text.trim();
        if (!text) {
            return;
        }
        this.date = new Date().toLocaleString();
        this.owner = 'bg-success';
        this.messages.push(new Messages(this.id, text, this.date, this.owner));
        this.id++;
        setTimeout(function () {
            text = _this.opponentMessages[Math.floor(Math.random() * 7)];
            _this.date = new Date().toLocaleString();
            _this.owner = 'bg-info';
            _this.messages.push(new Messages(_this.id, text, _this.date, _this.owner));
            _this.id++;
        }, 1000);
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