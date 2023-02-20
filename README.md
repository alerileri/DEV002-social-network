# PowerL - Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Definición del producto](#2-definición-del-producto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Diseño de la Interfaz de Usuario (UI](#4-diseño-de-la-interfaz-de-usuario-ui)
* [5. Testeos de usabilidad](#5-testeos-de-usabilidad)

## 1. Preámbulo
Hoy en día las redes sociales se han convertido en un medio de comunicación, pero también en un medio de expresión y una manera de conectar con personas alrededor del mundo, un espacio dónde compartir ideas, información, anécdotas e incluso emociones. 
Hace años que dejaron de ser solo un medio de entretenimiento para adolescentes y se han convetido en parte de la vida cotidiana de personas de todas las edades y estratos sociales.

## 2. Definición del producto

[PowerL](https://hilarious-zuccutto-4547f1.netlify.app/#/) es una red social creada
 por y para laboratorians; es decir, una red para estudiantes y egresadas de los bootcamps de Laboratoria.

Es una alternativa informal de comunicación a los canales que la organización nos ofrece, cuyo objetivo expresarnos de manera espontánea y divertida de
manera que podamos conocernos entre nosotras. 

Como estudiantes de Laboratoria, el proyecto Red Social nos dio la oportunidad
de crear <PowerL>. Tras notar que la forma en que nos comunicábamos entre
nosotras no nos dejaba conocer a fondo nuestras personalidades y que el 
contacto que teníamos con otros cohorts o egresadas era nulo, decidimos
crear este espacio al mismo tiempo que aprendíamos a hacerlo.

El resultado es una SPA con diseño responsvio que permite a las usuarias crear una cuenta de acceso y loguearse con ella; una vez dentro, pueden crear, editar, y borrar publicacciones, así como dar y quitar like y ver el contador de estos.

### Consideraciones técnicas frontend

El proyecto Social Network del bootcamp de Laboratoria fue el marco en el que desarrollamos <PowerL>. Este proyecto consideraba ciertas técnicas de frontend a aprender. Para cumplir con los objetivos de aprendizaje, desarollamos una Single Page Application (SPA) con persistencia  y alteración de datos (para lo que utilizamos firebase). Además, a partir de la creación, importación y exportación de módulos nos aseguramos de separar la manipulación del DOM de la lógica (separación de responsabilidades).

Por otro lado, también nos encargamos de la redacción y ejecución del setup de pruebas unitarias para el código de nuestra web. Estas tuvieron el desafío adicional de ser pruebas de funciones asíncronas, por lo que realizamos también mocks con jest.

Al publicar este documento, nuestras pruebas cubren más del 70% de *statements*, *functions*, *lines*, y *branches*.


## 3. Historias de Usuario

Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada una de tus Historias de Usuario debe tener:

- **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las necesidades del usuario.
- **Definición de terminado:** todos los aspectos técnicos que deben cumplirse para que, como equipo, sepan que esa historia está terminada y lista para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben incluir estos aspectos en su Definición de Terminado (más todo lo que necesiten agregar):
    - Debe ser una SPA.
    - Debe ser *responsive*.
    - Deben haber recibido *code review* de al menos una compañera de otro equipo.
    - Hicieron los *test* unitarios
    - Testearon manualmente buscando errores e imperfecciones simples.
    - Hicieron *pruebas* de usabilidad e incorporaron el *feedback* de los usuarios como mejoras.
    - Desplegaron su aplicación y etiquetaron la versión (git tag).
    
    Una parte importante del diseño de UX en nuestro proyecto fue la planeación de las historias de usuaria, las cuales nos ayudaron a planear y definir qué queríamos en nuestra red social, cómo llegaríamos a ello y cuándo estarían terminadas. 
    
    En ellas definimos cuál sería nuestro público, el objetivo y procedimiento para las funcionalidades que tendríamos en nuestra página.
    
    La creación de <PowerL> se realizó trabajando a partir de las siguientes historias de usuaria:
    
    ### HU1:  Registro de nueva usuaria
    
    **Yo como:** egresada o estudiante de Laboratoria
    **Quiero:** poder registrarme en <*PowerL*> con mi correo electrónico
    **Para:** iniciar sesión, publicar y ver el contenido de otras laboratorians
    
    ### Criterios de aceptación
    
    -`Pantalla de inicio con nombre o logo de la RS
    - Input para ingresar nombre de usuario
    - Input para ingresar correo electrónico
    - Input para ingresar contraseña
    - Botón que envíe datos para registrarse
    - Mensaje de registro exitoso o fallido`
    
    ### Definición de terminado
    
    - `Creación de cuenta de acceso y autenticación con cuenta de correo y contraseña usando Firebase
    - Validar que los input no estén vacíos
    - Validar que el usuario no esté repetido
    - Validar que sea un correo electrónico con formato válido
    - El contenido del input de la contraseña debe ocultarse.
    - Validar que la contraseña cumpla los requisitos mínimos
    - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos.
    - Al enviarse el formulario de registro debe validarse.
    - Pruebas unitarias de funciones principales.`
    
    ### HU2: ****Inicio de sesión usuaria registrada****
    
    **Yo como:** usuaria registrada en <*PowerL*>
    
    **Quiero:** poder iniciar sesión
    
    **Para:** postear y ver los post de las demás
    
    ### Criterios de aceptación
    
    - `Pantalla de inicio con nombre o logo de la RS
    - Input para ingresar nombre de usuario
    - Input para ingresar contraseña
    - Botón que indique inicio de sesión
    - Mensaje de validación de datos ("Usuario o contraseña inválido")
    - Mensaje "usuaria no registrada" (**nota: preguntar a coach**)`
    
    ### Definición de terminado
    
    - `El botón de ***Iniciar sesión*** envía petición para validar datos.
    - Validación de usuario y contraseña con Firebase.
    - Después de validar, se muestra la vista principal.
    - Pruebas unitarias de funciones principales.`
    
    ### HU3: Acceso con cuenta de Google
    
    **Yo como:** egresada o estudiante de Laboratoria con cuenta de Google
    **Quiero:** registrarme con mi cuenta de Google e iniciar sesión en <*PowerL*>
    **Para:** omitir el formulario de registro
    ### Criterios de aceptación
    
    - `Pantalla de inicio con nombre o logo de la RS
    - Botón que indique registro con Google
    - Mensaje de registro exitoso o fallido`
    
    ### Definición de terminado
    
    - `El botón de ***Registro con Google*** nos lleve al inicio de sesión con Google.
    - Creación de cuenta de acceso y autenticación con una cuenta de Google con Firebase.
    - Pruebas unitarias de funciones principales.`
    
    ### HU4:  Publicar un post
    
    **Yo como:** usuaria de *<PowerL>*
    **Quiero:** poder publicar un post
    **Para:** compartir información con otras laboratorians
    ### Criterios de aceptación
    
    - `Input para agregar texto
    - Botón para publicar post`
    
    ### Definición de terminado
    
    - `Al darle click al botón de publicar se debe enviar la información a firebase.
    - Al darle click al botón de publicar también se debe mostar el post debajo de la sección del input.
    - Crear test unitarios de las funciones principales.`
    
    ### Criterios de aceptación
    
    - `Input para agregar texto
    - Botón para publicar post`
    
    ### Definición de terminado
    
    - `Al darle click al botón de publicar se debe enviar la información a firebase.
    - Al darle click al botón de publicar también se debe mostar el post debajo de la sección del input.
    - Crear test unitarios de las funciones principales.`
    
    ### HU5: Vista general / Timeline
    
    **Yo como:** usuaria de *<PowerL>*
    **Quiero:** poder ingresar a la vista general o timeline
    **Para:** ver los post
    ### Criterios de aceptación
    
    - `Pantalla de timeline con nombre o logo de la RS
    - Contiene una sección donde se puede ver nuestro nombre de usuaria
    - Se pueden visualizar los post mas recientes`
    
    ### Definición de terminado
    
    - `Al recargar la aplicación, se debe verificar si el usuario está logueado antes de mostrar contenido.
    - Se carga la información con los post anteriores del mas reciente al mas antiguo`
    
    ### HU6: Dar like a un post
    **Yo como:** usuaria de *<PowerL>*
    **Quiero:** poder darle Like a los post publicados en el timeline.
    **Para:** interactuar con las compañeras
   
    ### Criterios de aceptación
    
    - `Que cada post tenga un boton de like
    - Solo se puede dar 1 like por usuaria en cada post
    - Se debe reflejar el numero de likes en cada post`
    
    ### Definición de terminado
    
    - `Poder dar y quitar like a una publicación. Máximo uno por usuaria
    - Llevar un conteo de los likes.
    - Pruebas unitarias de funciones principales`
    
    ### HU7: Editar posts
    
    **Yo como:** usuaria de *<PowerL>*
    **Quiero:** poder editar mis post después de publicarlos
    **Para:** corregir errores o cambiar/agregar información
    
    ### Criterios de aceptación
    
    - `Que cada post tenga un botón editar
    - Solo quien publico el post puede editarlo
    - Al dar click para editar un post, debe cambiar el texto por un input que permita editar el texto y luego guardar los cambios.
    - Se debe mostrar un nuevo botón para guardar cambios`
    
    ### Definición de terminado
    
    - `Botón de editar con funcionalidad para cambiar el texto por un input.
    - Que el input permita la edición de su contenido
    - Que el boton de guardar cambios tenga la funcionalidad para enviar a firebase la actualización del input
    - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
    - Al recargar la página debo de poder ver los textos editados.
    - Pruebas unitarias de funciones principales`
    
    ### HU8: Eliminar posts
    
    **Yo como:** usuaria de *<PowerL>*
    **Quiero:** poder eliminar cualquiera de mis post publicados
    **Para:** que ya no sean visibles ni se pueda interactuar con ellos
    
    ### Criterios de aceptación
    
    - `Que cada post tenga un botón de eliminar
    - Solo quien publico el post puede eliminarlo
    - Pedir confirmación antes de eliminar un post.`
    
    ### Definición de terminado
    
    - `Alerta/modal o vista para confirmar la eliminación del post
    - Botón de eliminar u aceptar debe tener la funcionalidad para eliminar u ocultar en firebase la información de un post especifico.
    - Al eliminar el post se recarga el timeline sin el post eliminado
    - Pruebas unitarias de funciones principales`
    
    ### HU9: Mostrar fecha y hora de los posts
    
    **Yo como:** usuaria de *<PowerL>*
    **Quiero:** poder ver fecha y hora de creación de post
    **Para:** saber cuándo un post fue publicado
    
    ### Criterios de aceptación
    
    - `Que cada post tenga un párrafo debajo con fecha y hora de publicación`
    
    ### Definición de terminado
    
    - `La fecha y hora es visible para todos
    - Pruebas unitarias de funciones principales`


## 4. Diseño de la Interfaz de Usuario (UI)


Para iniciar la conceptualización del proyecto realizamos un diseño de baja fidelidad (en papel blanco y tinta negra) que mostraba, a grandes rasgos, cuál esperábamos que fuera el flujo de nuestra web. 

![Prot-BC-1](https://user-images.githubusercontent.com/111525050/219999450-d078fafa-4fe0-481d-a2ee-ad52f8719881.jpeg](https://user-images.githubusercontent.com/111525050/219999450-d078fafa-4fe0-481d-a2ee-ad52f8719881.jpeg)

![Prot-BC-2](https://user-images.githubusercontent.com/111525050/219999452-3b2c5c5f-63e2-4bc7-a116-95b26bf98836.jpeg](https://user-images.githubusercontent.com/111525050/219999452-3b2c5c5f-63e2-4bc7-a116-95b26bf98836.jpeg)

![Prot-BC-3](https://user-images.githubusercontent.com/111525050/219999451-2b31e7b9-8876-48e9-adbc-1bc20054df00.jpeg](https://user-images.githubusercontent.com/111525050/219999451-2b31e7b9-8876-48e9-adbc-1bc20054df00.jpeg)

![Prot-BC-4](https://user-images.githubusercontent.com/111525050/219999453-2c30683a-132c-4f58-a329-8624c3ee9c48.jpeg](https://user-images.githubusercontent.com/111525050/219999453-2c30683a-132c-4f58-a329-8624c3ee9c48.jpeg)

Pedimos feedback e iteramos el siguiente prototipo de baja fidelidad, pero en formto digital:
![Prototipo-BC-Dig-1](https://github.com/beresdev/social-network/blob/main/img-rdm/prototypes/protBC1Figma.PNG)
![Prototipo-BC-Dig-2](https://github.com/beresdev/social-network/blob/main/img-rdm/prototypes/protBC2Figma.PNG)

Una vez más pedimos feedback a compañeras y mentores e iteramos en el prototipo de alta calidad, el cual se muestra a continuación.

![Image](https://user-images.githubusercontent.com/111525050/220001042-0a9a46ba-967b-4810-8862-72543c38e49b.png](https://user-images.githubusercontent.com/111525050/220001042-0a9a46ba-967b-4810-8862-72543c38e49b.png))

La imagen anterior muestra las tres vistas principales que planeamos en nuestro prototipo de alta fidelidad. La herramienta que utilizamos para ello fue figma, ya que permitía el trabajo colaborativo remoto, el diseño de flujo y las vistas previas de nuestro prototipo en diferentes dispositivos.

Resultado después de comentarios de usuarias

![Prot-AC](https://user-images.githubusercontent.com/111525050/219999044-077e4d3b-ff99-45e1-93b2-298b530102fc.png)



## 5. Testeos de usabilidad

Para los testeos de usabilidad solicitamos a potenciales usuarias de nuestro producto que probaran el prototipo de alta calidad. Connie, Kami, Marlene, Jess y Tania, estudiantes del Bootcamp de Desarrollo Web en Laboratoria, intentaron completar las siguientes acciones en nuestro prototipo:

-Registrarse con correo
-Registrarse con google
-Iniciar sesión con correo
-Publicar un post
-Dar like a un post
-Editar post
-Eliminar post
-Cerrar sesión

Durante el test tuvimos presente a una moderadora, una observadora que tomara notas y otra que confirmara los tiempos que tomaba a cada usuaria realizar cada tarea. Al momento de testear tomamos en cuenta:

**Naming:**
¿Los nombres en las secciones y botones se entienden fácilmente?

**Organización:**
¿La información está agrupada en categorías que hacen sentido?
¿Los elementos de la web están situados en lugares en los que el usuario busca por ellos?

**Facilidad de ubicar elementos para First time users:**
¿Los elementos más comunes son fáciles de encontrar por los usuarios?
¿Las instrucciones son claras?
¿Las instrucciones son necesarias?

**Efectividad:**
¿Los usuarios pueden completar las tareas?
¿Cometen errores? ¿Dónde?

Los resultados por usuaria se detallan a continuación:

### Usuaria 1: Connie

-Confusión entre iniciar sesión y el registro de nueva usuaria
-El ícono de cerrar sesión fue un poco difícil de encontrar
-En los post de ejemplo, poner nombres reales para evitar confusiones
-Fondo: sensación de vacío, acentuar el fondo
-Agregar función de dislike
-Le gustó el contraste rosa/amarillo

![Connie](https://user-images.githubusercontent.com/73813833/211670862-29b7916b-e946-4a86-8b6f-349efbea53ba.png)

### Usuaria 2: Marlene
-Registrarse:
Fue confuso por unos segundos entre llenar el input de inicio de sesión y el botón de Registrate.

-Editar un post:
No estaba segura del paso siguiente luego de editar su post y volver a publicarlo con el botón guardar.

-Cerrar sesión:
No supo dónde encontrar la opción de cerrar sesión, se le tuvo que indicar.

-Dar y quitar like:
Intentó quitar like, no se tenía configurado ese flujo.
Escribir un post

-La diferencia entre un post publicado y uno que no se ha publicado o que se está editando no es mucha, llega a ser confuso.

-Olvidar contraseña

-No hay acción si olvidas la contraseña

-Logo: sugiere que el logo sea mas grande en la pantalla de inicio

![Marlene](https://user-images.githubusercontent.com/73813833/211671336-51506849-2705-482c-9972-05b4ec126e66.png)

### Usuaria 3: Jess

-Logró registrarse al primer intento, pero dudó en qué botón debía hacer clic
-Se confundió mucho sobre cuál era la utilidad del botón de home
-Le costó ver las opciones de cerrar sesión, habría que aumentar el tamaño de las fuentes o hacerlo más obvio

![Jess](https://user-images.githubusercontent.com/73813833/211671407-2c2275a2-e8be-432d-a00d-81e34d7ae5dd.png)

### Usuaria 4: Tania
-Confusión en la página de iniciar sesión. Entiende esa misma vista para el registro e inicio de sesión.
-Al editar hace click en el cuadro de texto varias veces antes que en el ícono.
-Confusión entre el botón de home y el de usuario para poder cerrar sesión.

Feedback:
-Agregar un poco más de color negro
-Agregar un fondo más interactivo y llamativo para la vista del usuario.
en la versión web que se distinga el cursor cuando este pase entre un input de texto y uno de botón para señalar que tienen una acción especifica.

![Tania](https://user-images.githubusercontent.com/73813833/211671469-58311ec5-f28c-40f1-9e3e-c6aa0566fbc6.png)

## Usuaria 5: Kami
-Confusión en la página de inicio para registrase e iniciar sesión
-Confusión con el icono de home no se entiende cuál es su función
-En los me gusta genera confusión que tenga 3 opciones de color

Feedback:
-Que el logo no regrese a la página de iniciar sesión
-Añadir una opción sobre a que cohort pertenecen para hacer referencia que es una red social para laboratorians
