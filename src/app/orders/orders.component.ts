import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from "lodash";
import { orderFormValidation } from '../form/common';
import { FormClass } from '../form/formclass';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent extends FormClass implements OnInit {

  ordersListData: any = [];
  orderManagementForm: FormGroup;
  private validationElem = new orderFormValidation();
  dateValue: any;
  closeResult: string;
  isEdit: boolean = false;
  indexForEditingAnOrder: any;
  filters: any = {};
  dataList: any = [];

  public orderFormValidationModel: any = {
    Id: this.validationElem.Id,
    dueDate: this.validationElem.dueDate,
    name: this.validationElem.name,
    address: this.validationElem.address,
    contactNumber: this.validationElem.contactNumber,
    amount: this.validationElem.amount,
  };

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
    ) { 
      super();
    }

  ngOnInit() {
    this.loadFormData();
    this.ordersListData.push(
      {
        'Id': 110,
        'due_date': '2021-06-24',
        'name': 'Nancy',
        'address': 'Road no. 15, Franklin',
        'contact_number': 999999999,
        'amount': 20000,
      },
      {
        'Id': 111,
        'due_date': '2021-06-26',
        'name': 'Jim',
        'address': 'Eastern Arlington',
        'contact_number': 9898988899,
        'amount': 1600,
      },
      {
        'Id': 112,
        'due_date': '2021-08-10',
        'name': 'Jay',
        'address': 'Sector 8, Georgetown',
        'contact_number': 9010909090,
        'amount': 3695,
      },
      {
        'Id': 113,
        'due_date': '2021-06-17',
        'name': 'dathlon',
        'address': 'Street no.2, GreenVille',
        'contact_number': 8688456456,
        'amount': 9894,
      },
      {
        'Id': 114,
        'due_date': '2021-09-22',
        'name': 'Shivang',
        'address': 'Phenix City',
        'contact_number': 7776668880,
        'amount': 8022,
      },
      {
        'Id': 115,
        'due_date': '2021-06-17',
        'name': 'Kewal',
        'address': 'Berkeley City',
        'contact_number': 9696969696,
        'amount': 9999,
      },
      {
        'Id': 116,
        'due_date': '2021-07-14',
        'name': 'manish',
        'address': 'Benton Street',
        'contact_number': 6600666600,
        'amount': 111,
      },
      {
        'Id': 117,
        'due_date': '2021-06-22',
        'name': 'Vishnu',
        'address': 'Franklin',
        'contact_number': 9492323103,
        'amount': 60000,
      },
      {
        'Id': 118,
        'due_date': '2021-06-21',
        'name': 'kivaan',
        'address': 'Culver City',
        'contact_number': 1111111111,
        'amount': 56465,
      },
      {
        'Id': 119,
        'due_date': '2021-06-30',
        'name': 'varma',
        'address': 'Southern Magnolia',
        'contact_number': 5102236999,
        'amount': 8999,
      },
      {
        'Id': 120,
        'due_date': '2021-07-02',
        'name': 'Girwan',
        'address': 'California',
        'contact_number': 8608608600,
        'amount': 19999,
      },
      {
        'Id': 121,
        'due_date': '2021-06-22',
        'name': 'Vishnu',
        'address': 'Franklin',
        'contact_number': 9492323103,
        'amount': 60000,
      },
      {
        'Id': 122,
        'due_date': '2021-06-21',
        'name': 'kivaan',
        'address': 'Culver City',
        'contact_number': 1111111111,
        'amount': 56465,
      },
      {
        'Id': 123,
        'due_date': '2021-06-30',
        'name': 'varma',
        'address': 'Southern Magnolia',
        'contact_number': 5102236999,
        'amount': 8999,
      },
      {
        'Id': 124,
        'due_date': '2021-07-02',
        'name': 'Girwan',
        'address': 'California',
        'contact_number': 8608608600,
        'amount': 19999,
      },
      {
        'Id': 125,
        'due_date': '2021-06-22',
        'name': 'Vishnu',
        'address': 'Franklin',
        'contact_number': 9492323103,
        'amount': 60000,
      },
      {
        'Id': 126,
        'due_date': '2021-06-21',
        'name': 'kivaan',
        'address': 'Culver City',
        'contact_number': 1111111111,
        'amount': 56465,
      },
      {
        'Id': 127,
        'due_date': '2021-06-30',
        'name': 'varma',
        'address': 'Southern Magnolia',
        'contact_number': 5102236999,
        'amount': 8999,
      },
      {
        'Id': 128,
        'due_date': '2021-07-02',
        'name': 'Girwan',
        'address': 'California',
        'contact_number': 8608608600,
        'amount': 19999,
      },
    );
    this.dataList = this.ordersListData;
  }

  loadFormData(){
    this.orderManagementForm = this.formBuilder.group({
      Id: ["", Validators.required],
      dueDate: ["", Validators.required],
      name: ["", Validators.required],
      address: ["", Validators.required],
      contactNumber: ["", Validators.required],
      amount: ["", Validators.required],
    });
    this.orderManagementForm.valueChanges.subscribe((data) => {
      this.orderFormValidationModel = super.onValueChanged(
        this.orderManagementForm,
        this.orderFormValidationModel
      );
    });
  }

  edit(data, i){
    this.indexForEditingAnOrder = i;
    this.isEdit = true;
    let date;
    date = data.due_date.split('-')
    this.orderManagementForm.get('Id').setValue(data.Id);
    this.orderManagementForm.get('dueDate').setValue({'year':parseInt(date[0]), 'month': parseInt(date[1]), 'day':parseInt(date[2])});
    this.orderManagementForm.get('name').setValue(data.name);
    this.orderManagementForm.get('address').setValue(data.address);
    this.orderManagementForm.get('contactNumber').setValue(data.contact_number);
    this.orderManagementForm.get('amount').setValue(data.amount);
  }

  deleteRecord(item){
    if (window.confirm("Are you sure you want to delete the record?")) {
     if(item){
       this.ordersListData.filter((order)=>{
         if(item.Id == order.Id){
          this.ordersListData.splice(_.findIndex(this.ordersListData, order),1)
         }
       })
     }  
    }
  }

  updateOrders(){
    let ID = parseInt(this.orderManagementForm.get('Id').value);
    let date = this.orderManagementForm.get('dueDate').value;
    date.month = date.month < 10 ? '0' + date.month : date.month;
    date.day = date.day < 10 ? '0' + date.day : date.day;
    if(this.isEdit){
      this.ordersListData[this.indexForEditingAnOrder].Id = ID;
      this.ordersListData[this.indexForEditingAnOrder].due_date = date.year + '-' + date.month + '-' + date.day;
      this.ordersListData[this.indexForEditingAnOrder].name = this.orderManagementForm.get('name').value;
      this.ordersListData[this.indexForEditingAnOrder].address = this.orderManagementForm.get('address').value;
      this.ordersListData[this.indexForEditingAnOrder].contact_number = parseInt(this.orderManagementForm.get('contactNumber').value);
      this.ordersListData[this.indexForEditingAnOrder].amount = parseInt(this.orderManagementForm.get('amount').value);
    } else {
      this.ordersListData.push({
        'Id': parseInt(this.orderManagementForm.get('Id').value),
        'due_date': date.year + '-' + date.month + '-' + date.day,
        'name': this.orderManagementForm.get('name').value,
        'address': this.orderManagementForm.get('address').value,
        'contact_number': parseInt(this.orderManagementForm.get('contactNumber').value),
        'amount': parseInt(this.orderManagementForm.get('amount').value)
      })
    }
    this.orderManagementForm.reset();
    this.dataList = this.ordersListData;
  }

  addNewOrder(){
    this.isEdit=false;
    this.orderManagementForm.reset();
  }

  open(event) {
    this.modalService.open(event)
    document.getElementById("Id").focus();
  }

  clearFields(){
    this.orderManagementForm.reset();
  }

  filter(data){
    let keys =  Object.keys(this.filters);
    let arr = [];
    if(keys && keys.length > 0){
      for(let i=0; i<keys.length; i++){
        this.ordersListData.filter((order)=>{
          if(order[keys[i]] == this.filters[keys[i]]){
            arr.push(order);
          }
        })
      }
      const uniqueList = [...new Set(arr.map(item => item.Id))];
      let newArray = [];
      uniqueList.forEach((x)=>{
        this.ordersListData.filter((y)=>{
          if(x == y.Id){
            newArray.push(y);
          }
        })
      })
      if(newArray.length > 0){
        this.ordersListData = newArray;
      } else {
        this.ordersListData = this.dataList;
      }
    } else {
      this.ordersListData = this.dataList;
    }
  }
}
