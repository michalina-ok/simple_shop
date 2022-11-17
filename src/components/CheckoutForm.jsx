import { useRef, useState } from 'react'
import { insertOrder } from "../modules/db";

function CheckoutForm(props) {
  const theForm = useRef(null);
  const [paymentCompleted, setPaymentComplete] = useState(false)
  
  async function submit(e) {
    e.preventDefault();
const response = await insertOrder()

    theForm.current.elements.name.value
    insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      basket: props.cart,
    });
    if (response && response.length) {
      setPaymentCompleted(true);
    }
  }
  return (
    <>
    {paymentCompleted ? '<p>Thank you</p>' : (  <form onSubmit={submit} ref={theForm}>
      <div className="form-control">
        <label htmlFor="form-name">Name</label>
        <input required type="text" name="name" id="form-name"></input>
      </div>
      <div className="form-control">
        <label htmlFor="form-email">E-mail</label>
        <input required type="email" name="email" id="form-email"></input>
      </div>
      <div className="form-control">
        <label htmlFor="form-address">Address</label>
        <textarea required name="address" id="form-address"></textarea>
      </div>
      <button>Pay</button>
    </form>)}
    </>
  
  );
}

export default CheckoutForm;
