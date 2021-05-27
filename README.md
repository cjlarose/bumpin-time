# Bumpin' time

```sh
docker build -t bumpin-time .
docker run -it -e WOL_MAC=20:DE:20:DE:20:DE -p 3000:3000 bumpin-time
```
