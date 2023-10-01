import React, { useState, useEffect } from 'react';
import Typewriter from './TypeWriter';
import immage from '../assets/edith.png'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './messages.css'
function Messages(props) {
    return (
        <div>
            {!props.is_user &&
                <div className="chatgp">
                    <img src={immage} width='40px' alt="" />
                    <div className="alert alert-success chat_message" role="alert">
                        <Typewriter text={props.text} delay={25} />

                        {/* <SyntaxHighlighter language="javascript" style={docco}>
                            <Typewriter text={props.text} delay={25} />
                        </SyntaxHighlighter> */}
                    </div>

                </div>
            }{props.is_user &&
                <div className='user'>
                    <p className=' odamoti_user '>Вы</p>
                    <div class="alert alert-success user_message" role="alert">
                        {props.text}
                    </div>
                </div>
            }
            <div className='joy'>
            </div>

        </div>
    );
}

export default Messages;