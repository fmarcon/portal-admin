# Pasta local do fonte
PATH_SOURCE_REACTJS=/home/fmarcon/Projetos/Reactjs/portal-admin-reactjs

# Copia arquivo package.json atualizado para quando
# gerar a imagem
cp $PATH_SOURCE_REACTJS/package.json ./app/

# Gera a imagen do react
docker build --file DockerFileReactJS --tag=p01reactjs .

# Gera a imagen do django
docker build --file DockerFileDjango --tag=p01django .

# Gera a imagen do nginx
docker build --file DockerFileNginx --tag=p01nginx .