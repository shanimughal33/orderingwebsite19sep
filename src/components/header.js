import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <header className='flex items-center justify-between mb-5'>
      <div
        className='relative flex items-center justify-center w-10 h-8 pt-2 bg-transparent rounded-full'
        onClick={handleOpenTabCart}
      >
        <div className='pt-2 pr-2 lg:pr-0'>
          <button className="flex items-center px-4 py-2 text-white bg-black border border-black rounded-md">
            <p className='mr-2 font-semibold'>Cart</p>
            <BsFillCartFill size={20} />
          </button>
        </div>
        <span className='absolute flex items-center justify-center w-5 h-5 text-sm text-white bg-red-500 rounded-full -right-3 top-7'>
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
