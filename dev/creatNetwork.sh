# Network containers config

NETWORK=netproj01
SUBNET=172.18.0.0/16
GATEWAY=172.18.0.1

docker network create --subnet=$SUBNET --gateway=$GATEWAY $NETWORK