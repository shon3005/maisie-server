defmodule MaisieApiWeb.Schema.Types do
    use Absinthe.Schema.Notation

    alias MaisieApiWeb.Schema.Types

    import_types(Types.UserType)
    import_types(Types.SessionType)
    import_types(Types.CircleType)
    import_types(Types.HostType)
    import_types(Types.PaymentType)
    import_types(Types.SharedType)
end