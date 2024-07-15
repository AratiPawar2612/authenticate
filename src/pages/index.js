"use client"
import Link from "next/link";
import { useState } from "react";

export default function HomePage
(){
    const [name , setName] = useState("Happy Thoughts")
    

    // let name ="Happy Thoughts";

    const changeName = () =>{
      setName("Tejgyan")
    }

    



    return(
        <main>
           
            <h1>Home Page</h1>
            <img className="logo" src="./download.jpeg"></img>

            <p>{name}</p>

            <button style={{height:"50px",width:"80px",backgroundColor:"black",color:"white",borderRadius:"50px"}} onClick={changeName}>Change name</button>
            <br/>
            <br/>
            
            <Link href="/about">About Page</Link>

         
            
           
        

        </main>
    );
}