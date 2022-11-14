FROM openjdk:17-jdk

WORKDIR /app/gateway

COPY build/libs/gateway-0.0.1-SNAPSHOT.jar gateway-0.0.1-SNAPSHOT.jar

EXPOSE 8000

CMD ["java", "-jar", "gateway-0.0.1-SNAPSHOT.jar"]