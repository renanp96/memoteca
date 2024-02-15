import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  //listaPensamentos = [];

  //Mocked object for testing purposes.
  listaPensamentos = [
    {
      conteudo: 'Go to the mirror!',
      autoria: 'The Who',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Sing me to sleep.',
      autoria: 'The Smiths',
      modelo: 'modelo2'
    },
    {
      conteudo: `This is the end
                  Beautiful friend
                  This is the end
                  My only friend, the end
                  Of our elaborate plans, the end
                  Of everything that stands, the end
                  No safety or surprise, the end
                  I'll never look into your eyes again...`,
      autoria: 'The Doors',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
