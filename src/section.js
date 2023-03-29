import { grey } from "@mui/material/colors";
import React from "react";
function NewSection(){
    return(
       <div class="container mt-4">
            <div class="row ">

                   <div class="col-xl-6 col-md-6">
                      <h1><b>METAVERSE<br/>
                      DEVELOPMENT <br/>COMPANY </b></h1>
                      <p>MOBILOITTE teams are busy creating innovative, wholesome METAVERSE projects creating captivating spaces used for training, events, visuals, planning, and collaboration. </p>
                      <button class="btn btn-secondary" style= {{background: "black", borderRadius:  20, borderWidth: 2}}>Know More</button>
                      <h5 className="head2 mt-2">Take a Virtual Tour of our Office in Metaverse<hr style={{background: "black",height: "2px",border: "none" , marginTop: "auto" }}/></h5>
                   </div>

                <div class="col-xl-6 col-md-12">
                <div class="container">
                       <div class="row justify-content-center">

                         <div class="col-md-6">
                              <img src="image 22.png" className="image1" alt="..."></img>
                         </div>

                         <div class="col-md-6">
                              <img src="image 23.png" className="image2" alt="..."></img>
                         </div>

                         <div class="col-md-6">
                              <img src="image 21.png" className="image3" alt="..."></img>
                         </div>

                       </div>
                 </div>
                </div>
               </div>

         </div>
        
    )
}
export default NewSection