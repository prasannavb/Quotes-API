import "./button.css"
const Button=(props)=>
{
    const {data,category,Setcategory}=props;
    return(
        <>
                <button className="buttons" onClick={()=>{Setcategory(data)}}>{data}</button>
        </>
    )
}

export default Button;