import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ConfigService} from '../services/config.service';
import {Itemlist} from '../models/itemlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstitemlist: Itemlist[];

  constructor(private configService: ConfigService, private route: Router) {
  }

  ngOnInit() {
    this.configService.getItems().subscribe(
      data => {
        this.firstitemlist = data;
      }
    );
  }

}
