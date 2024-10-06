import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import { useAuthContext } from "../contexts/AuthContext";
import postOrder from "../utils/services/postOrder";

const Checkout = () => {
  // form data
  const [adress, setAdress] = useState("");
  const [addition, setAddition] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [payment, setPayment] = useState("invoice");

  const [order, setOrder] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [count, setCount] = useState(3);
  const { userData } = useAuthContext();

  const { cart, setCart, total } = useCartContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      postOrder(userData.data.id, total, order)
        .then((data) => {
          setSuccess(true);
        })
        .catch((error) => console.error(error));
    }
    setIsSubmitted(false);
  }, [isSubmitted]);

  //if success, show message and start countdown
  let countdown;
  useEffect(() => {
    if (success) {
      countdown = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
      setCart([]);
    }
  }, [success]);

  //when countdown ends, redirect to home
  useEffect(() => {
    if (count <= 0) {
      clearInterval(countdown);
      navigate("/");
    }
  }, [count]);

  const handleOrder = (e) => {
    setIsSubmitted(true);
    e.preventDefault();

    const orderedProducts = [];
    cart.map((product) =>
      orderedProducts.push({
        id: product.product_id,
        amount: product.product_amount,
        singlePrice: product.product_price,
      })
    );
    setOrder({
      adress,
      addition,
      city,
      postalCode,
      country,
      payment,
      orderedProducts,
    });
  };

  return (
    <div className="checkout" onSubmit={handleOrder}>
      {success ? (
        <p className="order-success">
          Success! Thank you for your order! You will be redirected in{" "}
          <b>{count}</b> seconds.
        </p>
      ) : (
        <form>
          <p>
            <b>Total:</b> {total} $
          </p>
          <h2>Shipping Adress</h2>
          <input
            value={adress}
            name="adress"
            type="text"
            placeholder="adress"
            onChange={(e) => setAdress(e.target.value)}
          />
          <input
            value={addition}
            name="addition"
            type="text"
            placeholder="adress (additional)"
            onChange={(e) => setAddition(e.target.value)}
          />
          <input
            value={city}
            name="city"
            type="text"
            placeholder="city"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            value={postalCode}
            name="postalCode"
            type="number"
            placeholder="postal code"
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            value={country}
            name="country"
            type="text"
            placeholder="country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <h2>Payment method</h2>
          <select name="payment">
            <option value="invoice" defaultValue>
              Invoice
            </option>
          </select>
          <button type="submit">Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
