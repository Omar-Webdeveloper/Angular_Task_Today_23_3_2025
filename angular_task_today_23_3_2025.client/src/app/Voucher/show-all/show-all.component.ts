import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-show-all',
  standalone: false,
  templateUrl: './show-all.component.html',
  styleUrl: './show-all.component.css'
})
export class ShowAllComponent {
  constructor(private micro_service: ServiceService) { }
  ngOnInit() {
    this.All_Vouchers();
  }
  Voucher_Containter: any;
  All_Vouchers() {
    console.log("All Vouchers");
    this.micro_service.Get_Voucher().subscribe((data) => { console.log(data); this.Voucher_Containter = data; console.log(this.Voucher_Containter) })
  }
}
