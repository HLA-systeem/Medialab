///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component} from '@angular/core';

@Component({
    selector: 'mybadges',
    templateUrl: 'mybadges.component.html',
    styleUrls: ['mybadges.component.css']
})

export class MyBadgesComponent {
  processAngular = "25%";
  processHTML = "50%";
  processCSS = "75%";
  processJS = "100%";
}
