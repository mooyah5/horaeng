FROM openjdk:17-jdk

WORKDIR /app/social

COPY build/libs/*.jar social-0.0.1-SNAPSHOT.jar

EXPOSE 8020

CMD ["java", "-jar", "social-0.0.1-SNAPSHOT.jar"]