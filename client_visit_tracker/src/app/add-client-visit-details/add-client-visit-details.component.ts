import { Component,OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-add-client-visit-details',
  standalone: true,
  imports: [CommonModule,MatInputModule,FormsModule,MatFormFieldModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatToolbarModule,ReactiveFormsModule,MatCardModule,MatRadioModule,MatIconModule],
  templateUrl: './add-client-visit-details.component.html',
  styleUrls: ['./add-client-visit-details.component.css' ]
})
export class AddClientVisitDetailsComponent  {
  visitTypes = ['Internal', 'External'];
  visitStatuses = ['Visit Completed', 'Visit Planned', 'In Progress'];
  periods = ['Q1', 'Q2', 'Q3', 'Q4'];
  visitLocations = ['Chennai', 'Coimbatore', 'Kochi', 'Pune'];
  rescheduledFlags = ['Yes', 'No'];

  visitType: string='';
  visitStatus: string='';
  period: string='';
  fromDate: any='';
  toDate: any='';
  visitLocation: string='';
  rescheduledFlag: string='';
  operatingCompany: string='';
  purpose: string='';
  
  clientDetails = [{ name: '', designation: '' }];

  addRow() {
    this.clientDetails.push({ name: '', designation: '' });
  }

  removeRow(index: number) {
    this.clientDetails.splice(index, 1);
  }

  async AddDetails() {
    console.log(  this.visitType,
    this.visitStatus,
    this.period,
    this.fromDate,
    this.toDate,
    this.visitLocation,
    this.rescheduledFlag,
    this.operatingCompany,
    this.purpose);
    console.log(this.clientDetails);
    for(let i=0;i<this.clientDetails.length;i++){
      let body={}
    }
  }
}