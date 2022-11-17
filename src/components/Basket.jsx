function Basket(props) {
  function getTotal() {
    let total = 0;
    props.cart.forEach(item=> {
      total+=item.amount * item.price
    })
    return total;
  }
  return (
    <section className="Basket">
      <ul>
        {props.cart.map((item) => (
          <li key={item.id}>
            {item.productdisplayname} x {item.amount}, {item.amount * item.price},-
          <button>Add to basket</button>
          </li>
        ))}

        <button onClick={() => props.removeFromCart(item.id)}>Buy now</button>
      </ul>
      <h3>Total: {getTotal()},-</h3>
      <button>Buy now</button>
    </section>
  );
}

export default Basket;
