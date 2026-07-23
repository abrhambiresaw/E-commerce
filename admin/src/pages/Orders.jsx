import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

function Orders({ token }) {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } },
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', {orderId,status:event.target.value},{ headers:{token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[0.5fr_3fr_1fr_1fr_1fr] items-center gap-6 border border-gray-300 p-5 my-4 text-sm"
          >
            
            <img className="w-14" src={assets.parcel_icon} alt="" />

            <div>
              {order.items.map((item, index) => (
                <p className="py-0.5" key={index}>
                  {item.name} x {item.quantity}
                  <span className="font-medium"> {item.size}</span>
                  {index !== order.items.length - 1 && ","}
                </p>
              ))}

              <p className="mt-3 mb-2 font-bold">
                {order.address.firstName} {order.address.lastName}
              </p>

              <p>{order.address.street}</p>

              <p>
                {order.address.city}, {order.address.state},{" "}
                {order.address.country}, {order.address.zipcode}
              </p>

              <p>{order.address.phone}</p>
            </div>

            {/* Order Details */}
            <div>
              <p>Items : {order.items.length}</p>
              <p className="mt-3">Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? "Done" : "Pending"}</p>
              <p>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>

            
            <p className="font-semibold">
              {currency}
              {order.amount}
            </p>

            {/* Status */}
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="p-2 font-semibold">
              <option>Order Placed</option>
              <option>Packing</option>
              <option>Shipped</option>
              <option>Out for delivery</option>
              <option>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
