import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() userData: any;
  @Output() cardClicked = new EventEmitter<void>();

  onClick(): void {
    this.cardClicked.emit();

};
}
