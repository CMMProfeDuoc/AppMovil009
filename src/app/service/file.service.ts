import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private firestore : Firestore
  ) { }

  addDocument (path:string, document:any) {
    const docRef = collection(this.firestore, path);
    console.log("documento agregado");
    return addDoc(docRef, document);
  }

  getAllDocuments (path:string) {
    const docRef = collection(this.firestore,path);
    return getDocs(docRef);
  }

  getDocument (path:string, id:string){
    const docRef = doc(this.firestore,path,id);
    return getDoc(docRef);
  }

  updateDocument (updateData:any,path:string, id:string) {
    const docRef = doc(this.firestore, path, id);
    return updateDoc(docRef, updateData);
  }

  deleteDocument (path:string, id:string) {
    const docRef = doc(this.firestore, path, id);
    return deleteDoc(docRef);
  }
}
