import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  // product!: IProduct;
  // productForm = this.formbuilder.group({
  //   name:['',[Validators.required, Validators.minLength(4)]],
  //   price:[0,],
  // })
  // constructor(
  //   private productService: ProductService,
  //   private route: ActivatedRoute,
  //   private formBuilder: FormBuilder
  // ){
  //   this.route.paramMap.subscribe(param =>{
  //     const id = Number(param.get('id'));
  //     this.productService.getProductById(id).subscribe(product =>{
  //       this.product = product
  //       this.productForm.patchValue({
  //         name:product.name,
  //         price:product.price
  //       })
  //     },error =>console.log(error.message))
  //   })
  // }

}
