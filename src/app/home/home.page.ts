import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { from } from 'rxjs';
import { catchError, first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  error: any;
  location: Geoposition;

  constructor(private geolocation: Geolocation) {}

  getLocation() {
    from(this.geolocation.getCurrentPosition())
      .pipe(
        first(),
        catchError(error => {
          this.error = error;
          return null;
        })
      )
      .subscribe((result: Geoposition) => {
        this.location = result;
      });
  }
}
