import React from 'react'
import { Link } from 'react-router'

function Home() {
    return (
        <div>
            <style>
                {`
                    div:has(> style + div > h1) {
                        width: 100%;
                        min-height: 70vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 40px 4%;
                        box-sizing: border-box;
                        background: #F5F7F4;
                        font-family: Arial, Helvetica, sans-serif;
                        text-align: left;
                    }

                    div:has(> style + div > h1) > div {
                        position: relative;
                        isolation: isolate;
                        overflow: hidden;
                        width: 100%;
                        max-width: 1250px;
                        min-height: 350px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        padding: 60px 54px;
                        box-sizing: border-box;
                        background: linear-gradient(
                            115deg,
                            #FFFFFF 0%,
                            #F8FBF7 55%,
                            #E8F3EC 100%
                        );
                        border: 1px solid #E0E8E1;
                        border-radius: 16px;
                        box-shadow: 0 8px 28px rgba(18, 55, 42, 0.06);
                    }

                    div:has(> style + div > h1) > div::before {
                        content: "";
                        position: absolute;
                        z-index: -1;
                        width: 340px;
                        height: 340px;
                        right: 5%;
                        top: 50%;
                        transform: translateY(-50%);
                        border-radius: 50%;
                        background:
                            radial-gradient(
                                circle at 58% 42%,
                                rgba(244, 185, 66, 0.65) 0 7%,
                                transparent 7.5%
                            ),
                            radial-gradient(
                                circle at 45% 55%,
                                rgba(56, 189, 248, 0.19) 0 29%,
                                transparent 29.5%
                            ),
                            radial-gradient(
                                circle at 55% 50%,
                                rgba(124, 58, 237, 0.10) 0 43%,
                                transparent 43.5%
                            ),
                            radial-gradient(
                                circle at center,
                                rgba(15, 118, 110, 0.13) 0 58%,
                                transparent 58.5%
                            );
                        pointer-events: none;
                    }

                    div:has(> style + div > h1) > div > h1 {
                        position: relative;
                        max-width: 650px;
                        margin: 0 0 22px;
                        padding-bottom: 18px;
                        color: #12372A;
                        font-size: clamp(36px, 4.5vw, 54px);
                        font-weight: 800;
                        letter-spacing: -1.4px;
                        line-height: 1.17;
                    }

                    div:has(> style + div > h1) > div > h1::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 76px;
                        height: 5px;
                        border-radius: 5px;
                        background: #F28C28;
                    }

                    div:has(> style + div > h1) > div > p {
                        position: relative;
                        max-width: 570px;
                        margin: 0 0 30px;
                        color: #46574D;
                        font-size: 17px;
                        font-weight: 400;
                        line-height: 1.9;
                        overflow-wrap: anywhere;
                    }

                    div:has(> style + div > h1) > div > h2 {
                        position: relative;
                        display: flex;
                        align-items: center;
                        margin: 0;
                        color: #12372A;
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 1.6;
                    }

                    div:has(> style + div > h1) > div > h2 a {
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 48px;
                        margin-left: 10px;
                        padding: 12px 27px;
                        border: 2px solid #F28C28;
                        border-radius: 7px;
                        background: #F28C28;
                        color: #12372A;
                        font-size: 15px;
                        font-weight: 700;
                        text-decoration: none;
                        box-shadow: 0 4px 12px rgba(242, 140, 40, 0.16);
                        transition:
                            background 0.2s ease,
                            border-color 0.2s ease,
                            box-shadow 0.2s ease,
                            transform 0.2s ease;
                    }

                    div:has(> style + div > h1) > div > h2 a:hover {
                        background: #E87918;
                        border-color: #E87918;
                        box-shadow: 0 6px 16px rgba(242, 140, 40, 0.24);
                        transform: translateY(-2px);
                    }

                    div:has(> style + div > h1) > div > h2 a:focus-visible {
                        outline: 3px solid #38BDF8;
                        outline-offset: 4px;
                    }

                    @media (max-width: 900px) {
                        div:has(> style + div > h1) {
                            min-height: 65vh;
                            padding: 32px 24px;
                        }

                        div:has(> style + div > h1) > div {
                            min-height: 320px;
                            padding: 46px 36px;
                        }

                        div:has(> style + div > h1) > div::before {
                            width: 280px;
                            height: 280px;
                            right: -35px;
                        }

                        div:has(> style + div > h1) > div > h1 {
                            max-width: 520px;
                            font-size: 40px;
                            letter-spacing: -0.8px;
                        }

                        div:has(> style + div > h1) > div > p {
                            max-width: 480px;
                            font-size: 16px;
                            line-height: 1.8;
                        }

                        div:has(> style + div > h1) > div > h2 {
                            font-size: 18px;
                        }
                    }

                    @media (max-width: 600px) {
                        div:has(> style + div > h1) {
                            min-height: 60vh;
                            padding: 22px 14px;
                        }

                        div:has(> style + div > h1) > div {
                            min-height: 320px;
                            padding: 36px 24px;
                            border-radius: 12px;
                            background: linear-gradient(
                                145deg,
                                #FFFFFF 0%,
                                #F5F7F4 100%
                            );
                        }

                        div:has(> style + div > h1) > div::before {
                            width: 190px;
                            height: 190px;
                            right: -65px;
                            top: 14%;
                            transform: none;
                            opacity: 0.65;
                        }

                        div:has(> style + div > h1) > div > h1 {
                            max-width: 100%;
                            margin-bottom: 20px;
                            padding-bottom: 15px;
                            font-size: 34px;
                            letter-spacing: -0.6px;
                            line-height: 1.22;
                        }

                        div:has(> style + div > h1) > div > h1::after {
                            width: 62px;
                            height: 4px;
                        }

                        div:has(> style + div > h1) > div > p {
                            max-width: 100%;
                            margin-bottom: 24px;
                            font-size: 15px;
                            line-height: 1.8;
                        }

                        div:has(> style + div > h1) > div > h2 {
                            flex-wrap: wrap;
                            gap: 8px;
                            font-size: 17px;
                        }

                        div:has(> style + div > h1) > div > h2 a {
                            min-height: 44px;
                            margin-left: 4px;
                            padding: 10px 20px;
                            font-size: 14px;
                        }
                    }

                    @media (max-width: 360px) {
                        div:has(> style + div > h1) > div {
                            padding: 30px 18px;
                        }

                        div:has(> style + div > h1) > div > h1 {
                            font-size: 29px;
                        }

                        div:has(> style + div > h1) > div > h2 {
                            font-size: 15px;
                        }

                        div:has(> style + div > h1) > div > h2 a {
                            padding: 9px 14px;
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        div:has(> style + div > h1) > div > h2 a {
                            transition: none;
                        }

                        div:has(> style + div > h1) > div > h2 a:hover {
                            transform: none;
                        }
                    }
                `}
            </style>

            <div>
                <h1>Welcome to ShopKart</h1>
                <p>
                    Welcome to ShopKart, your simple online shopping destination.
                    Explore a variety of products, compare prices, check product
                    details, and add your favourite items to your cart.
                </p>
                <h2>Explore Our {<Link to = "/products">Products</Link>}</h2>
            </div>
        </div>

    )
}

export default Home