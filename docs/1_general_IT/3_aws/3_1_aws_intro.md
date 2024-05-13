---
id: intro
title: Introduction to AWS
---

:::note
AWS is vast, and its decentralized nature means there isn't one "main dashboard". Understanding the AWS lingo and regional service distribution is key for effective management. Let's shed some light on it together!
:::


## Navigating AWS Services

Think of AWS like a toolbox; each tool has its purpose and can be managed via the [AWS Console](https://console.aws.amazon.com/console/home?nc2=h_ct&src=header-signin). Here's a quick reference to the AWS services we're using at IMBIT, along with a brief description of what each one does:

<table>
  <thead>
    <tr>
      <th>AWS Service</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Elastic Beanstalk</td>
      <td>A PaaS platform for deploying web applications developed for example with Docker.</td>
    </tr>
    <tr>
      <td>Amazon EC2 (Elastic Compute Cloud)</td>
      <td>A service that provides IaaS computing, allowing to run and manage server instances.</td>
    </tr>
    <tr>
      <td>Amazon VPC (Virtual Private Cloud)</td>
      <td>A service that provides networking within AWS.</td>
    </tr>
    <tr>
      <td>Route 53</td>
      <td>The Domain Name System (DNS) for managing and registering domains.</td>
    </tr>
    <tr>
      <td>Amazon CloudFront</td>
      <td>A content delivery network (CDN) service that securely delivers data globally with reverse proxy capabilities.</td>
    </tr>
    <tr>
      <td>AWS ACM (Certificate Manager)</td>
      <td>A service that lets you easily create SSL/TLS certificates.</td>
    </tr>
    <tr>
      <td>Amazon WorkMail</td>
      <td>Providing Mailbox functionality.</td>
    </tr>
    <tr>
      <td>Amazon SES (Simple Email Service)</td>
      <td>A cloud-based email sending service.</td>
    </tr>
    <tr>
      <td>Amazon IAM (Identity and Access Management)</td>
      <td>A service that enables you to manage user account access to AWS services.</td>
    </tr>
  </tbody>
</table>



## Regions
:::warning IMPORTANT: AWS Region Management
Please be aware that the resources must be managed in their designated regions as noted in the tables above. You will need to switch to the appropriate region within the AWS Management Console to configure or manage these resources. Failing to do so may result in the inability to locate or modify the services correctly.
:::

AWS resources are hosted across different geographical regions. As of 2024, we utilize the following regional structure:

<table>
  <thead>
    <tr>
      <th>Location</th>
      <th>Region Code</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Frankfurt</strong></td>
      <td>eu-central-1</td>
      <td>The primary hosting location.</td>
    </tr>
    <tr>
      <td><strong>Ireland</strong></td>
      <td>eu-west-1</td>
      <td>For WorkMail and Amazon SES (region required by AWS).</td>
    </tr>
    <tr>
      <td><strong>North Virginia</strong></td>
      <td>us-east-1</td>
      <td>For CloudFront and Certificate Manager (region required by AWS).</td>
    </tr>
    <tr>
      <td><strong>Global</strong></td>
      <td>N/A</td>
      <td>Route 53 and IAM are not bound by regional constraints and operate globally.</td>
    </tr>
  </tbody>
</table>