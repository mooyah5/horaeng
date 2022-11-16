FROM openjdk:17-jdk

WORKDIR /app/config-service

COPY build/libs/config-service-0.0.1-SNAPSHOT.jar config-service-0.0.1-SNAPSHOT.jar

EXPOSE 8888

CMD ["java", "-jar", "config-service-0.0.1-SNAPSHOT.jar"]