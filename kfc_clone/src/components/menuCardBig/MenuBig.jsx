export const MenuBig = (props) => {
    return <div>

        <img src={props.img} alt="" />
        <h4>{props.title}</h4>
        <h6>{props.type}</h6>
        <h5>₹{props.price}</h5>
        <h6>{ props.desc}</h6>




    </div>
}