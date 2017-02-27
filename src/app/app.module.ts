import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ModalModule }   from 'ng2-bootstrap';
import { AppComponent }  from './app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, ModalModule.forRoot() ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
