
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
