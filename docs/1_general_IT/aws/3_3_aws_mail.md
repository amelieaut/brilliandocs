---
id: mail
title: E-Mail Sending and Receiving
---

## Email Infrastructure Using AWS WorkMail and SES

### AWS WorkMail Configuration (IRELAND!)

To utilize AWS WorkMail for the BrillianIdeas domain (@mail.brillianideas.com), an organization is first established within WorkMail. Currently, there exists a single user: `no-reply@mail.brillianideas.com`. The credentials for this user are securely stored in Bitwarden.

It is essential to maintain a single organization within WorkMail to avoid unnecessary billing. WorkMail charges per user, per month, so it is cost-effective to consolidate users under one organization where possible.

### AWS Simple Email Service (SES) Configuration (IRELAND!)

BrillanIdeas leverages AWS SES to handle the receiving and sending of emails. To successfully send emails, the domain and the mailbox user need to be verified, which involves DNS record configuration (automatic DNS settings via the AWS UI) and mailbox verification through a confirmation email link.

Emails are dispatched from the subdomain `mail.brillianideas.com`. Despite a non-alignment error, "Mail From Datensatz ist nicht ausgerichtet," this can be safely disregarded. Domain-based Message Authentication, Reporting & Conformance (DMARC) records are set up for this subdomain to authenticate outbound emails, enhancing security and delivery success and the domain keys identified mail (DKIM) settings are modern and secure, utilizing 2048-bit encryption keys and managed via CNAMES automatically by AWS.

To assess the spam rating of sent emails you can use https://mail-tester.com. For testing purposes, one might input the target email address displayed on https://mail-tester.com [into the BrillianCRM registration or similar forms. As in the time of writing the Quiz Application receives a 10 and CRM/ICM receive a 8.5 spam rating (the only issue being the short messages).

### Email Receiving Configuration

For receiving emails, two AWS SES rulesets are necessary: 

1. **Receipt Rulesets (Empfangsregelsätze):** These define the conditions for receiving emails, such as the destination domain (brillianideas.com), and the action to take, which involves directing the email to the relevant WorkMail organization Amazon Resource Name (ARN).
   
2. **IP Address Filter:** This is currently set to accept all connections (0.0.0.0/0), allowing unrestricted receipt of emails from any IP address.

### SMTP User and Credentials

For the sending of emails, an identity (SMTP user) is created in AWS Identity and Access Management (IAM). The SMTP user's credentials are stored in Bitwarden, with the SMTP settings usually configured as follows:

- **Port**: 587
- **Server**: email-smtp.eu-west-1.amazonaws.com
- **Protocol**: tls

To sign in to AWS WorkMail and access the mailbox, you can use the following link: [https://brillianideas.awsapps.com/mail](https://brillianideas.awsapps.com/mail).