FROM ubuntu:latest

RUN curl -u "user:password" https://myapp.com -o /app/data
