import { Component, input, output } from '@angular/core';
import { Comment } from '../../models/comment';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-pizza-comment',
  styleUrl: './pizza-comment.css',
  templateUrl: './pizza-comment.html',
})
export class PizzaComment {
  comment=input.required<Comment>();
  deleteComment= output<number>();
  onDeleteComment(){
    this.deleteComment.emit(this.comment().id);
  }
}
