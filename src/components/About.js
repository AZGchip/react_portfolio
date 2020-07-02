import React from "react";

const About = () => (
 
  <div class="container bg-light" style={{height:"100vh"}}>
       <div class="row">
           <div class="col-md-12 mt-5 pt-5">
               <h1 class="title1 ">About Me</h1>
               <hr></hr>
           </div>
       </div>
       
       <div class="row">
           <div class="col-md-3">
               <img class="w-100" src=".//assets/images/IMG_0085.JPG" alt="glados sculpture"></img>
               <div class="row"><a href="../assets/pdf/Andrew Zinski.pdf" class="btn btn-secondary mx-auto mt-1">My
                       Resume</a></div>
           </div>
           
           <div class="col-md-9">
               <p>
                   I am currently a student at The University of Richmond, taking one of their coding bootcamp
                   programs. I have prior experience as a Mechanic on automobiles, boats, and airplanes. my hobbies
                   include: sculpting, drawing, playing piano, composing music, PC building, reading, photography, and
                   video games.
               </p>
           </div>
       </div>
   </div>
 
);

export default About;
