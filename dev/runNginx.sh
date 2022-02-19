# Para o serviço nginx do hospedeiro, caso esteja
# sendo executado
sudo service nginx stop

docker run \
  --rm -it \
  --name cp01nginx \
  -v $PWD/etc/nginx/conf.d:/etc/nginx/conf.d \
  -p 443:443 \
  -i p01nginx \
