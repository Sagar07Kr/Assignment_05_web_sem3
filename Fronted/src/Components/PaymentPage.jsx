import React from 'react'
import { Link } from 'react-router'

function PaymentPage() {
  return (
    <div>
        <style>
          {`
            div:has(> style + h1 + h2) {
              position: relative;
              isolation: isolate;
              overflow: hidden;
              width: 100%;
              min-height: 75vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 24px;
              padding: 64px 24px;
              box-sizing: border-box;
              background: #F5F7F4;
              font-family: Arial, Helvetica, sans-serif;
              text-align: center;
            }

            div:has(> style + h1 + h2)::before {
              content: "";
              position: absolute;
              z-index: -1;
              width: 300px;
              height: 300px;
              top: -120px;
              left: -100px;
              border-radius: 50%;
              background: rgba(56, 189, 248, 0.12);
              pointer-events: none;
            }

            div:has(> style + h1 + h2)::after {
              content: "";
              position: absolute;
              z-index: -1;
              width: 320px;
              height: 320px;
              right: -120px;
              bottom: -140px;
              border-radius: 50%;
              background: rgba(124, 58, 237, 0.09);
              pointer-events: none;
            }

            div:has(> style + h1 + h2) > h1,
            div:has(> style + h1 + h2) > h2 {
              width: 100%;
              max-width: 850px;
              box-sizing: border-box;
            }

            div:has(> style + h1 + h2) > h1 {
              position: relative;
              margin: 0;
              padding: 34px 28px;
              border: 1px solid #E0E8E1;
              border-radius: 16px;
              background: #FFFFFF;
              color: #12372A;
              font-size: clamp(30px, 4.5vw, 44px);
              font-weight: 800;
              line-height: 1.35;
              letter-spacing: -0.9px;
              overflow-wrap: anywhere;
              box-shadow: 0 8px 28px rgba(18, 55, 42, 0.06);
            }

            div:has(> style + h1 + h2) > h2 {
              position: relative;
              margin: 0;
              padding: 28px 32px;
              border: 1px solid #F5D4AE;
              border-left: 5px solid #F28C28;
              border-radius: 12px;
              background: #FFF8EF;
              color: #6F4E37;
              font-size: clamp(21px, 3vw, 29px);
              font-weight: 700;
              line-height: 1.5;
              overflow-wrap: anywhere;
              box-shadow: 0 6px 20px rgba(111, 78, 55, 0.06);
            }

            @media (max-width: 768px) {
              div:has(> style + h1 + h2) {
                min-height: 65vh;
                gap: 20px;
                padding: 48px 24px;
              }

              div:has(> style + h1 + h2)::before {
                width: 240px;
                height: 240px;
              }

              div:has(> style + h1 + h2)::after {
                width: 250px;
                height: 250px;
              }

              div:has(> style + h1 + h2) > h1 {
                padding: 28px 24px;
                border-radius: 13px;
                font-size: 35px;
              }

              div:has(> style + h1 + h2) > h2 {
                padding: 24px;
                font-size: 24px;
              }
            }

            @media (max-width: 480px) {
              div:has(> style + h1 + h2) {
                min-height: 60vh;
                gap: 16px;
                padding: 36px 16px;
              }

              div:has(> style + h1 + h2)::before {
                top: -85px;
                left: -110px;
                width: 190px;
                height: 190px;
              }

              div:has(> style + h1 + h2)::after {
                right: -130px;
                bottom: -100px;
                width: 220px;
                height: 220px;
              }

              div:has(> style + h1 + h2) > h1 {
                padding: 24px 18px;
                border-radius: 11px;
                font-size: 29px;
                letter-spacing: -0.5px;
              }

              div:has(> style + h1 + h2) > h2 {
                padding: 20px 16px;
                border-left-width: 4px;
                border-radius: 9px;
                font-size: 20px;
                line-height: 1.6;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              div:has(> style + h1 + h2) {
                scroll-behavior: auto;
              }
            }
          `}
        </style>

        <h1>🙏 Thank You for Visiting ShopKart!</h1>
        <h2>💳 Online Payment Coming Soon!</h2>
    </div>
  )
}

export default PaymentPage