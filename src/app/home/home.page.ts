import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Http } from '@angular/http';
import * as papa from 'papaparse';
import KNN from 'ml-knn';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  treino_x: any[] = [];
  treino_y: any[] = [];
  teste_x: any[] = [];
  teste_y: any[] = [];
  headerRow: any[] = [];
  ans : any[] = [];
 
  constructor(public navCtrl: NavController, private http: Http) {
     this.readCsvData();
	  //this.runKnn();
  }
 
  private readCsvData() {
    this.http.get('assets/treino_x.csv')
      .subscribe(
      data => this.extractDataTreinoX(data),
      err => this.handleError(err)
      );
	this.http.get('assets/treino_y.csv')
      .subscribe(
      data => this.extractDataTreinoY(data),
      err => this.handleError(err)
      );
	this.http.get('assets/teste_x.csv')
      .subscribe(
      data => this.extractDataTesteX(data),
      err => this.handleError(err)
      );
	this.http.get('assets/teste_y.csv')
      .subscribe(
      data => this.extractDataTesteY(data),
      err => this.handleError(err)
      );
  }
 
  private extractDataTreinoX(res) {
    let treino_x = res['_body'] || '';
    let parsedData = papa.parse(treino_x).data;
 
    this.headerRow = parsedData[0];
 
    parsedData.splice(0, 1);
    this.treino_x = parsedData;
  }
  
   private extractDataTreinoY(res) {
    let treino_y = res['_body'] || '';
    let parsedData = papa.parse(treino_y).data;
 
    //this.headerRow = parsedData[0];
 
    parsedData.splice(0, 1);
    this.treino_y = parsedData;
  }
  
   private extractDataTesteX(res) {
    let teste_x = res['_body'] || '';
    let parsedData = papa.parse(teste_x).data;
 
    //this.headerRow = parsedData[0];
 
    parsedData.splice(0, 1);
    this.teste_x = parsedData;
  }
  
   private extractDataTesteY(res) {
    let teste_y = res['_body'] || '';
    let parsedData = papa.parse(teste_y).data;
 
    //this.headerRow = parsedData[0];
 
    parsedData.splice(0, 1);
    this.teste_y = parsedData;
  }
  
  private runKnn(){
	  
	/*console.log(this.headerRow); 
   console.log(this.treino_x); 
   console.log(this.treino_y); */
   
   var knnTreinado = new KNN(this.treino_x,this.treino_y);	
   console.log(knnTreinado);
   console.log(knnTreinado.toJSON());
   //var knnDoModelo = KNN.load(knnTreinado.toJSON());

   //this.ans = knnTreinado.predict(this.teste_x);
  }
 
 /*
  downloadCSV() {
    let csv = papa.unparse({
      fields: this.headerRow,
      data: this.csvData
    });
 
    // Dummy implementation for Desktop download purpose
    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "newdata.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
 */
  private handleError(err) {
    console.log('something went wrong: ', err);
  }
 
  trackByFn(index: any, item: any) {
    return index;
  }
 
}