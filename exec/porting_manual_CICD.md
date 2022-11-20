## 포팅매뉴얼 for CI/CD

<hr/>

Docker 관련 내용은 [여기](https://docs.docker.com/engine/install/ubuntu)에서 확인할 수 있다.

### Docker 설치

#### Set up the repository

1. Update the apt package index and install packages to allow apt to use a repository over HTTPS:

```
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

2. Add Docker’s official GPG key:

```
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

3. Use the following command to set up the repository:

```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

#### Install Docker Engine

1. Update the apt package index:

```
sudo apt-get update
```

2. Install Docker Engine, containerd, and Docker Compose.

```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### Docker Compose 설치

1. To download and install the Compose CLI plugin, run:

```
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.12.2/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
```

2. Apply executable permissions to the binary:

```
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
```

3. Test the installation.

```
docker compose version
```

### Jenkins 설치

#### Docker Compose를 사용해 설치

```
version: '3'

services:
        jenkins:
                image: jenkins/jenkins:lts
                container_name: jenkins
                volumes:
                        - /var/run/docker.sock:/var/run/docker.sock
                        - /jenkins:/var/jenkins_home
                ports:
                        - "9090:8080"
                privileged: true
                user: root
```

docker-compose.yml
