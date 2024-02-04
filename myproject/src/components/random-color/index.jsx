import { useEffect, useState } from "react"


export default function RandomColor(){
   
    function randomColor(length){
        return Math.floor(Math.random()*length);
    }
    function handleHex(){
        let tempColor='#'
        const option =['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']
        for(let i=0;i<6;i++){
            tempColor +=option[randomColor(16)]
        }
        setColor(tempColor)
    }
    function handleRGB(){
        let r =randomColor(256)
        let g =randomColor(256)
        let b =randomColor(256)
        setColor(`rgb(${r},${g},${b})`)
    }
    const [typeColor,setTypeColor] =useState("hex")
    const [color,setColor] = useState("#000000")
    useEffect(()=>{
       typeColor==="hex" ? handleHex(): handleRGB()
    },[typeColor])

    return <div style={{backgroundColor: color,width:"100vw", height:"100vh"}}>
        <div style={{display :"flex",justifyContent:"center",width:"100vw"}}>
        <button onClick={()=>{ setTypeColor("hex")}}>Create Hex Color</button>
        <button onClick={()=>{setTypeColor("rgb")}}>Create RGB Color</button>
        <button onClick={()=>{typeColor==="hex" ? handleHex(): handleRGB()}} >Generate Random Color</button>
        </div>
        <div style={{ fontSize:"50px",color:"white",display:"flex",widht:"100vw",height:"80vh",justifyContent:"center",alignItems:"center",flexDirection:"column" ,gap:"2px"}}>
            <h1>{typeColor}</h1>
            <h1>{color}</h1>
        </div>
    </div>
}