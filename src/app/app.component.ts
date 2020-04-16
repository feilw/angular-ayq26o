import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Felicia"; //ganti nama

  item = [{
    nama : 'Kelengkeng',
    harga: 10000
  },{
    nama : 'Jeruk',
    harga: 15000
  }];

  itemArr = [1,2,3,4];

  show: boolean = true; //true = tampil | false = g

  user = {
    nama : 'abc'
  };

  a = 4;
  b = 5;

  Pesan = '';
  KlikButton() {
    this.Pesan = 'Tombol di tekan';
  }
}
