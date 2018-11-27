import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalRetoPage } from '../modal-reto/modal-reto.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public camara: Camera, public controlModal: ModalController) {}

  async cumplirReto(){
    const modal1 = await this.controlModal.create({
      component: ModalRetoPage,
      componentProps: { value: 123 }
    });
    await modal1.present();
  }

}
