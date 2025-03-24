import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-add-voucher',
  standalone: false,
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {
  constructor(private micro_service: ServiceService) { }
  ngOnInit() { }
  AddNewVoucher(data: any) {
    this.micro_service.Post_Voucher(data).subscribe(() => { alert("Added Sucssfully") });
  }
}
