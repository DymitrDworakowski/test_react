import './Button.css';
const Button = ({ onClick }) => {
    return (
        <div>
            <button className='load' type="button" onClick={onClick}>Load more</button>
        </div>
    )
}


export default Button;