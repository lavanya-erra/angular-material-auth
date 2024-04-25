import {Component} from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {showLoader$} from "../../store/signals";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [MatProgressSpinner],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  protected readonly showLoader$ = showLoader$;
}
