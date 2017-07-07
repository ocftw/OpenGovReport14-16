module.exports = do
  config: \default
  port: \9000 # backend port
  limit: '20mb'
  watch: true
  superuser: \<your-superuser-name-here>

  paypal:
    sandbox:
      user: \<your-key-here>
      pass: \<your-key-here>
    production:
      user: \<your-key-here>
      pass: \<your-key-here>

  facebook:
    clientSecret: \<your-key-here>

  google:
    clientSecret: \<your-key-here>

  cookie:
    domain: null

  session:
    secret: \<your-random-string-here>

  token-secret: \<your-random-string-here>

  mail: do
    host: \<your-host-here>
    port: 465
    secure: true
    maxConnections: 5
    maxMessages: 10
    auth: {user: '', pass: ''}

  mailgun: do
    auth:
      domain: \<your-domain-here>
      api_key: \<your-key-here>

  io-pg: do
    uri: "postgres://<username>:<passwd>@localhost/<dbname>"
