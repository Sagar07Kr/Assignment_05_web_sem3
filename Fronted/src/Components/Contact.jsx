import React from 'react'

function Contact() {
  return (
    <div>
        <style>
          {`
            div:has(> h1 + p + p + p) {
              width: 100%;
              min-height: 70vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 64px 24px;
              background: #F5F7F4;
              box-sizing: border-box;
              text-align: center;
              font-family: Arial, Helvetica, sans-serif;
            }

            div:has(> h1 + p + p + p) > h1 {
              position: relative;
              margin: 0 0 38px;
              padding-bottom: 18px;
              color: #12372A;
              font-size: clamp(32px, 4vw, 44px);
              font-weight: 800;
              letter-spacing: -0.8px;
              line-height: 1.25;
            }

            div:has(> h1 + p + p + p) > h1::after {
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

            div:has(> h1 + p + p + p) > p {
              position: relative;
              display: flex;
              align-items: center;
              width: 100%;
              max-width: 600px;
              min-height: 82px;
              box-sizing: border-box;
              margin: 10px 0;
              padding: 22px 26px;
              border: 1px solid #E0E8E1;
              border-left: 5px solid #0F766E;
              border-radius: 10px;
              background: #FFFFFF;
              color: #46574D;
              font-size: 17px;
              font-weight: 500;
              line-height: 1.7;
              text-align: left;
              overflow-wrap: anywhere;
              box-shadow: 0 5px 18px rgba(18, 55, 42, 0.05);
              transition:
                border-color 0.25s ease,
                box-shadow 0.25s ease,
                transform 0.25s ease;
            }

            div:has(> h1 + p + p + p) > p:nth-of-type(1) {
              border-left-color: #7C3AED;
            }

            div:has(> h1 + p + p + p) > p:nth-of-type(2) {
              border-left-color: #F28C28;
            }

            div:has(> h1 + p + p + p) > p:nth-of-type(3) {
              border-left-color: #38BDF8;
            }

            div:has(> h1 + p + p + p) > p:hover {
              border-top-color: #C8D9CE;
              border-right-color: #C8D9CE;
              border-bottom-color: #C8D9CE;
              box-shadow: 0 10px 26px rgba(18, 55, 42, 0.09);
              transform: translateY(-3px);
            }

            div:has(> h1 + p + p + p) > p:nth-of-type(1):hover {
              border-left-color: #7C3AED;
            }

            div:has(> h1 + p + p + p) > p:nth-of-type(2):hover {
              border-left-color: #F28C28;
            }

            div:has(> h1 + p + p + p) > p:nth-of-type(3):hover {
              border-left-color: #38BDF8;
            }

            @media (max-width: 768px) {
              div:has(> h1 + p + p + p) {
                min-height: 60vh;
                padding: 48px 24px;
              }

              div:has(> h1 + p + p + p) > h1 {
                margin-bottom: 30px;
                font-size: 36px;
              }

              div:has(> h1 + p + p + p) > p {
                max-width: 540px;
                min-height: 76px;
                padding: 20px 22px;
                font-size: 16px;
              }
            }

            @media (max-width: 480px) {
              div:has(> h1 + p + p + p) {
                min-height: 55vh;
                padding: 38px 18px;
              }

              div:has(> h1 + p + p + p) > h1 {
                margin-bottom: 26px;
                padding-bottom: 15px;
                font-size: 30px;
                letter-spacing: -0.5px;
              }

              div:has(> h1 + p + p + p) > h1::after {
                width: 62px;
                height: 3px;
              }

              div:has(> h1 + p + p + p) > p {
                min-height: 68px;
                margin: 8px 0;
                padding: 18px 16px;
                border-left-width: 4px;
                border-radius: 8px;
                font-size: 15px;
                line-height: 1.7;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              div:has(> h1 + p + p + p) > p {
                transition: none;
              }

              div:has(> h1 + p + p + p) > p:hover {
                transform: none;
              }
            }
          `}
        </style>

        <h1>Contact Us</h1>
        <p>Email: support@ShopKart.com</p>
        <p>Phone: +91 000000000</p>
        <p>Address: New Delhi, India</p>
    </div>
  )
}

export default Contact