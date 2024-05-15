---
id: beanstalk
title: Deploying Applications
---
## Elastic Beanstalk for Application Deployment

The majority of the applications are deployed using Elastic Beanstalk. First an application is created and then inside of it an environment needs to be created which are configured as follows:

1. **Application Domain:** The Elastic Beanstalk environment URL is set to the application's name (e.g., `applicationname.eu-central-1.elasticbeanstalk.com`). This domain is necessary for future integration with AWS CloudFront. The platform is set to Docker, and the initial deployment can be done using a sample application, as the actual code will be uploaded via GitHub. After the deployment with the sample code, it is also possible to upload a `docker-compose.yml` file directly through the GUI.

![Step 1 of setting up Beanstalk Application](beanstalk_step1.png)


2. **Service Roles and EC2 Key Pairs:** Provisioning includes selecting the appropriate service roles such as `aws-elasticbeanstalk-service-role`, picking the SSH Key `IMBIT-SSH` and the EC2 instance profile (`aws-elasticbeanstalk-ec2-role`).

![Step 2 of setting up Beanstalk Application](beanstalk_step2.png)

3. **Virtual Private Cloud (VPC) Settings:** The IMBIT-VPC is selected, without assigning a public IP, but ensuring the proper subnet is chosen. Each application receives their own subnet in order for proper security! No associated databases are configured.

![Step 3 of setting up Beanstalk Application](beanstalk_step3.png)

4. **Storage and Security:** Default volume settings are applied, and the `IMBIT-SecurityGroup` is added. At this stage, no scaling is configured. In terms of architecture, `arm64` may be chosen for cost efficiency, but compatibility with the code base should be verified (only the `brillianideas` application is known to work with `arm64`). For `arm64`, the instance type is `t4g`, and for `amd64`, the instance type is `t3.micro`.

Health reporting is set to basic, and automatic updates are disabled as it crashed in the past. However, it may be worthwhile to re-evaluate and test automatic updates in the future.


![Step 3 of setting up Beanstalk Application](beanstalk_step4.png)

Once configured, the application will be accessible via its Elastic Beanstalk URL and can be updated through the GitHub workflow.



## CloudFront as a Reverse Proxy

AWS CloudFront acts as a reverse proxy and one deployment is needed per Beanstalk application.

- **Origin Domain**: The Origin Domain for the CloudFront distribution is configured using the Elastic Beanstalk application URL, which typically takes the form `https://applicationname.eu-central-1.elasticbeanstalk.com`. It is also important to set the protocol to HTTP only with port 80 as the applications have only that port/protocol open. 

- **Origin Path**: This is left empty.

- **Origin Name**: The Origin Name is given the name of the application.

- **HTTP Methods**: By default, the CloudFront distribution is set to allow standard HTTP methods (GET and HEAD). However, for most applications requiere additional methods such as POST, PATCH, and DELETE.

- **Cache Policy**: For the Cache policy `CachingDisabled` is picked as otherwise it takes some time for changes to go live.

- **Web Application Firewall (WAF)**: WAF is not used due to additional costs.

- **Geographic Restrictions**: The distribution is restricted to North America and Europe to optimize for reducing costs.

- **SSL/TLS Configuration**: CloudFront automatically serves HTTPS and redirects from HTTP.

- **Alternative Domain Names**: To enable CloudFront to respond to requests for custom domains, such as `brilliancrm.com`, alternative domain names need to be entered, and the custom domain SSL certificates need to be picked. The certificates can be requested in ACM (Certificate Manager).

- **Certificate Manager Integration**: When setting up or renewing SSL certificates with AWS ACM, the domain name and its 'www' subdomain are included in the request. Validation is performed using CNAME records, which can be automatically created in Route 53 if the domain is managed there.

- **Distribution Deployment**: After the configuration settings are in place, the CloudFront distribution is deployed. Once deployed, it takes some time for the changes to propagate across the network of edge locations.

- **CloudFront and Route 53 Integration**: Once the CloudFront distribution is created and active, the CloudFront domain name is entered into Route 53 as an alias record, which connects the custom domain to the CloudFront distribution, completing the setup process.

![Cloudfront Setup](cloudfront.png)