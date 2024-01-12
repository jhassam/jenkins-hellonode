# Image de base
FROM node:7-onbuild


LABEL maintainer "jhassam@free.fr"

# health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8080 || exit 1

# le port exposé
EXPOSE 8080