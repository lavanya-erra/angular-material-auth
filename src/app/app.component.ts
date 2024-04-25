import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {AppEffects} from "./store/effects";
import {FooterComponent} from "./components/footer/footer.component";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-material-authentication';

  constructor(private appEffects: AppEffects,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIcon('github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/github.svg')
    );
  }


  ngOnInit(): void {
  }
}
