import {Storage} from '@ionic/storage';

export class AddressService{
  private place: {address: string};

  constructor (private storage: Storage){

  }

  addPlace(place: {address: string}) {
    this.place = place;
    this.storage.set('address', this.place);
  }

  getPlace(){
    return this.storage.get('address')
      .then((place)=> {
      this.place = place == null ? [] : place;
      return this.place;
      }
      );
  }
}
