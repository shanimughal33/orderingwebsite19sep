import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab } from '../stores/cart';
import { Link } from 'react-router-dom';

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  // Conditional rendering: only render CartTab when statusTab is true
  if (!statusTab) return null;

  return (
    <div className={`fixed right-0 top-0 z-50 w-[350px] lg:w-[450px] h-full bg-white shadow-xl rounded-l-3xl flex flex-col 
        transition-transform duration-500 ease-in-out transform ${statusTab ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-5 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-tl-3xl">
        <h2 className="text-xl font-semibold font-cursive">Your Cart</h2>
        <button
          onClick={handleCloseTabCart}
          className="px-4 py-1 text-purple-500 transition bg-white rounded-full hover:bg-purple-100 hover:scale-105"
        >
          Close
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 p-5 space-y-4 overflow-y-auto">
        {carts.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          carts.map((item, key) => <CartItem key={key} data={item} />)
        )}
      </div>

      {/* Footer (Checkout & Total) */}
      <div className="p-5 bg-gray-100 rounded-b-3xl">
        <div className="flex items-center justify-between text-lg font-semibold text-gray-700">
          <p>Total Items: {carts.reduce((acc, item) => acc + item.quantity, 0)}</p>
         
        </div>

        <div className="flex mt-4 space-x-2">
         
        <Link to="/fulladdtocart" className="w-1/2">
            <button className="w-full px-4 py-2 text-white transition-all bg-blue-600 rounded-sm hover:bg-blue-800">
              Continue Shopping
            </button>
          </Link>
          <Link to="/Checkout" className="w-1/2">
            <button className="w-full px-4 py-2 text-white transition-all bg-blue-600 rounded-sm hover:bg-blue-800">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTab;
