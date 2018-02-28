import { Component, OnInit, Input } from '@angular/core';
import {Config} from '../config/config';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() config:Config;
  constructor() { }

  ngOnInit() {
  }

}
