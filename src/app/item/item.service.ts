import { Injectable } from '@angular/core';
import { FileService } from '../service/file.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  documents !: any[];

  items : any[] = [];

  constructor(
    private fileService : FileService,
  ) { }

  async getAllItems () {
    const path = 'items';
    this.documents = (await this.fileService.getAllDocuments(path)).docs;
    
    for (const element of this.documents){
      const item = (await this.fileService.getDocument(path, element.id)).data();
      this.items.push({
        id:element.id,
        ...item,
      });
    }

    return [...this.items];
  }

  getItem (id:string){
    return {
      ...this.items.find( item => {
        return item.id === id;
      })
    };
  }
}
