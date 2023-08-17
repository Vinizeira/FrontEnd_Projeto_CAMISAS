import { Component, Input, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title!: string;
  @Input() msg!: string ;
  @Input() cancelTxt = 'Cancelar';
  @Input() saveTxt = 'Salvar Alterações';



  constructor(public bsModalRef: BsModalRef) { }
  mostrar: boolean = false

  ngOnInit() {
  }

  onClose(){
    this.bsModalRef.hide();
  }

  toggle () {
    this.mostrar = !this.mostrar;
  }

}
