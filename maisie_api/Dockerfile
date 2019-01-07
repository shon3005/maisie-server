FROM bitwalker/alpine-elixir-phoenix:latest
WORKDIR "/app"
COPY ./mix.exs ./mix.lock ./
RUN MIX_ENV=prod mix do deps.get, deps.compile
COPY . .
RUN MIX_ENV=prod mix compile
# RUN ["chmod", "+x", "./entrypoint.sh"]
# ENTRYPOINT ["sh", "./entrypoint.sh"]
# CMD ["MIX_ENV=prod", "mix", "phx.server"]
CMD MIX_ENV=prod mix do ecto.create, ecto.migrate, phx.server