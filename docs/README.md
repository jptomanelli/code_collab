# Code_collab

## Dev Instructions

### Clone the project !
~~~
git clone https://github.com/rodriguez10100/code_collab
~~~
~~~
cd code_collab
~~~

### Vagrant setup
The Vagrant file is already included so you'll only need to run the command below to create the vm. You can then ssh into the machine.
~~~
$ vagrant up
~~~
~~~
$ vagrant ssh
~~~

### Installing nvm
~~~
$ sudo apt-get update
$ sudo apt-get install build-essential libssl-dev curl
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
$ source ~/.profile
~~~
Then check if nvm installed properly
~~~
$ command -v nvm
~~~
### Installing Node.js version 6.5
~~~
$ nvm install 6.5.0
$ nvm ls
$ node -v
~~~

### Dependencies
~~~
$ cd /vagrant/app
$ npm install
$ npm install -g sequelize-cli
~~~
### Installing postgres

```
$ sudo apt-get update
$ sudo apt-get install -y postgresql-9.3 postgresql-server-dev-9.3 python-psycopg2
$ sudo su - postgres
# createuser -P -s -e pg_user
# exit
$ createdb -h localhost -U pg_user codecollab_development
```

### Running the app!
~~~
$ npm start
~~~
Go to localhost:8000 to view code_collab
