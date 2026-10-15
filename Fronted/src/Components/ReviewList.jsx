import React from 'react'

function ReviewList({reviewdata}) {
  return (
        <>
        <style>
          {`
            /* Customer reviews heading */
            h1:has(+ .reviewcard) {
              width: calc(100% - 40px);
              max-width: 1250px;
              margin: 32px auto 20px;
              padding: 22px 26px;
              box-sizing: border-box;
              background: #FFFFFF;
              border: 1px solid #E0E8E1;
              border-left: 5px solid #F28C28;
              border-radius: 10px;
              color: #12372A;
              font-family: Arial, Helvetica, sans-serif;
              font-size: 26px;
              font-weight: 800;
              line-height: 1.4;
              box-shadow: 0 4px 16px rgba(18, 55, 42, 0.05);
            }

            /* Individual review card */
            .reviewcard {
              position: relative;
              width: calc(100% - 40px);
              max-width: 1250px;
              margin: 14px auto;
              padding: 24px 28px;
              box-sizing: border-box;
              background: #FFFFFF;
              border: 1px solid #E0E8E1;
              border-left: 4px solid #0F766E;
              border-radius: 10px;
              box-shadow: 0 3px 12px rgba(18, 55, 42, 0.04);
              font-family: Arial, Helvetica, sans-serif;
              transition:
                box-shadow 0.22s ease,
                border-color 0.22s ease,
                transform 0.22s ease;
            }

            .reviewcard:hover {
              border-color: #B8D2C1;
              border-left-color: #F28C28;
              box-shadow: 0 8px 22px rgba(18, 55, 42, 0.09);
              transform: translateY(-2px);
            }

            /* Reviewer name */
            .reviewcard h1 {
              margin: 0 0 16px;
              color: #12372A;
              font-size: 19px;
              font-weight: 700;
              line-height: 1.55;
              overflow-wrap: anywhere;
            }

            /* Rating badge and date badge */
            .reviewcard h2 {
              display: table;
              margin: 12px 0;
              padding: 7px 12px;
              border-radius: 6px;
              background: #F0E9FF;
              color: #6D28D9;
              font-size: 13px;
              font-weight: 700;
              line-height: 1.5;
              overflow-wrap: anywhere;
            }

            .reviewcard h2:nth-of-type(2) {
              background: #E5F6FE;
              color: #075985;
            }

            /* Review comment */
            .reviewcard h3 {
              margin: 14px 0;
              color: #46574D;
              font-size: 15px;
              font-weight: 400;
              line-height: 1.85;
              overflow-wrap: anywhere;
            }

            /* Reviewer email */
            .reviewcard h3:last-child {
              margin-top: 18px;
              margin-bottom: 0;
              padding-top: 14px;
              border-top: 1px solid #E8EEE9;
              color: #6F4E37;
              font-size: 13px;
              line-height: 1.7;
              overflow-wrap: anywhere;
            }

            /* Tablet layout */
            @media (max-width: 768px) {
              h1:has(+ .reviewcard) {
                width: calc(100% - 28px);
                margin: 26px auto 16px;
                padding: 20px;
                font-size: 23px;
              }

              .reviewcard {
                width: calc(100% - 28px);
                margin: 12px auto;
                padding: 21px;
              }

              .reviewcard h1 {
                font-size: 18px;
              }

              .reviewcard h3 {
                font-size: 14px;
                line-height: 1.8;
              }
            }

            /* Mobile layout */
            @media (max-width: 480px) {
              h1:has(+ .reviewcard) {
                width: calc(100% - 24px);
                margin: 22px auto 14px;
                padding: 16px;
                border-left-width: 4px;
                border-radius: 8px;
                font-size: 20px;
              }

              .reviewcard {
                width: calc(100% - 24px);
                margin: 10px auto;
                padding: 18px 16px;
                border-left-width: 3px;
                border-radius: 8px;
              }

              .reviewcard h1 {
                margin-bottom: 12px;
                font-size: 16px;
                line-height: 1.6;
              }

              .reviewcard h2 {
                margin: 10px 0;
                padding: 6px 9px;
                font-size: 12px;
              }

              .reviewcard h3 {
                margin: 12px 0;
                font-size: 14px;
                line-height: 1.75;
              }

              .reviewcard h3:last-child {
                margin-top: 14px;
                padding-top: 12px;
                font-size: 12px;
              }
            }

            /* Respect reduced-motion preferences */
            @media (prefers-reduced-motion: reduce) {
              .reviewcard {
                transition: none;
              }

              .reviewcard:hover {
                transform: none;
              }
            }
          `}
        </style>

        <h1>Customer Reviews :- </h1>
        {
            reviewdata.map((ele, index) => {
                return(
                    <div className='reviewcard'>
                        <h1>ReviewerName : {ele.reviewerName}</h1>
                        <h2>Rating : {ele.rating} ⭐️</h2>
                        <h3>Comment : {ele.comment}</h3>
                        <h2>Date : {ele.date}</h2>
                        <h3>ReviewerEmail : {ele.reviewerEmail}</h3>
                    </div>
                )
            })
        }
       </>
  )
}

export default ReviewList