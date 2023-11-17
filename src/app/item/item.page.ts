import { Component, OnInit } from '@angular/core';
import { FileService } from '../service/file.service';
import { Router } from '@angular/router';
import { doc } from 'firebase/firestore';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  items !: any[];

  constructor(
    private fileService : FileService,
    private itemService : ItemService,
    private router : Router
  ) { }

  ngOnInit() {
    this.itemService.getAllItems().then( res => {
      this.items = res;
      console.log(this.items);
    });
  }

  goTo (path:string){
    this.router.navigateByUrl('item/'+path);
  }

 

}
