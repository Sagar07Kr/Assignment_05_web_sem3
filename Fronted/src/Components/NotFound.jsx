import React from 'react'

function NotFound() {
  return (
    <div>
        <style>
          {`
            div:has(> style + h1 + h2) {
              position: relative;
              isolation: isolate;
              overflow: hidden;
              min-height: 75vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 60px 24px;
              box-sizing: border-box;
              background: #F5F7F4;
              font-family: Arial, Helvetica, sans-serif;
              text-align: center;
            }

            div:has(> style + h1 + h2)::before {
              content: "";
              position: absolute;
              z-index: -1;
              top: 12%;
              left: -90px;
              width: 260px;
              height: 260px;
              border-radius: 50%;
              background: rgba(56, 189, 248, 0.10);
              pointer-events: none;
            }

            div:has(> style + h1 + h2)::after {
              content: "";
              position: absolute;
              z-index: -1;
              right: -80px;
              bottom: 8%;
              width: 280px;
              height: 280px;
              border-radius: 50%;
              background: rgba(124, 58, 237, 0.08);
              pointer-events: none;
            }

            div:has(> style + h1 + h2) > h1 {
              position: relative;
              max-width: 850px;
              margin: 0 0 22px;
              padding: 0 0 20px;
              color: #12372A;
              font-size: clamp(34px, 5vw, 52px);
              font-weight: 800;
              letter-spacing: -1.2px;
              line-height: 1.2;
              overflow-wrap: anywhere;
            }

            div:has(> style + h1 + h2) > h1::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 50%;
              width: 76px;
              height: 5px;
              border-radius: 5px;
              background: #F28C28;
              transform: translateX(-50%);
            }

            div:has(> style + h1 + h2) > h2 {
              display: inline-flex;
              justify-content: center;
              align-items: center;
              min-height: 48px;
              margin: 0;
              padding: 12px 24px;
              border: 1px solid #F3C2C2;
              border-radius: 8px;
              background: #FCEBEB;
              color: #D62828;
              font-size: clamp(19px, 3vw, 26px);
              font-weight: 700;
              letter-spacing: 1.5px;
              line-height: 1.4;
              box-sizing: border-box;
              box-shadow: 0 4px 14px rgba(214, 40, 40, 0.06);
            }

            @media (max-width: 768px) {
              div:has(> style + h1 + h2) {
                min-height: 65vh;
                padding: 48px 24px;
              }

              div:has(> style + h1 + h2)::before {
                width: 200px;
                height: 200px;
              }

              div:has(> style + h1 + h2)::after {
                width: 220px;
                height: 220px;
              }

              div:has(> style + h1 + h2) > h1 {
                margin-bottom: 20px;
                font-size: 40px;
                letter-spacing: -0.8px;
              }

              div:has(> style + h1 + h2) > h2 {
                padding: 11px 21px;
                font-size: 23px;
              }
            }

            @media (max-width: 480px) {
              div:has(> style + h1 + h2) {
                min-height: 60vh;
                padding: 36px 18px;
              }

              div:has(> style + h1 + h2)::before {
                top: 6%;
                left: -110px;
                width: 180px;
                height: 180px;
              }

              div:has(> style + h1 + h2)::after {
                right: -120px;
                bottom: 5%;
                width: 200px;
                height: 200px;
              }

              div:has(> style + h1 + h2) > h1 {
                margin-bottom: 20px;
                padding-bottom: 16px;
                font-size: 32px;
                letter-spacing: -0.5px;
                line-height: 1.25;
              }

              div:has(> style + h1 + h2) > h1::after {
                width: 62px;
                height: 4px;
              }

              div:has(> style + h1 + h2) > h2 {
                min-height: 44px;
                padding: 10px 18px;
                border-radius: 7px;
                font-size: 20px;
                letter-spacing: 1px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              div:has(> style + h1 + h2) {
                scroll-behavior: auto;
              }
            }
          `}
        </style>

        <h1>Page Not Found</h1>
        <h2>Error 404</h2>
    </div>
  )
}

export default NotFound