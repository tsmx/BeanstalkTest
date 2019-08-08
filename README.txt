Setting up Beanstalk at AWS:
- in the app main folder:
- eb init (IAM credentials with rights to Beantsalk needed)
- eb create 'environment-name'
- eb create 'environment-name' --vpc --vpc.elbpublic (create inside a VPC with public available Loadbalancer --> VPC-ID and Subnets needed!)
- eb deploy
- eb terminate 'environment-name' (will delete the entire environment)

Useful commands:
- eb list (lists all available environments of the app)
- create ssl cert: openssl req -x509 -newkey rsa:2048 -keyout metadoc-clever-apps.key -out metadoc-clever-apps.crt -days 365 -nodes
--> only keys up to 2048bits are supported by the AWS Cert Manager!!! 4096bit only working through IAM upload