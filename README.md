# Estudio_Javascript
- Introducción a la Programación con JavaScript










---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


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

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
