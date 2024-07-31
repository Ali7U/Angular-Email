import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  @Output() dismiss = new EventEmitter();
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() visible: boolean = false;
  @Input() modalTitle: string;
  @Input() label: string;
  @Input() isReply: boolean

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);    
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  onDismissClick() {
    this.dismiss.emit();
    this.hideDialog();
  }

  showDialog() {
    this.visible = true;
    this.visibleChange.emit(this.visible);
  }

  hideDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
