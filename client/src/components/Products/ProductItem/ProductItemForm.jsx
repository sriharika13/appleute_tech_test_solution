import './ProductItemForm.css'

export default function ProductItemForm({ onAddClick, qty }) {
    return <>
        <div className="input">
            <label htmlFor="increment">Amount</label>
            <input id="increment" type='text' disabled value={qty} />
        </div>
        <button onClick={onAddClick}>+ Add</button>
    </>
}