import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-voucher',
  standalone: false,
  templateUrl: './edit-voucher.component.html',
  styleUrl: './edit-voucher.component.css'
})
export class EditVoucherComponent {
  Voucher_Containter: any;
  Vocher_id: any;
  constructor(private micro_service: ServiceService, private _active: ActivatedRoute) { }
  ngOnInit() {
    
    this.Vocher_id = this._active.snapshot.paramMap.get('id');
    this.micro_service.Get_Voucher_based_ID(this.Vocher_id).subscribe((data) => { console.log(data); this.Voucher_Containter = data; console.log(this.Voucher_Containter); })
  }
  
 
   
    
  
  
  Edit_Voucher(data: any) {
   
    this.micro_service.Put_Voucher(this.Vocher_id, data).subscribe(() => {alert('Edited') })
  }

}
