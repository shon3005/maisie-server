#!/bin/bash
set -e

mix ecto.create
mix ecto.migrate
# mix run priv/repo/seeds.exs
 
exec "$@"