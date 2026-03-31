// Demo file for secret-scanner agent demonstration
// WARNING: This file contains intentionally fake hardcoded secrets for demo purposes only

const config = {
  // Fake AWS credentials
  aws_access_key_id: "PLACEHOLDER_AWS_ACCESS_KEY",
  aws_secret_access_key: "PLACEHOLDER_AWS_SECRET_KEY",

  // Fake Stripe API key
  stripe_secret_key: "PLACEHOLDER_STRIPE_SECRET_KEY",

  // Fake GitHub token
  github_token: "PLACEHOLDER_GITHUB_TOKEN",

  // Fake database connection string
  database_url:
    "postgres://admin:REDACTED-PASSWORD@prod-db.example.com:5432/myapp",

  // Fake JWT secret
  jwt_secret: "PLACEHOLDER_JWT_SECRET",

  // Fake SendGrid API key
  sendgrid_api_key:
    "SG.PLACEHOLDER_SENDGRID_KEY",

  // Fake password
  admin_password: "PLACEHOLDER_ADMIN_PASSWORD",
};

module.exports = config;
