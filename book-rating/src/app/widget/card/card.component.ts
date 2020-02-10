import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;

  constructor() { }

  ngOnInit(): void {
  }

}
