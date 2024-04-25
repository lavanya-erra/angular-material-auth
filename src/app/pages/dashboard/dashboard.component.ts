import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {Auth} from "@angular/fire/auth";
import {signout$} from "../../store/signals";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  protected auth = inject(Auth);
  protected readonly signout$ = signout$;
}
