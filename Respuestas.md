## Seccion 1

1.	¿Cuál es la diferencia entre etiquetas semánticas y no semánticas en HTML?

    Las etiquetas semánticas son aquellas que indican el proposito o significado del código ejemplo: <header>, <footer>, <main>
    las etiquetas no semánticas son las que solamente se utilizan para darle un orden en la parte visual en el navegador ejemplo: <div>

2.	¿Qué ventajas tiene usar Flexbox o Grid en CSS?

    las ventajas son que son faciles de modificar ya que al modificarlos desde el archivo css se normaliza el cambio en todo el documento

3.	¿Cuál es la diferencia entre == y === en JavaScript?

    los signos == se utilizan para validar que el texto sea el mismo que se obtiene al que se desea comparar
    los signos === se utilizan para validar que el texto sea exactamente igual al que se desea comparar esto siendo un case sensitive (diferencia entre mayusculas y minusculas)

4.	Explica qué es el DOM y cómo lo manipularías con JS.

    el DOM es lo mostrado en el navegador web (Página), se puede modificar por medio de javascript o jquery
    ejemplo javascript

    document.getElementById("parrafo");

    usando jquery

    $('#parrafo').val('lo que se desea colocar en el elemento');


## Seccion 2 

1. ¿Qué diferencia existe entre $_GET y $_POST?

    El metodo $_GET obtiene los datos desde la url en el navegador
    el metodo $_POST envia los datos sin necesidad de escribirlos en la url

2. ¿Por qué es importante usar password_hash?

    Es importante ya que encripta la contraseña para que no sea obtenida facilmente ya que este no cuenta con desencriptacion para descifrarla

## Seccion 3

1.	Diferencia entre INNER JOIN y LEFT JOIN.

    INNER JOIN: Devuelve solo los registros que tienen coincidencia en ambas tablas.
    LEFT JOIN: Devuelve todos los registros de la primer tabla seleccionada, y solo los coincidentes de la segunda (si no hay coincidencia, rellena con NULL)

2.	Explica clave primaria y clave foránea.

    la clave primaria es la que identifica un registro y debe ser unica
    la llave foránea sirve para hacer referencia a un registro de otra tabla utilizada comunmente para realizar las relaciones entre tablas

## Seccion 4

1.	¿Qué ventajas tiene Python para análisis de datos?

    Cuenta con una sintaxis clara
    Se cuenta con muchas librerias especializadas para lo que se requiera, ejemplo: visualizacion de datos, manejo de datos tabulares, machine learning, etc.

2.	Diferencia entre lista y diccionario.

    La lista es un arreglo de datos a los cuales se accede por medio de indices ejemplo: nombres = {"Ana","Raul","Pedro"};  print(nombres[1]).
    el diccionario es un arreglo en pares que puede ser accedido por medio de una palabra clave ejemplo: persona = {"nombre": "Ana", "edad": 25, "ciudad": "Madrid"}; print(persona["edad"])