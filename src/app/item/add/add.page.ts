import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  item !: FormGroup;

  constructor(
    private fileService : FileService,
    private formBuilder : FormBuilder,
    private router : Router,
  ) { }

  get name () {return this.item.get('name');}
  get detail () {return this.item.get('detail');}

  ngOnInit() {
    this.item = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      detail:['',[Validators.required,Validators.maxLength(100)]]
    });
  }

  addItem () {
    console.log("subiendo archivo... ");
    this.fileService.addDocument(
      'items',
      this.item.value
    );
    this.router.navigateByUrl('home',{replaceUrl:true});
  }

}
