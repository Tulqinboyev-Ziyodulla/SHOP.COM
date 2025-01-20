import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../../redux/slice/cartSlice';
import { RootState } from '../../redux/store';
import { MdDelete } from "react-icons/md";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncrease = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrease = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      {cartItems.length === 0 ? (
        <img 
          className="m-auto w-[600px]" 
          src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg"
          alt="Empty Cart" 
        />
      ) : (
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <ul className="p-4 bg-gray-100 rounded-lg flex-1">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row bg-white p-6 rounded-xl mb-6"
              >
                <div className="flex items-center gap-6">
                  <div className="w-[400px]">
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-black font-bold text-lg">{item.price}$</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="text-lg px-4 py-2 rounded-full transition-all"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="text-lg px-4 py-2 rounded-full transition-all"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-2xl"
                  >
                    <MdDelete />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center sm:items-start gap-6 sm:gap-8 mt-8 sm:mt-0">
            <button
              onClick={handleClearCart}
              className="bg-black text-white px-8 py-3 rounded-xl w-full sm:w-auto transition-all"
            >
              Clear Cart
            </button>
            <p className="text-xl font-bold mt-4 sm:mt-0 text-center sm:text-left text-gray-900">
              Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
