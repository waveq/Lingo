import { ChangeDetectionStrategy, Component } from '@angular/core';

// webpack html imports
// let template = require('./radio-basic.html');

@Component({
  selector: 'my-app',
  templateUrl: 'app/radio-basic.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public dynamicTooltip:string = 'Hello, World!';
  public dynamicTooltipText:string = 'dynamic';
  public htmlTooltip:string = 'I\'ve been made <b>bold</b>!';
  public tooltipModel:any = {text: 'foo', index: 1};
}
