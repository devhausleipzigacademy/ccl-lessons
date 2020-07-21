# First deployment

- How is a website delivered to a user?
- What does **deployment** mean in the context of web development?

## Deployment with GitHub Pages

GitHub offers a service to setup a server which serves the files from a
repository at a personal url.
Since the developer wiki is not built on top of a database, but static markdown
files inside our repository, this service called GitHub pages is perfectly
suitable for publishing your developer wiki.

[Guide](https://docsify.js.org/#/deploy)

## Continuous Delivery

The nice thing about GitHub pages is, that the served files are always in sync
with the state of the repository on GitHub. This means once GitHub pages is
setup you can publish a new version of the website with a simple commit. No
extra steps are necessary.

## Check Questions

- What is the job of a static file server?
- What kind of websites can be deployed using GitHub pages? Which ones can't?
- How could a deployment method that wouldn't be caracterized as continous
  delivery look like?
