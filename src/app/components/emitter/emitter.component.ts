import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-emitter',
	templateUrl: './emitter.component.html',
	styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

	number!: number

	constructor() { }

	ngOnInit(): void {
	}

	onChangeNumber(): void {
		this.number = Math.floor(Math.random() * 10)
	}

}
