if [ $1 = 's' ]; then
    COMANDO='./manage.py shell_plus'

elif [ $1 = 'b' ]; then
    COMANDO='/bin/bash'

else
    COMANDO='./manage.py runserver 0.0.0.0:8000'
fi;


cd ..
docker run --rm -it \
    --name cp01backend \
    -v $PWD/backend/:/api \
    -p 8000:8000 p01backend \
    $COMANDO
