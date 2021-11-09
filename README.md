# Bumpin' time

## What is this?

![Screen Shot 2021-11-08 at 16 16 04](https://user-images.githubusercontent.com/954763/140838562-d50df9ba-d5bd-4052-bf09-6b38413d2c8b.png)
![Screen Shot 2021-11-08 at 16 16 33](https://user-images.githubusercontent.com/954763/140838572-11d822ac-dc40-4e6d-a1fc-d95b1ba49562.png)

Bumpin' Time is a web application that allows you to wake up a machine on your network by sending it a Wake-on-LAN (WOL) magic packet. The [`wake_on_lan`](https://www.npmjs.com/package/wake_on_lan) npm package does the networking stuff; this project just wraps it up in a Web interface.

Authentication is accomplished via a combination of HTTP Basic Auth and Cookie-based authentication. Basically, the `PASSWORD` is used for HTTP Basic Auth (the username is ignored). If you pass the HTTP Basic Auth test, you're granted a cookie (signed with `COOKIE_SECRET`) with a long expiration time. With that you can make wake requests to the configured machine.

## Run it

```sh
docker build -t bumpin-time .
docker run -it \
  -e PASSWORD=supersecret123 \
  -e COOKIE_SECRET=supersecret456 \
  -e WOL_MAC=20:DE:20:DE:20:DE \
  -e WOL_ADDRESS=255.255.255.255 \
  -p 3000:3000 \
  bumpin-time
```
