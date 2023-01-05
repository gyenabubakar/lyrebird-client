<div style="text-align: center;">
    <img src="./app/public/lyrebird-logo.svg" width="100" alt="Lyrebird logo" />
</div>

# Lyrebird Client

Lyrebird is simply a content creation and management application for social media platforms and is currently focused on
Twitter only. In short, Lyrebird is just another alternative to [Hypefury](https://hypefury.com) or
[Hootsuite](https://hootsuite.com) but without support for the other social networks. That will come later.

Here's a Notion document that explains the project in more detail to the UI designer who worked on
this: [Lyrebird Notion Document](https://www.notion.so/gyen/Lyrebird-A-Twitter-Content-Management-Software-6808d851058745099b444e52e6aa1471).

## Setup

To setup the project, you need to have [Node.js](https://nodejs.org/en/) installed on your machine, **at least v16.x**
and it's recommended to use NPM (**>= v8.x**) as your package manager; this is to ensure consistency across the project
and to prevent any issues with using different package managers.

### Install dependencies

Running `npm install` will install dependencies and also run the `prepare` script which will enable hooks with Husky.
