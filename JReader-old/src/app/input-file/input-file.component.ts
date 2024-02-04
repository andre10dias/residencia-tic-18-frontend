import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.css'
})
export class InputFileComponent {

  @Output() jsonObject: any  = new EventEmitter<any>();

  selectedFile: any = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  
    if (this.selectedFile) {
      const fr = new FileReader();
  
      fr.onload = () => {
        const content = fr.result as string;
  
        try {
          const jObject = JSON.parse(content);
  
          // Criar um objeto para armazenar informações adicionais
          const fileInfo = {
            name: this.selectedFile.name,
            content: content
          };
  
          this.jsonObject.emit(jObject);
          this.selectedFile = fileInfo;
        } catch (error) {
          console.error("Falha ao carregar arquivo: " + error);
        }
      };
  
      fr.readAsText(this.selectedFile);
    }
  }
  

}
