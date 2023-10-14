import style from "./style.module.css"

function UInput({name,id,label,placeholder,type}) {
    return (
        <>
            <label htmlFor={id} style={{ margin: "20px" }} className={style["label"]}>{label}</label>
            <input type={type} id={id} name={name} placeholder={placeholder} style={{ margin: "20px" }}></input>
        </>
    );
}

export default UInput;