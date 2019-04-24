import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading;

  Arr = Array;
  url: string = "https://picsum.photos/300?random=";

  constructor(
    public loadingController: LoadingController
  ) {

  }

  ngOnInit() {
    this.printOnConsole();
    this.presentLoading();

    setTimeout( () => {
      try {
        this.dismissLoading();
      } catch(err) {
        console.error(err);
        alert('Error dismissing loader');
      }
      
    }, 5000)
    
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please wait...'
    });
    return await this.loading.present();
  }

  printOnConsole() {
    console.log('Running a public function on init');
  }

  dismissLoading() {
    if (!_.isNil(this.loading)) {
      this.loading.dismiss();
    }
  }
}
