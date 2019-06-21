FROM gradle:jdk8 as builder
RUN git clone https://github.com/ScottLogic/datahelix.git
COPY --chown=gradle:gradle . /datahelix
WORKDIR ./datahelix/orchestrator
RUN gradle fatJar --no-daemon


FROM openjdk:8-jre-slim
EXPOSE 8080
COPY --from=builder /home/gradle/datahelix/orchestrator/build/libs/generator.jar /generator/
COPY ./profile.json /generator/
WORKDIR /generator
ENTRYPOINT ["java", "-jar", "generator.jar"]