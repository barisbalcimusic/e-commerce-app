import { useEffect, useState } from "react";
import { useCartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const Checkout = () => {
  const { cart, total } = useCartContext();
  const [formData, setFormData] = useState(null);
  const [success, setSuccess] = useState(false);
  //empty the cart
  const { setCart } = useCartContext();
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  //if not logged in, redirect to login
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  });

  useEffect(() => {
    if (formData) {
      const fetchData = async () => {
        try {
          const res = await fetch("https://formspree.io/f/xrgndllw", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          setSuccess(true);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [formData]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = [];
    cart.map((product) =>
      order.push({ id: product.id, amount: product.amount })
    );
    setFormData({
      adress1: e.target.children["adress"].value,
      addition: e.target.children["addition"].value,
      city: e.target.children["city"].value,
      postalCode: e.target.children["postalCode"].value,
      country: e.target.children["country"].value,
      payment: e.target.children["payment"].value,
      order: order,
    });
  };

  return (
    <div className="checkout" onSubmit={handleSubmit}>
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
          <input name="adress" type="text" placeholder="adress" />
          <input
            name="addition"
            type="text"
            placeholder="adress (additional)"
          />
          <input name="city" type="text" placeholder="city" />
          <input name="postalCode" type="number" placeholder="postal code" />
          <input name="country" type="text" placeholder="country" />
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
