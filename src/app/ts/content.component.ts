import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-content',
  imports: [FontAwesomeModule],
  templateUrl: '../html/content.component.html',
  styleUrls: ['../scss/content.component.scss']
})
export class ContentComponent 
{
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faYoutube = faYoutube;
}