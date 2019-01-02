defmodule MaisieApiWeb.Schema.Types do
    use Absinthe.Schema.Notation

    alias MaisieApiWeb.Schema.Types

    import_types(Types.Usertype)
    import_types(Types.SessionType)
    import_types(Types.GroupType)
end