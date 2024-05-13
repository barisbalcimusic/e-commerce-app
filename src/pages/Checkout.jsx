import { useEffect, useState } from "react";
import { useCartContext } from "../contexts/CartContext";
import { json } from "react-router-dom";

const Checkout = () => {
  const { total } = useCartContext();
  const [formData, setFormData] = useState(null);

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
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      adress1: e.target.children["adress"].value,
      addition: e.target.children["addition"].value,
      city: e.target.children["city"].value,
      postalCode: e.target.children["postalCode"].value,
      country: e.target.children["country"].value,
    });
  };

  return (
    <div className="checkout" onSubmit={handleSubmit}>
      <form>
        <p>
          <b>Total:</b> {total} $
        </p>
        <h2>Shipping Adress</h2>
        <input name="adress" type="text" placeholder="adress" />
        <input name="addition" type="text" placeholder="adress (additional)" />
        <input name="city" type="text" placeholder="city" />
        <input name="postalCode" type="number" placeholder="postal code" />
        <input name="country" type="text" placeholder="country" />
        <h2>Payment method</h2>
        <select name="" id="">
          <option value="invoice" defaultValue>
            Invoice
          </option>
        </select>
        <button type="submit">Order</button>
      </form>
    </div>
  );
};

export default Checkout;
