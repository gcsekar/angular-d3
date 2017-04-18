import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    menuNavigation = [];
    constructor() {
        this.menuNavigation = [
                               { title: "Home", link: "", desc: "Home Menu", outlet: '' },
                               { title: "Example-1", link: "example1", desc: "Example 1" },
                               { title: "Home", link: "", desc: "Home Menu", outlet: '' },
                               { title: "Home", link: "", desc: "Home Menu", outlet: '' },
                               { title: "Home", link: "", desc: "Home Menu", outlet: '' },
                               { title: "Home", link: "", desc: "Home Menu", outlet: '' },
                               { title: "Home", link: "", desc: "Home Menu", outlet: '' },
                               { title: "Home", link: "", desc: "Home Menu", outlet: '' },
                               { title: "Home", link: "", desc: "Home Menu", outlet: '' },
                           ];
    }

    ngOnInit() {
      }

    onMenuSelect( item ) {
        var i;
        for ( i = 1; i < this.menuNavigation.length; i++ ) {
            if(this.menuNavigation[i] == item) {
                this.menuNavigation[i].selected = true;
            };
        }
    }
    
    clearMenuNavs() {

    }
}

