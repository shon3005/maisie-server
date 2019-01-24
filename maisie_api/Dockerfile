FROM bitwalker/alpine-elixir-phoenix:latest
WORKDIR /app
ENV MIX_ENV=prod
COPY . .
# COPY ./mix.exs ./mix.lock ./
RUN mix deps.get
RUN mix compile
# COPY . .
CMD ["mix", "do", "ecto.create,", "ecto.migrate,", "phx.server"]
# CMD MIX_ENV=prod mix do ecto.create, ecto.migrate, phx.server