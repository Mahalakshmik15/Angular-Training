import { Component,OnInit,DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AngularComponentComponent } from './angular-component/angular-component.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HooksComponent } from './hooks/hooks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AngularComponentComponent,UserCardComponent,HooksComponent, RouterLink,NgFor,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,DoCheck{

  text=["Hi","Hello"];

  message = "hello 123";
  hmessage=[""]
  
  addmessage(newMessage: string){
    this.hmessage.push(newMessage);
    console.log(newMessage);
    this.message =newMessage;
  }

  toDestroy:boolean = false;
  
  

  ngOnInit(): void {
    console.log('Hello');
  }

  ngDoCheck(): void {
    console.log('DoCheck')
  }

  changeMessage(){
    this.message = "Hi this is a test";
   

    
  }

  check(){
    
  }

  ngAfterViewInit(): void{
    console.log('ngAfterViewInit of AppComponent called')
  }

  ngAfterViewContentChecked(): void{
    console.log('ngAfterViewContentChecked of AppComponent called')
  }





  user = {
    name: 'Mahalakshmi',
    email: 'mahalakshmi@gmail.com',
   
  }
handleCardClick(): void {
  console.log('User card clicked!');
}

colorChanged = false;

changeColor() {
  this.colorChanged = !this.colorChanged;
  }

  inputModel = '';
};
