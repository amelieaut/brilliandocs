---
id: iam
title: Identities and Accounts
---

## Mastering AWS Identity and Access Management (IAM)

Within AWS's secure environment, IAM plays a pivotal role in access control and identity management.

The following identities are fundamental to our AWS infrastructure:


### SES SMTP User

- **Identity Name**: `ses-smtp-user.20201120-114611`
- **Purpose**: Empowers email dispatch through AWS Simple Email Service (SES).
- **Access**: Configured with the necessary permissions to send emails.
- **Credentials**: Found in Bitwarden.


### GitHub Deployment User

- **Identity Name**: `github-deployment-user`
- **Role**: Facilitates application deployments via GitHub Actions.
- **Permissions**: Scoped to `AdministratorAccess-AWSElasticBeanstalk` for deploying applications on AWS Elastic Beanstalk.
- **Credentials**: Encoded within the GitHub repository to enable automatic deployment workflows.


### SSH Key Management

- **Key Name**: `IMBIT-SSH`
- **Usage**: Added to each Amazon EC2 instance to provide secure shell access.
- **Management**: While keys are managed via the EC2 dashboard, direct access to the instances through the AWS EC2 UI is preferred for enhanced security and convenience.


For detailed instructions on key pair management and instance access, refer to: [Key Pair and Instance Access](ec2).