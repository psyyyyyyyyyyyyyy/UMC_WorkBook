import CartItem from "./CartItem";
import {useDispatch, useSelector} from "react-redux";
import cartItems from "../constants/cartItems";
import { clearCart } from "../features/cart/cartSlice";
import styles from "./cartContainer.module.css";

const CartContainer = () => {
    const {cartItems, total, amount} = useSelector((store) => store.cart );
    const dispatch = useDispatch();
    return(
        <section className={styles.cart}>
            <header>
                <h2>당신이 선택한 음반</h2>
            </header>
            <div>
                {cartItems.map((item)=>{
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div className={styles.cart_total}>
                    <h4>
                        총 가격 <span>\ {total}원</span>
                    </h4>
                </div>
                <button className={styles.clear_btn} 
                onClick={() => {
                    dispatch(clearCart());
                }}>
                    장바구니 초기화
                </button>
            </footer>
        </section>
    );
};

export default CartContainer;