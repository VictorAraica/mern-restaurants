# mern-restaurants

Pasos para correr el codigo:

1- usar: `npm run install-client`

2- usar: `npm install`

3- usar: `npm run dev`


# Documentacion de la API

Es una api bastante sencilla, solo tiene 4 funciones:
<br>
<br>

#### Obtener todos los restaurantes que hay en la base de datos:

`GET "/api/restaurants"`

No necesita que se mande ninguna información.
<br>
<br>
<hr>

#### Obtener un restaurante por id:

`GET "/api/restaurants/:restaurantId"`

Solo necesita que se pase el id del restaurante por la url.
<br>
<br>
<hr>

#### Publicar un restaurante:

`POST "/api/restaurants"`

Necesita que se pase en el body toda la información con el siguiente formato.

```json 
{
    "name": "nombre_del_rastaurante",
    "description": "descripción_del_restaurante",
    "images": ["URL_de_la_imagen", "URL_de_la_imagen"]
}
```
<br>
<br>
<hr>

#### Publicar un restaurante:

`POST "/api/comment"`

Necesita que se pase en el body toda la información con el siguiente formato.

```json
{
    "restaurantId": "id_del_restaurante",
    "user": "nombre_del_usuario",
    "comment": "comentario"
}
```


