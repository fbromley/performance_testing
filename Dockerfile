FROM gradle:jdk8 as builder
RUN git clone https://github.com/ScottLogic/datahelix.git
WORKDIR ./generator
COPY --chown=gradle:gradle . /generator
RUN gradle build --no-daemon


FROM openjdk:8-jre-slim
EXPOSE 8080
COPY --from=builder /generator/generator.tar /generator/src
WORKDIR /app
RUN tar -xvf generator.tar
WORKDIR /app/generator
CMD console.log("hello")