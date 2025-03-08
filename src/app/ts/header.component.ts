import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: '../html/header.component.html',
    styleUrls: ['../scss/header.component.scss'],
  })
  export class HeaderComponent{
    isDarkMode = false;
  
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }
  }