import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  constructor(public firestore:FirestoreService) { }

  ngOnInit() {
  }

  guardarEvento(){
    const data={
      nombre:'prueba',
      precio:40
    };
    const path='evento/';
    const id = '001'
    this.firestore.createDoc(data,path,id)
  }
}
