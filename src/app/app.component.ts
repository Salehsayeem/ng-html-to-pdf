import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  previewPDF() {
    const doc = new jsPDF('p', 'mm', 'a4');
    const element = this.elementRef.nativeElement.querySelector('#ss');
    html2canvas(element).then((canvas) => {
      console.log(canvas)
      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 10, 10, doc.internal.pageSize.getWidth() - 20, 0);
      doc.save('preview.pdf');
    });
  }
}
