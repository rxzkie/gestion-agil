import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  estado: boolean;
  constructor(public firestore:FirestoreService) {}


  
cEstado(ev:any){
  console.log('cEstado()',ev.detail.value);
  const opc = ev.detail.value;
  if (opc === 'Login'){
    this.estado=true;

  }
  else {
    this.estado=false;

  }
}
}
