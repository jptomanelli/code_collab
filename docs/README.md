# Code_collab

## Instructions

vagrant up
vagrant ssh

### Install nvm
sudo apt-get update
sudo apt-get install build-essential libssl-dev curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
source ~/.profile

### check that nvm is available
command -v nvm

### Install node.js version
nvm install 6.5.0

### Verify that it is installed
nvm ls

### check the node version
node -v

### Go to shared dir

cd /vagrant/app

### Dep

npm install

npm install -g sequelize-cli

### start the app
npm start

### view
Go to 192.168.33.10:8000 to view the app
