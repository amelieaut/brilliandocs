---
id: cicd
title: CI/CD Pipeline
---

## CI/CD GitHub Workflow Pipeline

Each application employs a GitHub Workflow defined in the `.github/workflows/deploy-AWS.yml` file of each repository. This workflow automates the deployment process, building Docker images using the repository's Dockerfile(s) and pushing them to the GitHub image registry and then to their specified Elastic Beanstalk environment upon commits to the main branch. It's essential to ensure that the GitHub repository for the Docker image is set to public, as the default setting will be set to private for new packages and repositories. The setting can be changed in GitHub once a package has been released. Additionally ensure that the application and environment name defined in the `deploy-AWS.yml` matches the one defined for the Elastic Beanstalk environment!