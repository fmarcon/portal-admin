PATH_SOURCE_REACTJS=/home/fmarcon/Projetos/Reactjs/portal-admin-reactjs

docker run \
  --rm -it \
  -v $PATH_SOURCE_REACTJS/src:/app/src \
  -v $PATH_SOURCE_REACTJS/public:/app/public \
  -v $PATH_SOURCE_REACTJS/build:/app/build \
  -p 3000:3000 p01reactjs npm start
