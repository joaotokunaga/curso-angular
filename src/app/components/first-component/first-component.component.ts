import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-first-component',
    templateUrl: './first-component.component.html',
    styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
    name: string = 'João';
    age: number = 38;
    job = 'dev'
    hobbies = ['tal', 'bla', 'etc']
    carro = { nome: 'civic' }

    constructor() { }

    ngOnInit(): void { }
}
