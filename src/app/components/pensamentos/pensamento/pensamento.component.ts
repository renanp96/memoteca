import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})

export class PensamentoComponent implements OnInit {

  pensamento = {
    conteudo: 'Another Brick in The Wall',
    autoria: 'Roger Waters',
    modelo: 'modelo2'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
