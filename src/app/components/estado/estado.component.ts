import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent {
  @Input() id!: Number;
  @Input() status!: boolean;
  @Input() value!: any;
  
}
