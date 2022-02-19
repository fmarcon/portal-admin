cd ..
docker run --rm -it \
    --name cp01backend \
    -v $PWD/backend/:/api \
    -p 8000:8000 p01backend \
    ./manage.py runserver 0.0.0.0:8000
