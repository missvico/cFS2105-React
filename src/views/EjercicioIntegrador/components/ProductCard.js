
function ProductCard ({product}) {
    return(
            <div className="container">
    <div className="images">
    <img src={product.image_link}  />
    </div>
    <div className="product">
        <p>{product.brand}</p>
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <p className="desc">{product.description}</p>
        <div className="buttons">
        <button className="add">Add to Cart</button>
        <button className="like"><span>♥</span></button>
        </div>
    </div>
    </div>

    )
}

export default ProductCard;