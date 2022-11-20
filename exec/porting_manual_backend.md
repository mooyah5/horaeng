## 포팅매뉴얼 for Backend

<hr>

### JDK 설치

```
sudo apt-get update
sudo apt-get install openjdk-17-jdk
```

### auth-service

#### Dockerfile

```
FROM openjdk:17-jdk

WORKDIR /app/auth

COPY build/libs/auth-service-0.0.1-SNAPSHOT.jar auth-service-0.0.1-SNAPSHOT.jar

EXPOSE 8001

CMD ["java", "-jar", "auth-service-0.0.1-SNAPSHOT.jar"]
```

#### Jenkinsfile

```
pipeline {
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker_hub')
    }
    agent any

    stages {
        stage('build'){
            steps{
                script{
                    try {
                        dir('./backend/auth-service'){
                            sh 'chmod +x gradlew'
                            sh './gradlew clean build'
                        }
                    } catch (e) {
                        sh 'echo "auth-service 삭제 실패"'
                    }
                    try{
                        sh 'docker build -t mocaa/auth-service ./backend/auth-service'
                    }catch(e){
                        sh 'echo "docker 이미지빌드중 실패"'
                    }
                }
            }
        }
        stage('Login'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Deploy image') {
            steps {
                script {
                    sh 'docker push mocaa/auth-service'
                }
            }
        }
        stage('Cleaning up') {
            steps {
                sh 'docker rmi mocaa/auth-service'
            }
        }
        stage('Deploy') {
            steps {
                echo 'hello start'
                sshagent (credentials: ['ssh-deploy']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@43.201.97.204 '
                        cd /home/ubuntu/deploy/auth
                        ./dev.sh
                        '
                        """
                }
            }
        }
    }
}
```

#### Shell Script

```
echo "clean docker"
# 실행중인 도커 정지 및 지우기
docker stop auth-service
docker rm auth-service
docker rmi mocaa/auth-service

echo "login docker hub"
cat ../docker_pwd.txt | docker login --username mocaa --password-stdin

echo "pull image"
docker pull mocaa/auth-service

echo "docker run"
docker run -d -p 8001:8001 --network msa -e TZ=Asia/Seoul --name auth-service mocaa/auth-service
```

### character-service

#### Dockerfile

```
FROM openjdk:17-jdk

WORKDIR /app/user-service

COPY build/libs/character-service-0.0.1-SNAPSHOT.jar character-service-0.0.1-SNAPSHOT.jar

EXPOSE 8030

CMD ["java", "-jar", "character-service-0.0.1-SNAPSHOT.jar"]
```

#### Jenkinsfile

```
pipeline {
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker_hub')
    }
    agent any

    stages {
        stage('build'){
            steps{
                script{
                    try {
                        dir('./backend/character-service'){
                            sh 'chmod +x gradlew'
                            sh './gradlew clean build'
                        }
                    } catch (e) {
                        sh 'echo "character-service 삭제 실패"'
                    }
                    try{
                        sh 'docker build -t mocaa/character-service ./backend/character-service'
                    }catch(e){
                        sh 'echo "docker 이미지빌드중 실패"'
                    }
                }
            }
        }
        stage('Login'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Deploy image') {
            steps {
                script {
                    sh 'docker push mocaa/character-service'
                }
            }
        }
        stage('Cleaning up') {
            steps {
                sh 'docker rmi mocaa/character-service'
            }
        }
        stage('Deploy') {
            steps {
                echo 'hello start'
                sshagent (credentials: ['ssh-deploy']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@43.201.97.204 '
                        cd /home/ubuntu/deploy/character
                        ./dev.sh
                        '
                      """
                }
            }
        }
    }
}
```

#### Shell Script

```
echo "clean docker"
# 실행중인 도커 정지 및 지우기
docker stop character-service
docker rm character-service
docker rmi mocaa/character-service

echo "login docker hub"
cat ../docker_pwd.txt | docker login --username mocaa --password-stdin

echo "pull image"
docker pull mocaa/character-service

echo "docker run"
docker run -d -p 8030:8030 --network msa -e TZ=Asia/Seoul --name character-service mocaa/character-service
```

### config-service

#### Dockerfile

```
FROM openjdk:17-jdk

WORKDIR /app/config-service

COPY build/libs/config-service-0.0.1-SNAPSHOT.jar config-service-0.0.1-SNAPSHOT.jar

EXPOSE 8888

CMD ["java", "-jar", "config-service-0.0.1-SNAPSHOT.jar"]
```

#### Jenkinsfile

```
pipeline {
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker_hub')
    }
    agent any

    stages {
        stage('build'){
            steps{
                script{
                    try {
                        dir('./backend/config-service'){
                            sh 'chmod +x gradlew'
                            sh './gradlew clean build'
                        }
                    } catch (e) {
                        sh 'echo "config-service 삭제 실패"'
                    }
                    try{
                        sh 'docker build -t mocaa/config-service ./backend/config-service'
                    }catch(e){
                        sh 'echo "docker 이미지빌드중 실패"'
                    }
                }
            }
        }
        stage('Login'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Deploy image') {
            steps {
                script {
                    sh 'docker push mocaa/config-service'
                }
            }
        }
        stage('Cleaning up') {
            steps {
                sh 'docker rmi mocaa/config-service'
            }
        }
        stage('Deploy') {
            steps {
                echo 'hello start'
                sshagent (credentials: ['ssh-deploy']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@43.201.97.204 '
                        cd /home/ubuntu/deploy/config
                        ./dev.sh
                        '
                        """
                }
            }
        }
    }
}
```

#### Shell Script

```
echo "clean docker"
# 실행중인 도커 정지 및 지우기
docker stop config-service
docker rm config-service
docker rmi mocaa/config-service

echo "login docker hub"
cat ../docker_pwd.txt | docker login --username mocaa --password-stdin

echo "pull image"
docker pull mocaa/config-service

echo "docker run"
docker run -d -p 8888:8888 --network msa -e TZ=Asia/Seoul --name config-service mocaa/config-service
```

### gateway

#### Dockerfile

```
FROM openjdk:17-jdk

WORKDIR /app/gateway

COPY build/libs/gateway-0.0.1-SNAPSHOT.jar gateway-0.0.1-SNAPSHOT.jar

EXPOSE 8000

CMD ["java", "-jar", "gateway-0.0.1-SNAPSHOT.jar"]
```

#### Jenkinsfile

```
pipeline {
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker_hub')
    }
    agent any

    stages {
        stage('build'){
            steps{
                script{
                    try {
                        dir('./backend/gateway'){
                            sh 'chmod +x gradlew'
                            sh './gradlew clean build'
                        }
                    } catch (e) {
                        sh 'echo "gateway-service 삭제 실패"'
                    }
                    try{
                        sh 'docker build -t mocaa/gateway ./backend/gateway'
                    }catch(e){
                        sh 'echo "docker 이미지빌드중 실패"'
                    }
                }
            }
        }
        stage('Login'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Deploy image') {
            steps {
                script {
                    sh 'docker push mocaa/gateway'
                }
            }
        }
        stage('Cleaning up') {
            steps {
                sh 'docker rmi mocaa/gateway'
            }
        }
        stage('Deploy') {
            steps {
                echo 'hello start'
                sshagent (credentials: ['ssh-deploy']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@43.201.97.204 '
                        cd /home/ubuntu/deploy/gateway
                        ./dev.sh
                        '
                      """
                }
            }
        }
    }
}
```

#### Shell script

```
echo "clean docker"
# 실행중인 도커 정지 및 지우기
docker stop gateway
docker rm gateway
docker rmi mocaa/gateway

echo "login docker hub"
cat ../docker_pwd.txt | docker login --username mocaa --password-stdin

echo "pull image"
docker pull mocaa/gateway

echo "docker run"
docker run -d -p 443:443 -v /home/ubuntu/logs:/app/gateway/logs -e TZ=Asia/Seoul --network msa --name gateway mocaa/gateway
```

### social-service

#### Dockerfile

```
FROM openjdk:17-jdk

WORKDIR /app/social-service

COPY build/libs/*social-service-0.0.1-SNAPSHOT.jar social-service-0.0.1-SNAPSHOT.jar

EXPOSE 8020

CMD ["java", "-jar", "social-service-0.0.1-SNAPSHOT.jar"]
```

#### Jenkinsfile

```
pipeline {
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker_hub')
    }
    agent any

    stages {
        stage('build'){
            steps{
                script{
                    try {
                        dir('./backend/social-service'){
                            sh 'chmod +x gradlew'
                            sh './gradlew clean build'
                        }
                    } catch (e) {
                        sh 'echo "social-service 삭제 실패"'
                    }
                    try{
                        sh 'docker build -t mocaa/social-service ./backend/social-service'
                    }catch(e){
                        sh 'echo "docker 이미지빌드중 실패"'
                    }
                }
            }
        }
        stage('Login'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Deploy image') {
            steps {
                script {
                    sh 'docker push mocaa/social-service'
                }
            }
        }
        stage('Cleaning up') {
            steps {
                sh 'docker rmi mocaa/social-service'
            }
        }
        stage('Deploy') {
            steps {
                echo 'hello start'
                sshagent (credentials: ['ssh-deploy']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@43.201.97.204 '
                        cd /home/ubuntu/deploy/social
                        ./dev.sh
                        '
                      """
                }
            }
        }
    }
}
```

#### Shell Script

```
echo "clean docker"
# 실행중인 도커 정지 및 지우기
docker stop social-service
docker rm social-service
docker rmi mocaa/social-service

echo "login docker hub"
cat ../docker_pwd.txt | docker login --username mocaa --password-stdin

echo "pull image"
docker pull mocaa/social-service

echo "docker run"
docker run -d -p 8020:8020 --network msa -e TZ=Asia/Seoul --name social-service mocaa/social-service
```

### user-service

#### Dockerfile

```
FROM openjdk:17-jdk

WORKDIR /app/user-service

COPY build/libs/user-service-0.0.1-SNAPSHOT.jar user-service-0.0.1-SNAPSHOT.jar

EXPOSE 8010

CMD ["java", "-jar", "user-service-0.0.1-SNAPSHOT.jar"]
```

#### Jenkinsfile

```
pipeline {
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker_hub')
    }
    agent any

    stages {
        stage('build'){
            steps{
                script{
                    try {
                        dir('./backend/user-service'){
                            sh 'chmod +x gradlew'
                            sh './gradlew clean build'
                        }
                    } catch (e) {
                        sh 'echo "user-service 삭제 실패"'
                    }
                    try{
                        sh 'docker build -t mocaa/user-service ./backend/user-service'
                    }catch(e){
                        sh 'echo "docker 이미지빌드중 실패"'
                    }
                }
            }
        }
        stage('Login'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Deploy image') {
            steps {
                script {
                    sh 'docker push mocaa/user-service'
                }
            }
        }
        stage('Cleaning up') {
            steps {
                sh 'docker rmi mocaa/user-service'
            }
        }
        stage('Deploy') {
            steps {
                echo 'hello start'
                sshagent (credentials: ['ssh-deploy']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@43.201.97.204 '
                        cd /home/ubuntu/deploy/user
                        ./dev.sh
                        '
                      """
                }
            }
        }
    }
}
```

#### Shell Script

```
echo "clean docker"
# 실행중인 도커 정지 및 지우기
docker stop user-service
docker rm user-service
docker rmi mocaa/user-service

echo "login docker hub"
cat ../docker_pwd.txt | docker login --username mocaa --password-stdin

echo "pull image"
docker pull mocaa/user-service

echo "docker run"
docker run -d -p 8010:8010 --network msa -e TZ=Asia/Seoul --name user-service mocaa/user-service
```

### eureka

#### Dockerfile

```
FROM openjdk:17-jdk

WORKDIR /app/eureka

COPY build/libs/eureka-0.0.1-SNAPSHOT.jar eureka-0.0.1-SNAPSHOT.jar

EXPOSE 8760

CMD ["java", "-jar", "eureka-0.0.1-SNAPSHOT.jar"]
```

#### Jenkinsfile

```
pipeline {
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker_hub')
    }
    agent any

    stages {
        stage('build'){
            steps{
                script{
                    try {
                        dir('./backend/eureka'){
                            sh 'chmod +x gradlew'
                            sh './gradlew clean build'
                        }
                    } catch (e) {
                        sh 'echo "eureka 삭제 실패"'
                    }
                    try{
                        sh 'docker build -t mocaa/eureka ./backend/eureka'
                    }catch(e){
                        sh 'echo "docker 이미지빌드중 실패"'
                    }
                }
            }
        }
        stage('Login'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Deploy image') {
            steps {
                script {
                    sh 'docker push mocaa/eureka'
                }
            }
        }
        stage('Cleaning up') {
            steps {
                sh 'docker rmi mocaa/eureka'
            }
        }
        stage('Deploy') {
            steps {
                echo 'hello start'
                sshagent (credentials: ['ssh-deploy']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@43.201.97.204 '
                        cd /home/ubuntu/deploy/user
                        ./dev.sh
                        '
                      """
                }
            }
        }
    }
}
```

#### Shell Script

```
echo "clean docker"
# 실행중인 도커 정지 및 지우기
docker stop eureka
docker rm eureka
docker rmi mocaa/eureka

echo "login docker hub"
cat ../docker_pwd.txt | docker login --username mocaa --password-stdin

echo "pull image"
docker pull mocaa/eureka

echo "docker run"
docker run -d -p 8760:8760 -e TZ=Asia/Seoul --network msa --name eureka mocaa/eureka
```

### Mysql

```
$ docker run -p 9010:3306 -e MYSQL_ROOT_PASSWORD=root -e TZ=Asia/Seoul --name user mysql

$ docker run -p 9020:3306 -e MYSQL_ROOT_PASSWORD=root -e TZ=Asia/Seoul --name social mysql

$ docker run -p 9030:3306 -e MYSQL_ROOT_PASSWORD=root -e TZ=Asia/Seoul --name character mysql
```

### Rabbit MQ

```
$ docker run -d -p 15672:15672 -p 5672:5672 --name rabbitmq rabbitmq
```

### Filebeat

```
$ docker pull docker.elastic.co/beats/filebeat:7.6.2

$ docker run -d --name filebeat \
--network msa \
--user=root \
-v /Users/burger/Desktop/Docker/filebeat/filebeat.docker.yml:/usr/share/filebeat/filebeat.yml:ro \
-v /Users/burger/Desktop/Docker:/hostFiles/logs \
-v /var/lib/docker/containers:/var/lib/docker/containers:ro \
-v /var/run/docker.sock:/var/run/docker.sock:ro \
docker.elastic.co/beats/filebeat:7.6.2 \
-E output.elasticsearch.hosts=easticsearch:9200
```

### Elasticsearch

```
$ docker pull docker.elastic.co/elasticsearch/elasticsearch:7.15.2

$ docker run --name elasticsearch\
 -p 9200:9200\
 -p 9300:9300\
 -e "discovery.type=single-node"\
 docker.elastic.co/elasticsearch/elasticsearch:7.6.2
```

### Kibana

```
$ docker pull docker.elastic.co/kibana/kibana:7.15.2

$ docker run -d --name kibana\
--network msa\
-p 5601:5601\
-e "ELASTICSEARCH_HOSTS=http://es01:9200"\
-e "ELASTICSERCH_URL=http://es01:9200"\
docker.elastic.co/kibana/kibana:7.6.2
```

### Grafana

```
$ docker run -d -p 3000:3000 grafana/grafana
```

### Logstash

```
$ docker pull docker.elastic.co/logstash/logstash:7.6.2

$ sudo docker volume create logstash

$ sudo docker run -d -v logstash:/usr/share/logstash docker.elastic.co/logstash/logstash:7.6.2
```

### Prometheus

```
$ docker run -d -it --name prometheus --network msa -p 9000:9090 -v /etc/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
```
