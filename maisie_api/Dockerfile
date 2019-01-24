FROM bitwalker/alpine-elixir-phoenix:latest
WORKDIR /app
ENV MIX_ENV=prod
COPY . .
RUN mix deps.get
RUN mix compile
CMD ["mix", "do", "ecto.create,", "ecto.migrate,", "phx.server"]