# Estudio_Javascript
- Introducción a la Programación con JavaScript

## pasos para el git
Para agregar todo usar el "add ."
git add . 
git status
git commit -m 'algo'
git push

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

And (&&) true si todo es true
OR (||) true si uno es true
NOT (!) invierte true/false

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ESTRUCTURA FOR

A >= B, A debe ser mayor que B
A <= B, A debe ser menor que B 
++, suma 1
--, resta 1
+=X, suma X cantidad
-=X, resta X cantidad

ejemplo de formula
for (var i = 1; i <= 1; 1++)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
FUNCIONES RECURSIVAS
###example 1
var factorial = function(n)
{
  if ((n == 0 ) || (n == 11))
    return 1;
  else
{   
    console.log("factorial " + n); 
    return(n * factorial(n - 1));}
}

console.log(factorial(5));

###example 2
function  test(n)
{
  if ((n == 0 ) || (n == 1))
    return 1;
  else
    return(n * test(n - 1));
}

console.log(test(4));
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DOCUMENTACION JAVASCRIPT
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Arreglos tips
X.push("Y"); (agrega un elemento al final del array)
X.unshift("Y"); (agrega un elemento al principio del array)
X.pop("Y"); (elemina un elemento al final del array)
X.shift("Y"); (elimina un elemento al principio del array)
X.splice("Y, Z"); (elimina un elemento del array fijado como numero, donde Y es la posicion que eliminara y Z es la cantidad de veces que hara esa accion)

var pos = X.indexOf("Y");
console log.(pos); (mostrara en que lugar del array se encuentra Y, lo muesta en numeros)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Cabecera H1 
## Cabecera H2 
### Cabecera H3 
#### Cabecera H4 
##### Cabecera H5 
###### Cabecera H6 

# Underlines

Underline  1
=====

Underline 2
----


# Formatos de enfasis
- Letra *italica* de la primer forma.
- Letra _italica_ de la segunda forma.
- formato **bold o strong**
- formato __bold o strong__
- formato ~~tachado~~, formato normal

# Listas
1. Esto es un item de lista ordenada.
1. Esto es un item de lista ordenada.
1. Esto es un item de lista ordenada.
1. Esto es un item de lista ordenada.
1. Esto es un item de lista ordenada.

- Esto es un item de lista desordenada.
- Esto es un item de lista desordenada.
- Esto es un item de lista desordenada.
- Esto es un item de lista desordenada.


# Links
<a href="http://google.cl">Esto es un link

[Esto es un link ]("http://google.cl")

[Esto es un link de un archivo del git](text.txt)

# imagenes

![Logo Github](https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/06/05041237/GitHub-logo-2-imagen.jpg)

# Code Snippets

[Link de los codigos]("https://highlightjs.org/")

Codigo Java
```Java
/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;

public abstract class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}
```

Codigo javascript
```javascript
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;
```

Codigo SQL
```SQL
CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');
```

# Tablas

| Nombre | apellido | documento |
|------|--------|---------|
| maxi | burgos | 65116516|
| X | x | x |
| X | x | x |
| X | x | x |
| X | x | x |
| X | x | x |


# Citas

Esta es un texto para una cita

>Esta es la cita 

estas fuera de la cita

# Lineas divisoras
esto es un texto que sera dividido

--- 

este es otro texto 

***

otro texto

____

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
