import React from "react";
import errorImg from "../assets/images/errorpage.svg"

function ErrorPage() {
    return(

<div class= "mx-auto container" style={{textAlign:"center"}}>
<h1 style={{marginTop: "20px"}}>404 Page Not Found</h1>
<img src={errorImg} 
alt="error page"
style={{maxWidth:"700px", marginTop: "0"}} />

</div>
    )
}

export default ErrorPage;
