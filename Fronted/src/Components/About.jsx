import React from 'react'

function About() {
    return (
        <div>
            <style>
                {`
                    div:has(> style + h1 + p) {
                        width: 100%;
                        min-height: 70vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 64px 24px;
                        background: #F5F7F4;
                        text-align: center;
                        box-sizing: border-box;
                        font-family: Arial, Helvetica, sans-serif;
                    }

                    div:has(> style + h1 + p) > h1 {
                        position: relative;
                        margin: 0 0 32px;
                        padding-bottom: 18px;
                        color: #12372A;
                        font-size: clamp(32px, 4vw, 44px);
                        font-weight: 800;
                        line-height: 1.25;
                        letter-spacing: -0.8px;
                    }

                    div:has(> style + h1 + p) > h1::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        width: 76px;
                        height: 4px;
                        border-radius: 4px;
                        background: #F28C28;
                        transform: translateX(-50%);
                    }

                    div:has(> style + h1 + p) > p {
                        width: 100%;
                        max-width: 820px;
                        margin: 0;
                        padding: 36px 40px;
                        box-sizing: border-box;
                        border: 1px solid #E0E8E1;
                        border-left: 5px solid #0F766E;
                        border-radius: 12px;
                        background: #FFFFFF;
                        color: #46574D;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 1.9;
                        text-align: left;
                        overflow-wrap: anywhere;
                        box-shadow: 0 8px 28px rgba(18, 55, 42, 0.06);
                        transition:
                            box-shadow 0.25s ease,
                            border-color 0.25s ease,
                            transform 0.25s ease;
                    }

                    div:has(> style + h1 + p) > p:hover {
                        border-left-color: #F28C28;
                        box-shadow: 0 12px 32px rgba(18, 55, 42, 0.10);
                        transform: translateY(-3px);
                    }

                    @media (max-width: 768px) {
                        div:has(> style + h1 + p) {
                            min-height: 60vh;
                            padding: 48px 24px;
                        }

                        div:has(> style + h1 + p) > h1 {
                            margin-bottom: 26px;
                            font-size: 36px;
                        }

                        div:has(> style + h1 + p) > p {
                            max-width: 650px;
                            padding: 28px;
                            font-size: 17px;
                            line-height: 1.8;
                        }
                    }

                    @media (max-width: 480px) {
                        div:has(> style + h1 + p) {
                            min-height: 55vh;
                            padding: 38px 18px;
                        }

                        div:has(> style + h1 + p) > h1 {
                            margin-bottom: 24px;
                            padding-bottom: 15px;
                            font-size: 30px;
                            letter-spacing: -0.5px;
                        }

                        div:has(> style + h1 + p) > h1::after {
                            width: 62px;
                            height: 3px;
                        }

                        div:has(> style + h1 + p) > p {
                            padding: 22px 20px;
                            border-left-width: 4px;
                            border-radius: 9px;
                            font-size: 15px;
                            line-height: 1.85;
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        div:has(> style + h1 + p) > p {
                            transition: none;
                        }

                        div:has(> style + h1 + p) > p:hover {
                            transform: none;
                        }
                    }
                `}
            </style>

            <h1>About Section</h1>
            <p>
                ShopKart is an online shopping website developed as part
                of a college assignment. It allows users to explore
                different products, view their details, check prices,
                and add products to their cart.
            </p>
        </div>
    )
}

export default About