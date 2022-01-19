import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ruff',
  templateUrl: './ruff.component.html',
  styleUrls: ['./ruff.component.css']
})
export class RuffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
   @Input()
   headname = "Hello";
}
