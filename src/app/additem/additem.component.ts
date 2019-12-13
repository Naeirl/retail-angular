import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ConfigService} from '../services/config.service';
import {Router} from '@angular/router';
import {Additem} from '../models/additem';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  contactForm: FormGroup;
  // requestType = ['Claim', 'Feedback', 'Help Request'];
  // text = ['USA', 'Germany', 'Italy', 'France'];
  private item: Additem;

  constructor(private configService: ConfigService, private route: Router) {
    this.contactForm = this.createNewItem();
  }
  createNewItem() {
    return new FormGroup({
      item: new FormGroup({
        id: new FormControl(),
        barcode: new FormControl(),
        nameI: new FormControl(),
        description: new FormControl()
      }),
      // requestType: new FormControl(),
      // text: new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.configService.addNewItem(this.item).subscribe(
      data => {
        this.item = data;
      }
    );
  }
}
