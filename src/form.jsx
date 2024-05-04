import { useState } from "react";

function form(){
    // const [firsname, setFirstname] = useState('Loic')
    // const changeV = (e) => {
    //     setFirstname(e.target.value)
    // }

    const [checked, setchecked] = useState(true)
    const [check2, setchecked2] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(new FormData(e.target))
    }

    const handleCheck = (e) =>{
        setchecked(!checked)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <SeconCheck checked={check2} onchecked = {setchecked2} />
                {/* <input onChange={changeV} type="name" name="firsname" value={firsname}/> */}
                <input type="name" name="firstname" defaultValue="akezou"/>
                <input onChange={handleCheck} checked ={checked} type="checkbox"/>
                {/* <button disabled={!checked2}>Send</button> */}
                <button disabled={!check2}>Send</button>
            </form>
        </>
    );
}
function SeconCheck({chekk, onchecked}){
    return<>
        <label>
            <input checked={chekk} type="checkbox" onChange={(e) => onchecked(e.target.checked)} />
            accepter les conditions d'utilisation2
        </label>
    </>
}

export default form;