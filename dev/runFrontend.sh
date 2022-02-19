cd ..
docker run \
  --rm -it \
  --name cp01frontend \
  -v $PWD/frontend/src:/app/src \
  -v $PWD/frontend/public:/app/public \
  -v $PWD/frontend/build:/app/build \
  -p 3000:3000 p01frontend \
  npm start
