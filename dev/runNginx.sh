# Nginx container config

IMAGE=p01nginx
CONTAINER=cp01nginx
NETWORK=netproj01
HOST=nginxproj01.ucs.br
IP=172.18.0.2
PORT=443

# Stop nginx host
sudo service nginx stop


if [ "$1" == "b" ]; then
    COMANDO='/bin/bash'
else
    COMANDO=''
fi;


docker run \
    --rm -it \
    --name $CONTAINER \
    -v $PWD/etc/nginx/conf.d:/etc/nginx/conf.d \
    --net $NETWORK \
    -h $HOST \
    --ip $IP \
    -p $PORT:$PORT $IMAGE \
    $COMANDO
