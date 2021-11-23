import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-du-test',
  templateUrl: './du-test.component.html',
  styleUrls: ['./du-test.component.css']
})
export class DuTestComponent implements OnInit {

  test_name : any;

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    if(this.test_name){
      this.test_name = null
    } else {
      this.test_name = 'hello';
    }
  }
  getEvent(event:any){  //alert모듈으로부터 받은 내용입니다.
    alert('alert 모듈한테 받았습니다 : '+event.text+' '+event.number);
  }
}
