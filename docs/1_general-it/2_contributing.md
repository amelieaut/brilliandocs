---
id: contributing
title: Development Setup and Contributing Guide
---

# Development Setup

### Getting Started with the Repository

First things first, you'll need to clone the application repository to your local machine. After joining the GitHub organization, use your preferred IDE, such as Visual Studio Code or IntelliJ.

### Setting up Docker

For a seamless development experience, Docker is the way to go. If you're a Windows user, we recommend installing it using Docker Desktop, which includes Docker Compose. If you're doing so, don't forget to set up WSL (Windows Subsystem for Linux) as well. For Mac users, Docker can be downloaded directly from the Docker website. And for those on Linux – you're probably already a Docker expert, but if not, Docker's official docs are your friend.

Each repository comes equipped with:

- **Dockerfiles**: These are scripts used by Docker to automatically build image files.
- **docker-compose.yml**: A file that defines how Docker containers should be built and run.
- **docker-compose-AWS.yml**: For AWS deployment, we have a `docker-compose-AWS.yml` that differs mainly in pulling images from the GitHub repository, which should be public to allow access ###

#### Docker Commands

Navigate to the repository directory and use the following commands:

- To start Docker containers:

```shell
docker compose up -d
```

- To rebuild the images:

```shell
docker compose up -d --build
```

- For a complete rebuild (useful when changes are not reflecting):

```shell
docker compose up -d --build --force-recreate
```

### Alternative Setup Without Docker

If for any reason you opt not to use Docker, ensure you have Node.js and npm installed for running BrilianQuiz, Imbit-n3xt, and BrillianDocs. The typical command to start the applications is:

```shell
npm run start
```

Notably, some applications like BrillianIdeas, BrillianCRM, and BrillianICM have traditionally been dockerized due to their more complex setups involving Apache for BrillianIdeas and  Java, Tomcat, and Maven for BrilianCRM/ICM.

### Local vs. AWS Development

While AWS dev instances were previously used for testing, local development with Docker is now preferred due to its speed, cost efficiency, and simplicity. Notably, the architecture is x86-based. Mac users with M series chips might encounter issues and may need to seek online resources for assistance in emulation.

# Contributing to BrillianDocs

The power of collaboration lies in your hands! Here's how to get started:

### Creating Your Branch

When you're ready to contribute, create a new branch in the respective repository. Name it something identifiable like `yourname_feature` to reflect what you'll be working on.

```shell
git checkout -b yourname_feature
```

### Making a Pull Request (PR)

After you've made your awesome changes, push your branch and open a pull request against the main branch. This will trigger the CI/CD Pipeline, which deploys to AWS or GitHub Pages for BrillianDocs.

Once your contributions have been merged, feel free to delete your feature branch.

👉 For a visual guide on branching, check out [this YouTube tutorial](https://www.youtube.com/watch?v=Q1kHG842HoI). Remember, your IDE likely has tools to manage Git branches through a graphical user interface.

### GitHub Organization Settings

Our GitHub organization is set to private, but individual repositories are public. We recommend a thorough review of the GitHub settings, including the integration of Dependabot for dependency updates and enabling security alerts. This might be an excellent first contribution if you're up for it!




Dev Setup
Once you have access to the GitHub organization, clone the application repository to your computer with git. Best use VSCode or IntelliJ as your IDE as they help you making it without running git commands on your terminal.

To start the easiest and fastest use Docker (guide on how to install it with docker compose as well for windows [briefly explain WSL], mac and make joke if you are running linux you proablbly know how to install docker if not already done).
Each reposository has working Dockerfiles (brief explanation what a dockerfile is) for building the images and docker-compose.yml (explain what docker compose is) that once run build the image and run the container. 
The command to run the docker compose is:
docker compose up -d (make sure to be have navigated to the correct path. alternatively with docker compose -f FILEPATH/NAME up -d can be specified)
with docker compose up -d --build the images will be rebuilt using the dockerfile and with docker compose up -d --build --force-recreate they will be rebuilt and completely rebuilt (sometimes necessary)
The docker-compose-AWS.yml is the deployment for AWS, it's only difference is usually that instead of having a build instruction it pulls the images on the Github Repository which needs to be set to public so AWS can fetch is (this is the cheapest option, yes AWS can host iamges)

If you prefer to develop without docker, make sure to have npm/nodejs for BrilianQuiz, Imbit-n3xt and Brilliandocs installed. (short guide to install it on Windows and Mac). The commands for running are npm run start. The following applications have at the time of writing only been ran with Docker so this guide can't described. BrillianIdeas uses a simple Apache Webserver with boring static files. BrillianCMR and BrillianICM use Java and Tomcat and packaged with maven which should be painful to set up properly locally. (short guide how to install apache, java sdk, tomcat for both windows and mac)

There used to be properly set up AWS dev instances so one could test the code on AWS instead of locally but to be honest, it takes up to 5 Minutes for a change to go live, consumes money on AWS and overcomplicates the setup. Just do it locally with docker. The architecture is everytime x86 except for BrillianIdeas. When ARM64 was tested BrillianCRM, ICM and Quiz had all login issues and as the author of this documentation own only x86 computers maybe the local dev environment might not work for mac users with M series chips. In that case consult the internet, the dockerfiles have no platform specific images set up, but maybe emulating x86 is your best bet.

Contributing
Please create in each repo your own branch with your name for example `fabio_sauna`. Maybe even do fabio_sauna_featurename if you are working on something specific. Then once you finished what ever you want to do, do pull requests (PR) to the main branch. The CI/CD Pipeline which deploys on AWS or Github pages (BrillianDocs) will be triggered on changes to the branch main. At the end you can delete your branches. This youtube guide explains branching quite well https://www.youtube.com/watch?v=Q1kHG842HoI, please note the IDE takes care of the git commands via the GUI

Github Organization settings
The Github organization is set to private but each package has been made public. The complete Github side of settings should be redone and looked through. Adding depenedabot everywhere, security alerts, could be maybe a task for you ;)

