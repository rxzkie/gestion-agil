import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  constructor(
    public firestore: FirestoreService,
    public alertController : AlertController

  ) { }

  ngOnInit() {
  }

  guardarEvento() {
    const data = {
      nombre: 'prueba',
      precio: 40
    };
    const path = 'evento/';
    const id = '001'
    this.firestore.createDoc(data, path, id)
  }


  async presentAlert1() {
    const alert = await this.alertController.create({

      header: "Enviado",
      message: "gracias por enviar",
      buttons: ["ok"],

    });
    await alert.present()

    let result = await alert.onDidDismiss();

    console.log(result)

  }




}
