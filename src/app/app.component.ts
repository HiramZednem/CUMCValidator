import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'CUMCValidator';
  inputText: string = '';
  caracteres: String[] = [];

  alfabeto: string = 'cumc';

  onClick() {
    let caracteresValidos: String[] = this.alfabeto.split('');
    this.caracteres = this.inputText.toLowerCase().split('');
    
    
    if (!this.caracteres.every( caracter => caracteresValidos.includes(caracter) )) {
      console.error('Contiene caracteres fuera del alfabeto')
      return;
    }  // caracteres fuera de los validos
    if (this.caracteres[0] != caracteresValidos[0] ) {
      console.error('Primer caracter incorrecto')
      return;
    } //no inicia con C
    if (this.caracteres.length > 4) {
      console.error('Longitud de la cadena incorrecta')
      return;
    } // mayor a 4



    let cadenaValida: boolean = true;
    this.caracteres.forEach(element => {

      if (caracteresValidos.includes(element)) {
        caracteresValidos.splice(caracteresValidos.indexOf(element),1);
      } else {
        console.error('Cadena invalida')
        cadenaValida = false;
        return;
      }

    });
    if (cadenaValida) {
      console.log('todo salio bien')
    }

  }
}
