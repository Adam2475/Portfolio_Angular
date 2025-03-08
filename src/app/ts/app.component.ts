import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from './content.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ContainerComponent } from './container.component';

//////////////////////////////
// basic component structure 
/////////////////////////////

/**
* components are the basic building block of any
* angular application, each component have 3 parts:
* - Typescript class
* - HTML template
* - CSS styles
*/

// the component logic and behaviour are set in the TS class

/**
 * the selector property of the component configuration gives you
 * a name to use when referencing the component in another
 * template. 
 * You can use the selector like an html tag, es:
 * app-user = <app-user/>
 */

@Component({
  selector: `app-root`,
  //imports: [RouterOutlet],
 // imports: [UserComponent],
 imports: [HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: `../html/app.component.html`,
  styleUrls: [`../scss/app.component.scss`],
 // templateUrl: './app.component.html',
  //styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = "Portfolio";
  city:string = "Firenze";
}
