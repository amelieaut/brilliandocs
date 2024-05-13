---
id: iam
title: Identities and Accounts
---

## Identity and Access Management (IAM)

Two key identities are configured within IAM:

1. **Mail Sending User:** This identity is specifically created for the purpose of sending emails via AWS SES.

2. **GitHub Workflow User:** This user is designated for deploying applications. The user has restricted permissions, limited to `AdministratorAccess-AWSElasticBeanstalk` only. The credentials for this user are hardcoded within the GitHub workflow for automation purposes.

