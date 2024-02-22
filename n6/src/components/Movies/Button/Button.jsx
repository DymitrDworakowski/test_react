import css from './Button.module.css';
const Button = ({ onClick }) => {
    return (
        <div>
            <button className={css.load} type="button" onClick={onClick}>Load more</button>
        </div>
    )
}


export default Button;