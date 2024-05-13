---
id: backup
title: Backup and Datamanagement
---

## Data Backup Strategy

As the code and complete configuration for almost each application resides within their respective GitHub repository, there is currently no a formal backup strategy. Registered user accounts for services BrillianQuiz, BrillianCRM, and BrillianICM are the only valuable data; however users can re-register in the event of a total loss. The sole exception is the WordPress page, which would require a different approach to data backup and restoration.



## Preventing Data Loss and Handling EC2 Shutdowns

If there is a need to terminate an application, it should be done through the Elastic Beanstalk dashboard. The application will initially show as terminated and will automatically disappear after a certain period. It is essential to handle the shutdown of EC2 instances with care, as their associated volumes will be deleted!

