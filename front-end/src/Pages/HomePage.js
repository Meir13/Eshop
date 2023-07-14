import data from "../data";

function HomePage() {
  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div key={product.token} className="product">
            <img alt={product.name} src={product.image} width={200}></img>
            <p>{product.name}</p>
            <p>{product.price}$</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default HomePage;
