import { Component, Input,Output,EventEmitter, OnInit,OnChanges, SimpleChanges,DoCheck,AfterContentInit, ViewChild, ElementRef,ContentChild,AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.css'
})
export class HooksComponent implements OnInit,OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() message='';
  @ViewChild('temp') tempPara?: ElementRef;
  @ContentChild('temp') paraContent?: ElementRef;
  @Output() messageEvent = new EventEmitter<string>();
 


  private IntervalID: any;
  private counter: number = 0;

  ngOnInit(): void {
    console.log("Im from OnInit")
    
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  ngDoCheck(): void{
    console.log("Docheck called");
    console.log('In ngDocheck',this.paraContent)
  }

  ngAfterContentInit(): void{
    console.log("AfterContentInit called");
    console.log('In ngAfterContentInit',this.paraContent?.nativeElement)
  }

  ngAfterContentChecked(): void{
    console.log("AfterContentChecked called");
    console.log('In ngAfterContentChecked',this.tempPara);
    
  }
  ngAfterViewInit(): void{
    console.log("AfterViewInit called");
    console.log('In ngAfterViewInit',this.tempPara);

  }
  ngAfterViewChecked(): void{
    console.log("AfterViewChecked called");

  }

 ngOnDestroy(): void {
  
    
 }
 addNewMessage(value:string){
  this.messageEvent.emit(value);
 }


}

   
 




