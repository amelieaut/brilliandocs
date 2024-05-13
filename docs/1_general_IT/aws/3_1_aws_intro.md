---
id: intro
title: Introduction
---

Amazon Web Services (AWS) can present a steep learning curve to newcomers; it's not structured around a centralized dashboard, so users require a grasp of specific AWS jargon and an understanding of how services are regionally distributed to effectively manage their configurations. This documentation aims to demystify the IMBIT AWS infrastructure by providing a detailed walkthrough.



## Each AWS Service explained
| AWS Service | Description |
| ----------- | ----------- |
| Elastic Beanstalk | A PaaS platform for deploying web applications developed for example with Docker. |
| Amazon EC2 (Elastic Compute Cloud) | A service that provides IaaS computing, allowing to run and manage server instances. |
| Amazon VPC (Virtual Private Cloud) | A service that provides networking within AWS. |
| Route 53 | The Domain Name System (DNS) for managing and registering domains. |
| Amazon CloudFront | A content delivery network (CDN) service that securely delivers data globally with reverse proxy capabilities. |
| AWS ACM (Certificate Manager) | A service that lets you easily create SSL/TLS certificates. |
| Amazon WorkMail | Providing Mailbox functionality. |
| Amazon SES (Simple Email Service) | A cloud-based email sending service. |
| Amazon IAM (Identity and Access Management) | A service that enables you to manage user account access to AWS services. |



## Regions
AWS resources are hosted across different geographical regions. As of 2024, IMBIT utilizes the following regional structure:

| Location           | Region Code        | Note                                                              |
|--------------------|--------------------|-------------------------------------------------------------------|
| **Frankfurt**      | eu-central-1       | The primary hosting location.                   |
| **Ireland**        | eu-west-1          | For WorkMail and Amazon SES (region requiered by AWS). |
| **North Virginia** | us-east-1          | For CloudFront and Certificate Manager (region requiered by AWS).                  |
| **Global**         | N/A                | Route 53 and IAM are not bound by regional constraints and operate globally. |