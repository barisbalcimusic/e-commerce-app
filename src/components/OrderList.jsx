import React, { useEffect, useState } from "react";
import getOrdersByUser from "../utils/services/getOrdersByUser";
import { useAuthContext } from "../contexts/AuthContext";
import getProductsByOrder from "../utils/services/getProductsByOrder";
import { useRenderContext } from "../contexts/RenderContext";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [detailsOpened, setDetailsOpened] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);

  const { userData } = useAuthContext();
  const { setRenderedComponent } = useRenderContext();

  useEffect(() => {
    if (selectedOrder) {
      getProductsByOrder(selectedOrder)
        .then((data) => {
          setOrderDetails(data);
        })
        .catch((err) => console.error(err));
    }
  }, [selectedOrder]);

  useEffect(() => {
    getOrdersByUser(userData.data.id)
      .then((orders) => setOrders(orders))
      .catch((error) => console.error(error));
  }, []);

  const handleDetailsButton = (e) => {
    setDetailsOpened(true);
    setSelectedOrder(e.target.value);
  };

  return (
    <div>
      <h1>My Orders</h1>

      <button onClick={() => setRenderedComponent(null)}>back</button>
      <table>
        <thead>
          <tr className="order-tr">
            <th className="order-th">Order Nr.</th>
            <th className="order-th">Date</th>
            <th className="order-th">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <>
                <tr className="order-tr">
                  <td className="order-td">{order.order_id}</td>
                  <td className="order-td">{order.order_date}</td>
                  <td className="order-td">{order.total_amount}$</td>
                  <td className="order-td">
                    <button
                      value={order.order_id}
                      onClick={handleDetailsButton}>
                      Details
                    </button>
                  </td>
                </tr>
                {detailsOpened && Number(selectedOrder) === order.order_id && (
                  <>
                    {" "}
                    <tr className="product-tr">
                      <th className="product-th">Amount</th>
                      <th className="product-th">Product</th>
                      <th className="product-th" colSpan={2}>
                        Price
                      </th>
                    </tr>
                    {orderDetails.map((product) => {
                      return (
                        <tr className="product-tr">
                          <td className="product-td">{product.quantity}</td>
                          <td className="product-td">
                            {product.product_title}
                          </td>
                          <td className="product-td" colSpan={2}>
                            {product.product_price}$
                          </td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
