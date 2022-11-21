FROM openjdk:17-jdk

WORKDIR /app/auth

COPY build/libs/auth-service-0.0.1-SNAPSHOT.jar auth-service-0.0.1-SNAPSHOT.jar

EXPOSE 8001

CMD ["java", "-jar", "auth-service-0.0.1-SNAPSHOT.jar"]