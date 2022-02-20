# Frontend container config

IMAGE=p01frontend
CONTAINER=cp01frontend
NETWORK=netproj01
HOST=frontendproj01.ucs.br
IP=172.18.0.3
PORT=3000

COMAND="npm start"

cd ..
docker run \
  --rm -it \
  --name $CONTAINER \
  -v $PWD/frontend/src:/app/src \
  -v $PWD/frontend/public:/app/public \
  -v $PWD/frontend/build:/app/build \
  --net $NETWORK \
  -h $HOST \
  --ip $IP \
  -p $PORT:$PORT $IMAGE \
  $COMAND
