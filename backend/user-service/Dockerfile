FROM openjdk:17-jdk

WORKDIR /app/user-service

COPY build/libs/user-service-0.0.1-SNAPSHOT.jar user-service-0.0.1-SNAPSHOT.jar

EXPOSE 8010

CMD ["java", "-jar", "user-service-0.0.1-SNAPSHOT.jar"]