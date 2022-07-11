import React, { useRef, useEffect } from "react";
export const AutoScrollContainer = () => {

    return (
        <>
            <div className="md:max-w-[600px] w-full mx-auto my-10">
                <div className="w-full text-left">
                    <h3 className="mb-2 text-2xl font-semibold">User Output</h3>
                </div>
                <div>  <ul class="data-list" data-autoscroll>
                <li class="notice_item">
                    <div class="name">T4DN*******mP9W</div>
                    <div class="value ff">848 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3m********Hven</div>
                    <div class="value ff">689 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3z********nfYJ</div>
                    <div class="value ff">464 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6k********5t7U</div>
                    <div class="value ff">660 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T4A6*******xA4h</div>
                    <div class="value ff">376 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6aJ*******LvYd</div>
                    <div class="value ff">178 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T44E*******ixR1</div>
                    <div class="value ff">1438 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3i********TRXg</div>
                    <div class="value ff">526 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6dW*******rY1G</div>
                    <div class="value ff">436 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x4D********dmcw</div>
                    <div class="value ff">3719 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3mM*******QZRR</div>
                    <div class="value ff">514 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3z********2rhz</div>
                    <div class="value ff">559 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6Xa*******zPsK</div>
                    <div class="value ff">1982 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T4AA*******gwdW</div>
                    <div class="value ff">737 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x43********zxjo</div>
                    <div class="value ff">691 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x46********ssmz</div>
                    <div class="value ff">398 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6X4*******sP9Z</div>
                    <div class="value ff">6247 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3i********5Qky</div>
                    <div class="value ff">3307 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T4AC*******HdxG</div>
                    <div class="value ff">109 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6Xc*******oR4z</div>
                    <div class="value ff">2090 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x46********8uz8</div>
                    <div class="value ff">4330 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6X********hYtT</div>
                    <div class="value ff">562 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T4DT*******SvVM</div>
                    <div class="value ff">759 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6da*******3Rga</div>
                    <div class="value ff">362 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6Xd*******gX61</div>
                    <div class="value ff">571 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T46v*******fcDp</div>
                    <div class="value ff">762 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6UL*******HGxM</div>
                    <div class="value ff">305 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6k4*******zWat</div>
                    <div class="value ff">490 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6j********CPyJ</div>
                    <div class="value ff">1829 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3i********chJd</div>
                    <div class="value ff">864 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3w********cBFU</div>
                    <div class="value ff">485 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T46q*******A1Dw</div>
                    <div class="value ff">315 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3ih*******9rAy</div>
                    <div class="value ff">457 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x47********ym7j</div>
                    <div class="value ff">341 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3z********cfnt</div>
                    <div class="value ff">359 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T4E3*******ZPJr</div>
                    <div class="value ff">785 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6Xe*******ZY9w</div>
                    <div class="value ff">514 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6Tm*******hPBP</div>
                    <div class="value ff">456 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3z********xmPL</div>
                    <div class="value ff">1540 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6X********9LVJ</div>
                    <div class="value ff">3440 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6e9*******hHTE</div>
                    <div class="value ff">204 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x4A********pqpf</div>
                    <div class="value ff">242 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6eA*******Mfpt</div>
                    <div class="value ff">469 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6e********bobv</div>
                    <div class="value ff">1454 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6k********L7BW</div>
                    <div class="value ff">259 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3wi*******EcwN</div>
                    <div class="value ff">2492 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6hM*******oEmR</div>
                    <div class="value ff">188 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6hN*******VnGf</div>
                    <div class="value ff">244 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3ig*******R8W7</div>
                    <div class="value ff">1777 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6X********dB6P</div>
                    <div class="value ff">138 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3s********Qx5h</div>
                    <div class="value ff">4991 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T43h*******Z7Zj</div>
                    <div class="value ff">242 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3s********BnA8</div>
                    <div class="value ff">469 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3w8*******1ajp</div>
                    <div class="value ff">448 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3z********JXZL</div>
                    <div class="value ff">821 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3p********ULdg</div>
                    <div class="value ff">2611 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3ss*******s6ie</div>
                    <div class="value ff">758 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6aF*******iXWb</div>
                    <div class="value ff">4083 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3pc*******fjNU</div>
                    <div class="value ff">297 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6d********3t1g</div>
                    <div class="value ff">124 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3m********bQe7</div>
                    <div class="value ff">309 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3zL*******htvv</div>
                    <div class="value ff">2240 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x43********eJF9</div>
                    <div class="value ff">457 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3zM*******2RbA</div>
                    <div class="value ff">296 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x46********jETq</div>
                    <div class="value ff">1897 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3mP*******uFLT</div>
                    <div class="value ff">461 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3w********nCkH</div>
                    <div class="value ff">122 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3tS*******aWDV</div>
                    <div class="value ff">437 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3w9*******jU3S</div>
                    <div class="value ff">239 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3m********VxRg</div>
                    <div class="value ff">238 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6X********djJ2</div>
                    <div class="value ff">647 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3w8*******wz7s</div>
                    <div class="value ff">278 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T4An*******8xPu</div>
                    <div class="value ff">218 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T46w*******MAzP</div>
                    <div class="value ff">452 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x4A********uyL6</div>
                    <div class="value ff">469 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3ih*******LHtG</div>
                    <div class="value ff">837 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3mL*******kvhV</div>
                    <div class="value ff">245 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3p********kVJr</div>
                    <div class="value ff">739 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3w********fri7</div>
                    <div class="value ff">3174 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6h********4G8h</div>
                    <div class="value ff">907 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T43a*******7LU9</div>
                    <div class="value ff">637 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x46********4sps</div>
                    <div class="value ff">198 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x41********X2gY</div>
                    <div class="value ff">133 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3i********w9BX</div>
                    <div class="value ff">4213 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x4D********1ezN</div>
                    <div class="value ff">4791 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6T********mged</div>
                    <div class="value ff">6487 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3p********2dym</div>
                    <div class="value ff">678 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6go*******mFZz</div>
                    <div class="value ff">331 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3wi*******J1aZ</div>
                    <div class="value ff">4348 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T43g*******XeFJ</div>
                    <div class="value ff">369 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x44********PcE7</div>
                    <div class="value ff">933 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T46r*******3dZA</div>
                    <div class="value ff">658 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x4A********ck8Y</div>
                    <div class="value ff">103 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3w********1YQu</div>
                    <div class="value ff">864 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x44********hkAE</div>
                    <div class="value ff">495 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6Wy*******cDVf</div>
                    <div class="value ff">380 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x3i********QzC9</div>
                    <div class="value ff">695 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T4Ak*******zg5B</div>
                    <div class="value ff">510 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T4An*******1SCv</div>
                    <div class="value ff">350 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x44********vyw4</div>
                    <div class="value ff">308 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6a********Z4TZ</div>
                    <div class="value ff">4639 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6X2*******EN39</div>
                    <div class="value ff">151 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x4A********5RPx</div>
                    <div class="value ff">653 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3mx*******WX3s</div>
                    <div class="value ff">644 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6e********FNaj</div>
                    <div class="value ff">226 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T47W*******iEQx</div>
                    <div class="value ff">480 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x4A********5ksQ</div>
                    <div class="value ff">542 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6ar*******ZLZg</div>
                    <div class="value ff">255 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3i3*******Rt9V</div>
                    <div class="value ff">112 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">0x6W********4VCC</div>
                    <div class="value ff">603 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T6hN*******EdpK</div>
                    <div class="value ff">337 USDT</div>
                </li>
                <li class="notice_item">
                    <div class="name">T3w5*******TPta</div>
                    <div class="value ff">157 USDT</div>
                </li>

            </ul>
            </div>
            </div>
        
        </>
    );
};


const items = [
    {
        address: "214812341932401"
    },
    {
        address: "eqweqwe"
    }, {
        address: "21481twertwer2341932401"
    }, {
        address: "eqweqweq"
    }, {
        address: "wererwerw"
    }, {
        address: "214812341932401"
    },
    {
        address: "eqweqwe"
    }, {
        address: "21481twertwer2341932401"
    }, {
        address: "eqweqweq"
    }, {
        address: "wererwerw"
    }, {
        address: "214812341932401"
    },
    {
        address: "eqweqwe"
    }, {
        address: "21481twertwer2341932401"
    }, {
        address: "eqweqweq"
    }, {
        address: "wererwerw"
    }, {
        address: "214812341932401"
    },
    {
        address: "eqweqwe"
    }, {
        address: "21481twertwer2341932401"
    }, {
        address: "eqweqweq"
    }, {
        address: "wererwerw"
    }, {
        address: "214812341932401"
    },
    {
        address: "eqweqwe"
    }, {
        address: "21481twertwer2341932401"
    }, {
        address: "eqweqweq"
    }, {
        address: "wererwerw"
    }, {
        address: "214812341932401"
    },
    {
        address: "eqweqwe"
    }, {
        address: "21481twertwer2341932401"
    }, {
        address: "eqweqweq"
    }, {
        address: "wererwerw"
    }
]