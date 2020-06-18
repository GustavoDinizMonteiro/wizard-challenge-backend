FROM mhart/alpine-node:latest

# Set environment variables.
ENV HOME /root
# Define working directory.
WORKDIR /root

# Cloning and install dependencies
RUN \
  apk add git && \
  git clone https://github.com/GustavoDinizMonteiro/wizard-challenge-backend.git && \
  (cd wizard-challenge-backend && npm install)

# Define working directory.
WORKDIR /root/wizard-challenge-backend