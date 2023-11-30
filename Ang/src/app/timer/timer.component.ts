import { Component,OnDestroy,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit,OnDestroy {

  counter: number =0;
  IntervalID : any;

  ngOnInit(): void {
    this.IntervalID = setInterval(() => {
      this.counter++;
      console.log(this.counter);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.IntervalID);
    console.log('The timer has been destroyed');
  }

}
