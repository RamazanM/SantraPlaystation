import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../../services/options.service';
import { DataService } from '../../services/data.service';
import { Message } from '../../models/message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public phones: Array<String> = new Array<String>('00000000000', '00000000000');
  public isim: String;
  public mail: String;
  public mesaj: String;

  constructor(private optionsService: OptionsService, private dataService: DataService) { }

  ngOnInit() {
    this.optionsService.getPhones.phone1().subscribe( (p: any) => this.phones[0] = p.value);
    this.optionsService.getPhones.phone2().subscribe( (p: any) => this.phones[1] = p.value);
  }

  validateMessage() {
    if (
      this.isim !== null &&
      this.isim !== ''  &&
      this.mail !== null &&
      this.mail !== '' &&
      this.mesaj !== null &&
      this.mesaj !== ''
    ) { return true; } else {  alert('Lütfen girdiğiniz verileri kontrol ediniz...'); return false; }
  }

  sendMessage() {
    if (this.validateMessage()) {
      this.dataService.sendMessage(new Message(this.isim, this.mail, this.mesaj));
    }
  }


}
