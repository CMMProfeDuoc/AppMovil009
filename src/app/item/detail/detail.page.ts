import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item !: any;

  constructor(
    private itemService : ItemService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const itemId = paramMap.get('itemId');
      this.item = this.itemService.getItem(itemId as string);
    })
  }

}
