# Bumpin' time

```sh
docker build -t bumpin-time .
docker run -it \
  -e PASSWORD=supersecret123 \
  -e WOL_MAC=20:DE:20:DE:20:DE \
  -e WOL_ADDRESS=255.255.255.255 \
  -p 3000:3000 \
  bumpin-time
```
