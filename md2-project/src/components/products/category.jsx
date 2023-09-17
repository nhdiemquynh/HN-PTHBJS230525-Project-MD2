import React from "react";
import { dataProduct } from "../data";

function Category() {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {dataProduct.map((item, index) => (
          <div class="col-md-3" key={index}>
            <a href={"/products/"+item.id}>
              <div class="card card_product">
                <img src={item.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title name_product">{item.name}</h6>
                  <h6 class="card-title name_product">{item.price}</h6>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="button_seeall">
        <button type="button" class="btn btn-outline-secondary">
          Xem tất cả
        </button>
      </div>
    </div>
  );
}

export default Category;
