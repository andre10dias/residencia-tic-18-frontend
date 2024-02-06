import { Component, EventEmitter, Output } from '@angular/core';
import { JreaderService } from '../../services/jreader.service';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.css'
})
export class InputFileComponent {

  selectedFile: any = null;

  constructor(private service: JreaderService) { }

  onFileSelected(event: any): void {
    this.service.sendFileSelected(event);
    this.selectedFile = this.service.selectedFile;
  }

}