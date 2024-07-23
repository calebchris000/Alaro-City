const email_content = ({
  full_name,
  email,
  phone,
  interest,
  comment,
  user_type,
}) => {
  return `<!doctype html>
  <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Lead from Alaro City Landing Page</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #f4f4f4;
              }
              .container {
                  background-color: #ffffff;
                  padding: 30px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              }
              h1 {
                  color: #0066cc;
                  border-bottom: 2px solid #0066cc;
                  padding-bottom: 10px;
                  margin-top: 0;
              }
              h2 {
                  color: #0066cc;
                  margin-top: 20px;
                  margin-bottom: 10px;
              }
              .info-item {
                  margin-bottom: 15px;
              }
              .label {
                  font-weight: bold;
                  color: #555555;
              }
              .value {
                  margin-left: 10px;
              }
              .comment {
                  background-color: #f9f9f9;
                  border-left: 3px solid #0066cc;
                  padding: 10px;
                  margin-top: 20px;
              }
              .footer {
                  margin-top: 30px;
                  font-size: 0.9em;
                  color: #777777;
                  text-align: center;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h2>Contact Information</h2>
              <div class="info-item">
                  <span class="label">Full Name:</span>
                  <span class="value">${full_name}</span>
              </div>
              <div class="info-item">
                  <span class="label">Email:</span>
                  <span class="value">${email}</span>
              </div>
              <div class="info-item">
                  <span class="label">Phone Number:</span>
                  <span class="value">${phone}</span>
              </div>
              <div class="info-item">
                  <span class="label">Investor or Broker:</span>
                  <span class="value">${user_type}</span>
              </div>

              <h2>Interest</h2>
              <div class="info-item">
                  <span class="label">Interested In:</span>
                  <span class="value">${interest}</span>
              </div>

              <div class="comment">
                  <h2>Additional Comments</h2>
                  <p>${comment ?? "No comment given"}</p>
              </div>

              <div class="footer">
                  <p>
                      This lead was generated from the Alaro City landing page.
                      Please follow up promptly.
                  </p>
              </div>
          </div>
      </body>
  </html>
`;
};

module.exports = { email_content };
