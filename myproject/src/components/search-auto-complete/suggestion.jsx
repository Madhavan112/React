import c from "./style.module.css"

export default function Suggestion({searchName,onHandleSelectName}){
    return (
        <div>
            <ul className={c.container}>
                {searchName.map((item,index)=> <li key={index} onClick={()=>{onHandleSelectName(item.firstName)}}>{item.firstName}</li> )}
            </ul>
        </div>
    )
}