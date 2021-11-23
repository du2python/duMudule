import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dualert',
  templateUrl: './dualert.component.html',
  styleUrls: ['./dualert.component.css']
})
export class DualertComponent implements OnInit {

  @Input() name : any;
  @Output() sendToEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  toastEvent(){
    this.sendToEvent.emit({text:'abcd', number : 1234});
  }

}
