defmodule MaisieApi.ElasticsearchCluster do
  use Elasticsearch.Cluster, otp_app: :maisie_api
end