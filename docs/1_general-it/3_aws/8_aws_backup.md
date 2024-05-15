---
id: backup
title: Backup and Data Management
---

## Establishing a Robust Data Backup Plan

In the realm of digital assets, a sound backup strategy is the cornerstone of data resilience and recovery. Here's our approach to data backup.

### GitHub as a Code Safe Haven

- **Code Storage**: Almost all application code and configurations are maintained within their respective GitHub repositories except for the wordpress page.
- **Current Backup Strategy**: Largely reliant on the integrity of GitHub, with no formal offsite or external backup processes in place.

### Data that could be lost
- **Affected Data**: Registered user accounts (admin and professor accounts are hardcoded into the repository!).
- **Applications Affected**: BrillianQuiz, BrillianCRM, and BrillianICM.
- **Recovery Approach**: Users are able to re-register in case of total loss, thus a formal backup strategy for user accounts is not deemed critical.

:::caution WordPress Data Backup
The WordPress site represents an exception, necessitating a tailored backup solution for its unique content and data.
:::

## Mitigating Data Loss and Navigating EC2 Terminations

Handling the decommissioning of resources is as critical as their creation. In the event of an application's end-of-life, proceed with the following:

### Graceful Termination via Elastic Beanstalk

- **Termination Process**: Initiate through the Elastic Beanstalk dashboard.
- **Post-Termination**: The application status will update to "terminated" and will be automatically removed after a specified period.

:::warning EC2 Instance and Volume Deletion
Exercise caution when shutting down EC2 instances. Their associated storage volumes will also be removed upon instance termination, which will lead to irreversible data loss.
:::