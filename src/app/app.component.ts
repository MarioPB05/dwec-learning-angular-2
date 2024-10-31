import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatListItem} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatIcon, MatIconButton, MatListItem, RouterLink, MatMenu, MatMenuTrigger, MatMenuItem, MatButton, RouterLinkActive],
  templateUrl: './app.component.html'
})
export class AppComponent {

}
