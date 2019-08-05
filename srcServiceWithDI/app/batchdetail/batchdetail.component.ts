import { Component, OnInit } from '@angular/core';
import {ABCService} from '../abc.service';
@Component({
  selector: 'app-batchdetail',
  templateUrl: './batchdetail.component.html',
  styleUrls: ['./batchdetail.component.css']
})
export class BatchdetailComponent implements OnInit {

  public arr=[];

  constructor(private abcservice:ABCService) 
  {
      
   }

  ngOnInit() {
    this.arr = this.abcservice.getbatchdetail();
  }

}
