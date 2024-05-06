/***
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s : string)} onChanged 
 */
export default function Imput({value, placeholder, onChange}){
    return <>
        <input type="text" className="form-control" placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)}/>
    </>
}