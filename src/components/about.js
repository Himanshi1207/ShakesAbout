import React from 'react';
import pic from './images/finalfinal.svg';

const Aboutsection = () => {
    return (
        <div>

            <div className="container">
                <div className="box2">
                    <span class="text1 ">𝓢𝓱𝓪𝓴𝓮𝓼</span>
                    <span className="text12">𝓙𝓮𝓮𝓻</span>
                    <span class="line">
                            𝑻𝒉𝒆 𝑶𝒑𝒆𝒏 𝑴𝒊𝒄 𝑺𝒐𝒄𝒊𝒆𝒕𝒚
                    </span>
                </div>
                <div className="box3">
                    <div className="box3first">
                        <div className="box3firstcontent">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
                            beatae labore sequi consequatur quos reprehenderit officiis eos maiores sint asperiores nam facere
                            blanditiis
                        </div>
                    </div>
                    <div className="box3second">
                        <img src={pic} alt="mic image" />
                    </div>
                </div>
            </div>
            <div class="animation-area">
                <ul class="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

        </div>

    );
}
export default Aboutsection;