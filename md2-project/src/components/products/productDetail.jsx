import React from "react"
import {useParams} from "react-router-dom"

function ProductDetail() {
    const {productId} = useParams()
    
    return (
        <div>
            <p>Nho lam product detail</p>           
        </div>
    )
}

export default ProductDetail