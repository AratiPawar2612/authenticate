"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutPage
(){
    const [count , setCount]= useState(0)

    useEffect(()=> {
        console.log("Button clicked");

    },[count])

    return(
        <main
        style={{backgroundColor:"teal"}}>
            <h1>About Page</h1>

            <h1 style={{color:"black"}}>Button clicked {count} times.</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <br/>
            <br/>
            <Link href="/">Home</Link>

        </main>
    );
}