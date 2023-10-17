import React, { useState, useEffect } from "react";
import "./introdusing.css";
import logo from "../../assets/edith.png";
function Card() {
  return (
    <div>
      
      <div class="container text-center">
        <div className="row">
        <img className="" src={logo} width="20px" />
      
        </div>
        <div class="row">
          <div class="col text-left">
            <h1>Introdusing Edith Ai 1.0</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid nihil illo odio! Iure vero voluptates qui, aut cupiditate, provident voluptatibus accusamus esse labore illum corporis eligendi consequatur quo aspernatur?
            Officia, iure voluptatem. Illum, molestias ipsum eveniet laudantium atque tempore voluptatem officiis eius recusandae optio, ad nemo officia, delectus culpa labore blanditiis magni quam quod? Rem id nam sit incidunt.
            Labore mollitia repellendus non recusandae saepe nemo asperiores perferendis! Delectus quod eaque quae nihil obcaecati excepturi dicta error consequuntur, perspiciatis rerum voluptatibus quis beatae unde recusandae laudantium, culpa sit voluptatum!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
