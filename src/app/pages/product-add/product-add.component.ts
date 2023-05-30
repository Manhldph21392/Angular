import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
productForm = this.formBuilder.group({
  name:['', [Validators.required, Validators.minLength(4)]],
  price:[0],
})
constructor(
  private productServive: ProductService,
  private formBuilder: FormBuilder
){}
onHandleSubmit(){
  if(this.productForm.valid){
    const product:IProduct ={
      name: this.productForm.value.name || "",
      price: this.productForm.value.price ||0,
    }
    this.productServive.addProduct(product).subscribe(product =>{
      console.log("Thanh cong", product)
    })
  }
}
}
