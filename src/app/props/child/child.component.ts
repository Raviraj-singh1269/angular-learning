import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() users: any = [];
  @Output() onClickNotify = new EventEmitter<any>();
  count: number = 0;
  public clickToNotify(): void {
    this.count+= 1;
    this.onClickNotify.emit(this.count);
}
}
