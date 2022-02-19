# Pasta local do fonte
PATH_PROJETO=/home/fmarcon/Projetos/portal-admin/

# Copia arquivo package.json atualizado para quando
# gerar a imagem
cp $PATH_PROJETO/frontend/package.json ./app/

## Gera a imagen do frontend
docker build --file DockerFileFrontend --tag=p01frontend .

# Gera a imagen do backend
docker build --file DockerFileBackend --tag=p01backend .

# Gera a imagen do nginx
docker build --file DockerFileNginx --tag=p01nginx .