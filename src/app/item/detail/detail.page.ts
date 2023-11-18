import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item !: any;

  updateForm !: FormGroup;

  constructor(
    private itemService : ItemService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private formBuilder : FormBuilder,
  ) { }

  
  get name () {return this.item.get('name');}
  get detail () {return this.item.get('detail');}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const itemId = paramMap.get('itemId');
      this.item = this.itemService.getItem(itemId as string);
    })

    this.updateForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      detail:['',[Validators.required,Validators.maxLength(100)]]
    });
  }

  updateItem () {
    this.itemService.updateItem(this.item.id, this.updateForm.value);
    this.goToItem();
  }

  deleteItem () {
    this.itemService.deleteItem(this.item.id);
    this.goToItem();
  }

  goToItem () {
    this.router.navigateByUrl('/item',{replaceUrl:true});
  }



}
