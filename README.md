This script can set up a Wayback Machine on your local machine/NAS/server using the official [Puppeteer](https://github.com/puppeteer/puppeteer) Docker container.

Some drawbacks:
- This does not come with a web interface. Instead everything will be placed in folders on your disk and you'll have to use your file browser.
- The saved data are `.jpg` screenshots. So no clickable/navigatable web pages, just simple screenshots.

## Getting started

1. Clone the repo
2. Copy `config.js.example` to `config.js` and add the domains you want.
3. Run the following docker command to retrieve a screenshot of every website you added.
```bash
docker run \
    -i --init \
    --cap-add=SYS_ADMIN \
    --rm \
    --volume=$PWD/screenshots:/home/pptruser/screenshots \
    --volume=$PWD/config.js:/home/pptruser/config/config.js \
    ghcr.io/puppeteer/puppeteer:latest \
    node -e "`cat screenshot.js`"
```
4. (optional) Add the docker command to cron to do this every x time.
