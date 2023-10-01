import React, { useState, useEffect } from 'react';
import Typewriter from './TypeWriter';
import Messages from './messages';
import Edith from '../assets/edith.png'
// import { IconName } from "react-icons/fa";

import './chat.css'
function Chat() {

    useEffect(() => {
        fetch("https://edithai.pythonanywhere.com/chat/edith/v1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: 'привет',
                arr: chat_messages,
                is_context: 'false'
            }),
        })
            .then(response => response.json())
            .then(data => {
                setResul(data[0].Ansver)
                add_chat_ansver(data[0].Ansver)
            });
    }, [])
    const [apiKey, setApikey] = useState('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') //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
    const [prompt, setPrompt] = useState('') // Prompt of user or like a search 
    const [resul, setResul] = useState('')
    const [len_tokens, setLen_token] = useState('1')
    const [chat_messages, setChatmessages] = useState([]) // All of messages

    function get_user_prompt(event) {
        // console.log(event)
        let prompt = event.target.value
        setPrompt(prompt)
    } function send_message() {
        let arr = chat_messages
        if (prompt.length == 0) {
            console.log("Antithiog");
        } else {
            let result = apiKey
            let temp_arr = []
            temp_arr.push(prompt)
            temp_arr.push('user')
            arr.push(temp_arr)
            sendGptRequest(prompt, result)
            setChatmessages(arr)
            setPrompt('')
        }

    } function sendGptRequest(prompt, apicey) {
        let tokens = 0
        if (len_tokens == '1') {
            tokens = 20
        } else if (len_tokens == '2') {
            tokens = 100
        } else if (len_tokens == '3') {
            tokens = 500
        } else if (len_tokens == '4') {
            tokens = 1000
        }
        fetch("https://edithai.pythonanywhere.com/chat/edith/v1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: prompt,
                arr: chat_messages,
                is_context: 'true'
            }),

        })
            .then(response => response.json())
            .then(data => {
                setResul(data[0].Ansver)
                add_chat_ansver(data[0].Ansver)
                localStorage.setItem('last_result_of_ai', data[0].Ansver)
            });


    } function add_chat_ansver(resul) {
        let arr = chat_messages
        let temp_arr = []
        temp_arr.push(resul)
        temp_arr.push('assistant')
        arr.push(temp_arr)
        // setChatmessages([])
        setChatmessages(arr)
        temp_arr = []
        setResul('')
        // console.log(chat_messages)
    } function get_tokens_value(event) {
        let val = event.target.value
        setLen_token(val)
        // console.log(event);
    } function get_Enter(event) {
        if (event.key == "Enter") {
            send_message()
        }
    }
    return (
        <div>
            <div>
                <p className='log_out' onClick={() => {
                    if (window.confirm("выйти из текущего аккаунта ?")) {
                        localStorage.clear()
                        window.location.reload()
                    }
                }}>Выйти</p>
                <div className='fleks'>
                    <h1 className='header'>
                        Edith AI
                    </h1>
                    <img src={Edith} alt="" width='50px' height='50px' />

                </div>

                <hr />
                <div className="text-center flex">
                    <button className='btn btn-outline-success'>{localStorage.getItem('user')}</button>

                </div>
                <hr />
            </div>
            <div className="">
                {chat_messages.map((val, i) => {
                    if (val[1] == 'user') {
                        return <Messages is_user={true} text={val[0]} key={i} />
                    } else {
                        return <Messages is_user={false} text={val[0]} key={i} />

                    }
                })}
                {chat_messages.length >= 5 &&
                    <div>
                        <div>.</div>
                        <div>.</div>
                    </div>
                }

            </div>

            <div>
                <div class="input-group mb-3 to_vniz">
                    <input type="text" class="form-control" placeholder="Отправит собщения" onChange={get_user_prompt} onKeyUp={get_Enter} value={prompt} aria-label="Отправит собщения" aria-describedby="button-addon2" />
                    <button onClick={send_message} class="btn btn-outline-secondary" type="submit" id="button-addon2"><i class="fa fa-paper-plane-o" ></i></button>
                </div>
            </div>
        </div>
    );
}

export default Chat;