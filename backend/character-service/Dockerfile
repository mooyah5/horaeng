FROM openjdk:17-jdk

WORKDIR /app/user-service

COPY build/libs/character-service-0.0.1-SNAPSHOT.jar character-service-0.0.1-SNAPSHOT.jar

EXPOSE 8030

CMD ["java", "-jar", "character-service-0.0.1-SNAPSHOT.jar"]