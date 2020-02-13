import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    buttonWasTapped = false;

    constructor() { }

    ngOnInit(): void {

    }

    onTapButton() {
        const delay = 2000;
        setTimeout(() => {
            this.buttonWasTapped = true;
        }, delay)
    }
}
