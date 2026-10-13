const sendMail = (email, emailContent, subject) => {
  return {
    Source: process.env.AWS_SES_EMAIL,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: "UTF-8",
      },
      Body: {
        Html: {
          Data: emailContent,
          Charset: "UTF-8",
        },
      },
    },
  };
};

export default sendMail;