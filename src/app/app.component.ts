import { Component } from '@angular/core';

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public appIsLoading = true;
  public appTitle = 'Instagram';
  public inputText = '';

  constructor() {
    setTimeout(() => {
      this.appIsLoading = false;
    }, 3000);
  }

  changeTitleHandler(): void {
    this.appTitle = 'oleg';
  }

  changeTextHandler(event: Event): void {
    this.inputText = (event.currentTarget as HTMLInputElement).value;
  }
}
