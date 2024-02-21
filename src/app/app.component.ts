import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CUMCValidator';
  inputText: string = '';

  alfabeto: string = 'cumc';

  onClick() {
    let caracteresValidos: String[] = this.alfabeto.split('');
    let caracteres: String[] = this.inputText.toLowerCase().split('');
    
    
    if (!caracteres.every( caracter => caracteresValidos.includes(caracter) )) {
      console.error('Contiene caracteres fuera del alfabeto')
      return;
    }  // caracteres fuera de los validos
    if (caracteres[0] != caracteresValidos[0] ) {
      console.error('Primer caracter incorrecto')
      return;
    } //no inicia con C
    if (caracteres.length > 4) {
      console.error('Longitud de la cadena incorrecta')
      return;
    } // mayor a 4



    let cadenaValida: boolean = true;
    caracteres.forEach(element => {

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
