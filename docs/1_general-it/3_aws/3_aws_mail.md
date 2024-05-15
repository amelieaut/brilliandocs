---
id: mail
title: E-Mail Sending and Receiving
---

## Setting Up Email Services with AWS

In the digital world, a robust email infrastructure is non-negotiable. Here's how we've streamlined our email communication using AWS WorkMail and SES for the BrillianIdeas domain.

:::info AWS Region
All configurations are made in the **AWS Ireland (eu-west-1)** region. This is crucial to ensure that all services work seamlessly together.
:::

### AWS WorkMail Configuration

#### Mailbox Management

:::note Accessing Your WorkMail
To sign in and manage your emails, visit the AWS WorkMail portal: [brillianideas.awsapps.com/mail](https://brillianideas.awsapps.com/mail). Credentials for our mailbox user is stored securely in Bitwarden.
:::

- **Mail-Domain**: `mail.brillianideas.com`
- **Current Users**: Single user - `no-reply@mail.brillianideas.com`

:::caution Organization Management
Maintain a **single organization** within WorkMail to keep billing in check. AWS charges per user/month, so consolidating users is key to cost-efficiency.
:::

### AWS Simple Email Service (SES) Setup

#### Sending Emails with Confidence

We rely on AWS SES for sending and receiving emails. Ensuring that emails reach their destination involves several steps:

- **Domain Verification**: Confirm ownership by configuring DNS records (handled automatically via the AWS UI).
- **Mailbox Verification**: Validate the mailbox user (`no-reply@mail.brillianideas.com`) through an email confirmation link.
- **'Mail From' Domain**: Configured as `mail.brillianideas.com`. Ignore the "Mail From Datensatz ist nicht ausgerichtet" message; it's not an issue for `brillianideas.com`, not `mail.brillianideas.com`.
- **DMARC & DKIM**: Set up DMARC records for email authentication and utilizing 2048-bit DKIM keys for encryption, managed by AWS.

:::tip Email Deliverability Test
Use [mail-tester.com](https://mail-tester.com) to check the spam score of your sent emails. As per the latest checks, BrillianQuiz scores a perfect 10/10, while BrillianCRM/ICM are at 8.5/10 due to short message lengths. To use Mail-Tester, enter the test email address as the recipient, for example, when registering a user in the Brilliant Apps.
:::

#### Receiving Emails

Two critical AWS SES rulesets are necessary to receive emails correctly:

1. **Receipt Rulesets (Empfangsregelsätze)**: Define conditions like recipient domain (`mail.brillianideas.com`) and actions (routing to WorkMail ARN `arn:aws:workmail:eu-west-1:995617718697:organization/m-50c14c5d981a422bb2eadb9dd0f0fad5`).
2. **IP Address Filter**: Set to accept all connections (0.0.0.0/0) for total email reception freedom.

### SMTP Credentials and Sending Settings

#### The Gateway to Email Dispatch

An SMTP user, created via AWS IAM. The settings for sending mail are typically:

- **Port**: 587 (Secure, with TLS)
- **Server**: email-smtp.eu-west-1.amazonaws.com

Credentials for the SMTP user are, as always, securely stored in Bitwarden.