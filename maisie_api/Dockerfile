# Dockerfile
FROM elixir:1.6.5-alpine as build

# install build dependencies
RUN apk add --update git

# prepare build dir
RUN mkdir /app
WORKDIR /app

# install hex + rebar
RUN mix local.hex --force && \
    mix local.rebar --force

# set build ENV
ENV MIX_ENV=prod

# install mix dependencies
COPY mix.exs mix.lock ./
COPY config ./
# COPY deps ./
# RUN mix deps.compile

# build release
COPY . .
RUN mix release --no-tar --verbose

# prepare release image
FROM alpine:3.6
RUN apk add --update bash openssl

RUN mkdir /app && chown -R nobody: /app
WORKDIR /app
USER nobody

COPY --from=build /app/_build/prod/rel/maisie_api ./

ENV REPLACE_OS_VARS=true

ENTRYPOINT ["/app/bin/maisie_api"]