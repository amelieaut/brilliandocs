---
id: ec2
title: Instance Management
---

## Elastic Compute Cloud (EC2)

An EC2 instance (VM) is automatically created when creating a Elastic Beanstalk application/environment.

### Key Pair and Instance Access

Each EC2 instance could be accessed using the `IMBIT-SSH` key, which is managed within the EC2 dashboard. However, it is better to access to the instance's shell through the AWS UI by clicking on the required instance. However, as deployments are handled as Platform as a Service (PaaS) through AWS Elastic Beanstalk, direct access to EC2 instances is generally not needed.

### Security Groups and Instance Configuration

Security groups act as virtual firewalls, controlling the traffic allowed to and from EC2 instances. Modifying a security group's rules may necessitate creating a new EC2 instance to reflect the changes. Each Beanstalk application automatically generates a security group with the suffix `-env`. Additionally, all applications are part of the `IMBIT-SecurityGroup`, which permits any to any HTTP and HTTPS traffic on both IPv4 and IPv6. To allow external SSH access, it must be enabled within this security group.

### EC2 Volumes and Auto Scaling

The storage volumes for EC2 instances are automatically provisioned when setting up an Elastic Beanstalk application, with default configurations of 8GB, 100 IOPS, and General Purpose SSD (gp2). Auto scaling groups, which automatically adjust the number of EC2 instances to meet demand, are also created automatically to set to only launch a single instance.