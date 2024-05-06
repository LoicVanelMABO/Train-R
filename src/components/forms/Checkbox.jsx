export default function Checkbox({checked, onChange, elt, id}){
    return <div className="form-check">
        <input id={id} type="checkbox" checked={checked} onChange={(e)=>onChange(e.target.checked)}/>
        <label htmlFor={id} className="form-check-label">{elt}</label>
    </div>
}