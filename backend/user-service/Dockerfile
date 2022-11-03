FROM openjdk:17-jdk

WORKDIR /app/user

COPY build/libs/*.jar user-0.0.1-SNAPSHOT.jar

EXPOSE 8010

CMD ["java", "-jar", "user-0.0.1-SNAPSHOT.jar"]