import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFacebook = faFacebook;

  constructor() { }

  ngOnInit(): void {
  }

}
