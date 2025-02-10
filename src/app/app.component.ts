import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorComponent, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EditorComponent],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  template: `
  <h1>Mi Editor TinyMCE</h1>
  <editor
    [init] = "init"
  />
  `
})
export class AppComponent {
  title = 'tinymce-angular-demo';
  init: EditorComponent['init'] = {
    plugins: 'lists link image table code help wordcount',
    base_url: '/tinymce',
    suffix: '.min'
  }
}
