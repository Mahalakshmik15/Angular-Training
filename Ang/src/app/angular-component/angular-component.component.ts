import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-angular-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-component.component.html',
  styleUrl: './angular-component.component.css'
})
export class AngularComponentComponent {

  public isButtonVisible = true;

  toggleButtonVisibility(): void {
    this.isButtonVisible = !this.isButtonVisible;
  }

  constructor() { }

  public day = new Date().getDay()

    ngOnInit(): void {

  }

}
 

  



