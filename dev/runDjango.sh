PATH_SOURCE_API=/home/fmarcon/Dropbox/Projetos/authjwt

docker run --rm -it -v $PATH_SOURCE_API/:/api -p 8000:8000 p01django ./manage.py runserver 0.0.0.0:8000
