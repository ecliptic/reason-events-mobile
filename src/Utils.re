open BsAbstract;


let decodeDate = (date) =>
Option.Infix.(date |> Js.Json.decodeString <#> Js.Date.fromString);

let encodeDate = (date) => date |> Js.Date.toString |> Js.Json.string;
