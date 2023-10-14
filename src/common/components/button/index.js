function UButton(props) {
    return <span style={{ padding: "5px" }}>
        <button className={`btn btn-${props.type}`}  onClick={props.onclick()}>
            {props.children}
        </button>
    </span>
}
export default UButton;
