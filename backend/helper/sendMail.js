import * as config from '../config/config.js';

const sendMail = (reciveEmail, body, subject) => {
  return {
    Source: config.SES_SENDER_EMAIL,
    Destination: {
      ToAddresses: [reciveEmail],
    },
    Message: {
      Subject: {
        Data: `HammadTech.com ${subject}`,
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
            <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  body {
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                    font-family: Arial, sans-serif;
                  }

                  .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    box-sizing: border-box;
                  }

                  .header {
                    text-align: center;
                    background: linear-gradient(135deg, #007BFF, #00C6FF);
                    color: white;
                    padding: 20px 10px;
                    border-radius: 8px 8px 0 0;
                  }

                  h1 {
                    font-size: 24px;
                    margin: 0;
                  }

                  .image-block {
                    text-align: center;
                    margin: 20px 0;
                  }

                  .image-block img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                  }

                  .content {
                    padding: 20px 10px;
                    color: #333333;
                    font-size: 16px;
                    line-height: 1.6;
                    text-align: left;
                  }

                  .footer {
                    text-align: center;
                    font-size: 14px;
                    color: #777777;
                    padding: 20px 10px;
                    border-top: 1px solid #eeeeee;
                  }

                  .footer a {
                    color: #007BFF;
                    text-decoration: none;
                  }

                  .footer a:hover {
                    text-decoration: underline;
                  }

                  @media only screen and (max-width: 600px) {
                    .container {
                      padding: 15px;
                    }

                    h1 {
                      font-size: 20px;
                    }

                    .content, .footer {
                      font-size: 15px;
                      padding: 15px 5px;
                    }
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>HammadTech</h1>
                  </div>

                  <div class="">
                    <img src="https://t3.ftcdn.net/jpg/09/50/17/36/360_F_950173607_JeNU7aTwlEiG2pioBerkr9ZNW5KauTKq.jpg" alt="HammadTech Banner" />
                  </div>

                  <div class="content">
                    ${body}
                  </div>

                  <div class="footer">
                    <p>
                      Thank you for being a part of HammadTech!<br/>
                      <a href="${config.CLIENT_URL}">Visit our website</a>
                    </p>
                  </div>
                </div>
              </body>
            </html>
          `,
        },
      },
    },
  };
};

export default sendMail;
