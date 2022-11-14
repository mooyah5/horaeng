FROM openjdk:17-jdk

WORKDIR /app/social-service

COPY build/libs/*social-service-0.0.1-SNAPSHOT.jar social-service-0.0.1-SNAPSHOT.jar

EXPOSE 8020

CMD ["java", "-jar", "social-service-0.0.1-SNAPSHOT.jar"]