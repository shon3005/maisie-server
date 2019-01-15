#!/bin/bash
set -e

# if [ "$( psql -tAc "SELECT 1 FROM pg_database WHERE datname=$PGDATABASE" )" = '1' ]
# then
#     echo "Database already exists"
# else
#     echo "Database does not exist"
#     mix ecto.create
# fi

mix ecto.create
mix ecto.migrate
mix elasticsearch.build users --cluster MaisieApi.ElasticsearchCluster
# mix run priv/repo/seeds.exs
 
exec "$@"