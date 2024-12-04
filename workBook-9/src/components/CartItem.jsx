import { useDispatch } from "react-redux";
import {ChevronDown, ChevronUp} from "../constants/icons";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";
import styles from "./cartItem.module.css";

const CartItem = ({ id, title, price, img, amount, singer}) => {
    const dispatch = useDispatch();

    return(
        <article className={styles.cart_item}>
            <img src={img} alt={`${title} 이미지`} />
            <div className={styles.infoContainer}>
                <h4>
                    {title} | {singer}
                </h4>

                <h4 className={styles.item_price}>\ {price}</h4>
            </div>
            <div>
                <button className={styles.amount_btn} onClick={() => dispatch(increase(id))}>
                    <ChevronUp />
                </button>
                <p className={styles.amount}>{amount}</p>

                <button className={styles.amount_btn} 
                onClick={() => {
                    if (amount === 1){
                        dispatch(removeItem(id));
                        return;
                    }
                    dispatch(decrease(id));
                }}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    );
};
export default CartItem;