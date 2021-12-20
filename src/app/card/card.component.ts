import { Component, Input, OnInit } from '@angular/core';

import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user:any;

  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;

  constructor() { }

  ngOnInit(): void {
  }

}
