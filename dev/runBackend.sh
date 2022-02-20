# Backend container config

IMAGE=p01backend
CONTAINER=cp01backend
NETWORK=netproj01
HOST=backendproj01.ucs.br
IP=172.18.0.4
PORT=8000

if [ "$1" == "s" ]; then
    COMANDO='./manage.py shell_plus'

elif [ "$1" = 'b' ]; then
    COMANDO='/bin/bash'
else
    COMANDO='./manage.py runserver 0.0.0.0:8000'
fi;


cd ..
docker run -it --rm \
    --name $CONTAINER \
    -v $PWD/backend/:/api \
    --net $NETWORK \
    -h $HOST \
    --ip $IP \
    -p $PORT:$PORT $IMAGE \
    $COMANDO
