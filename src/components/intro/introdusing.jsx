import React, { useState, useEffect } from "react";
import Card from "./card";
import logo from "../../assets/edith.png";
import "./introdusing.css";
function Introdusing() {
  return (
    <div>
      <div className="logo_main">
        <img src={logo} width={200} alt="" />
        <h1>EDITH AI 1.0</h1>
      </div>
      <div className="main_text">
        <h3>Kutub oling Edith Ai😎</h3>
        <p>
          Edith AI sizning ishonchli hamrohingiz va aqlli o'rganish
          yordamchingizdir. Chat GPT kabi ilg'or AI sizning o'quv jarayoningizni
          sezilarli darajada yaxshilaydi va muvaffaqiyatga erishishingizga
          yordam beradi. <br />
          <hr />
          Edith AI ning 3 ta afzalligi
          <hr />
          <ol>
            <li>
              24/7 kirish va moslashuvchanlik:
              <br />
              Edith AI 24/7 ishlaydi, ya'ni siz o'zingiz uchun qulay bo'lgan
              vaqtda savollaringizga javob olishingiz va o'qishingizga yordam
              berishingiz mumkin. Bu, ayniqsa, har xil kundalik tartiblarga ega
              bo'lgan talabalar va talabalar uchun foydalidir.
            </li>
            <li>
              Bilimlarning keng doirasi:
              <br />
              Edith AI bilim va bilimlarning ulkan ma'lumotlar bazasidan
              foydalanish imkoniyatiga ega bo'lib, unga turli mavzular va
              mavzular bo'yicha ma'lumotlarni taqdim etish imkonini beradi. Bu
              sizga matematika, fan, adabiyot, tarix va boshqa ko'plab sohalarda
              yordam berishi mumkin.
            </li>
            <li>
              Muammoni hal qilishda yordam:
              <br />
              Agar sizda murakkab muammolar yoki mashqlar bo'lsa, Edith AI
              ularni aniqlashga yordam beradi. U muammoni qanday hal qilishni
              tushunishga yordam beradigan bosqichma-bosqich ko'rsatmalar va
              tushuntirishlar berishi mumkin.
            </li>
          </ol>
        </p>
        <div>
          <hr />
          <h5>Qanday qilib EDITH AI ga kirish mumkun 💁 ?</h5>
          <p>Hammagi osson, mana tariflarimiz :</p>
          <div className="row marpad">
            <div className="col col_border">
              <h6>🍀Econom🍀</h6>
              <p>so'rovlar : 200</p>
              <p className="btn btn-outline-warning">100₽</p>
            </div>
            <div className="col col_border">
              <h6>🔥Standart🔥</h6>
              <p>so'rovlar : 500</p>
              <p className="btn btn-outline-success">200₽</p>
            </div>
            <div className="col col_border">
              <h6>🤩Biznes🤩</h6>
              <p>so'rovlar : 1000</p>
              <p className="btn btn-outline-warning">400₽</p>
            </div>
          </div>
          <br />
          <p>ℹ️ So'rovlar - bu necha bora edithga sorov tashlashingiz</p>
          <hr />
        </div>
        <div>
          <h5>Uzingiz sinab kuring 🤝</h5>
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              localStorage.setItem("test_using", "yes");
              if (localStorage.getItem("test_using_tocen")) {
                console.log("hahahaha");
              } else {
                localStorage.setItem("test_using_tocen", 20);
              }
              window.location.reload();
            }}
          >
            Sinab kurish
          </button>
          <button onClick={()=>{
            localStorage.setItem('go_to_chat' , 'yes')
            window.location.reload()
          }} className="btn btn-outline-success">Ro'yxatdan o'tish</button>
          <hr />
          <div>
            So'rovlar tocen olish uchun <a href="http://t.me/+992929851515">Behruz</a> ga murijan qiling !
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introdusing;
