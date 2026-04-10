import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearCart, removeFromCart } from './cartSlice';

const Cart = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);

    const totalQuantity = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0  
    );

    const handleCheckout = () => {
        dispatch(clearCart());
        alert('Thank you for your purchase!');
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.title} width={80} />
                            <h4>{item.title}</h4>
                            <p>Count: {item.quantity}</p>
                            <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                        </div>
                    ))}
                    
                    <hr />
                    <p><strong>Total Products:</strong> {totalQuantity}</p>
                    <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
                    <button onClick={handleCheckout}>Checkout</button>
                </>
            )}
        </div>
    );
};

export default Cart;