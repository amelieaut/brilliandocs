---
id: ec2
title: Instance Management
---

## Navigating AWS Elastic Compute Cloud (EC2)

### Key Pair and Instance Access

#### Securing Access with `IMBIT-SSH`

- **Key Name**: `IMBIT-SSH`
- **Managed Under**: EC2 dashboard.
- **Direct Access**: Recommended via the AWS UI by selecting the desired instance.

:::tip Accessing Instances
While key-based access is available, using the AWS Management Console provides a more secure and direct route to your EC2 instances. Direct EC2 access, however, is usually unnecessary due to the PaaS nature of Elastic Beanstalk deployments.
:::

### Security Groups and Traffic Rules

#### Virtual Firewalls for Your Instances

Security groups in EC2 serve as virtual firewalls that dictate inbound and outbound traffic rules for instances.

- **Instance-Specific Groups**: Auto-generated when deploying the Beanstalk application with the suffix `-env`.
- **General IMBIT Group**: The `IMBIT-SecurityGroup` allows all HTTP and HTTPS traffic across both IPv4 and IPv6.

:::important Modifying Security Groups
To apply other security groups to EC2 instances, AWS will relaunch a new EC2 instance!
:::

#### Enabling External SSH Access

If SSH access from outside AWS is required, it must be explicitly permitted within the `IMBIT-SecurityGroup`.

### EC2 Volumes and Auto Scaling

#### Seamless Storage and Scalability

- **Storage**: Volumes are provisioned with 8GB by default, 100 IOPS, and come as General Purpose SSDs (gp2).
- **Auto Scaling**: Automatically configured groups maintain application performance by scaling the number of instances up or down as needed, with a default setting to launch a single instance.

:::note Elastic Beanstalk Magic
Elastic Beanstalk abstracts away much of the manual scaling and provisioning effort, allowing you to focus on your applications rather than infrastructure management.
:::

By understanding and properly managing your EC2 instances and related configurations, you can ensure your applications run smoothly and securely on AWS.