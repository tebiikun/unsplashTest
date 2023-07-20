Buscador de imagenes 

Proyecto realizado en React como trabajo practico final solicitado para la Diplomatura de Desarrollador Front End Developer de la Universidad Teconologica Nacional,
turno Mañana. El proyecto consiste en una aplicacion que buscar un valor ingresado en un campo de texto, lo cual obtendra como repuesta una cantidad ilimitada 
de imagenes a disposicion del usuario.

Las consignas solicitadas en el proyecto fueron las siguientes: 

    - El alumno deberá hacer una aplicación en la cual se acceda a la api y obtenga datos de la misma.

    - Link de la API usada en este proyecto: https://unsplash.com/documentation.

    - El tp debe realizarse en REACT JS.

    - La aplicación debe estar subida a github con sus respectivos commits y su readme completo generado y tipiado por el alumno.

    - El proyecto debe estar DEPLOYADO en github (el alumno debe investigar el modo de hacer el deploy del proyecto en react).

    - la tipografía, colores quedan a elección del alumno.

    - En el input se debe agregar una palabra especifica y nos muestre las fotos relacionadas con esa búsqueda.

    - Al ingresar a la aplicación , las imágenes que se mostraran deben ser aleatorias.

    - Debe tener scroll infinito, lo cual significa que cuando se baje se deben cargar mas imágenes.

    - La aplicación debe ser totalmente responsive.

    - Las imágenes finales a visualizar queda a criterio del alumno (tamaños, efectos,imagen con bordes, imágenes en círculos,etc).

    - Debajo de cada imagen se debe visualizar: ubicación de  la fotografía, cámara que se utilizo y ademas etiquetas.

    - Las etiquetas dependen de la imagen, estas etiquetas se deben diferenciar con algun estilo (texto en color rojo, formato de piltora, formato de cuadrado).

    - Los efectos del hover y o efectos de animaciones son necesarios y quedan a cargo del alumno dar estos efectos (NO SON OPCIONALES).

La aplicacion consta de las siguientes caracteristicas: 

    - Busqueda de imagenes a partir de una palabra ingresada.
    - Si no se ingresa ningun valor, el boton de busqueda queda desabilitado hasta ingresar al menos un caracter.
    - Si se ingresa un valor el cual no devuelve algun resultado, se mostrara una imagen de error de busqueda.
    - Al ingresar a la aplicacion esta nos muestra imagenes aleatorias, las cuales poseen la ubicacion donde la fotografia fue realizada y la camara que se utilizo.
    - Si la busqueda es exitosa esta presentara imagenes con una descripcion, sus respectivas etiquetas (las mismas son funcionales y realizan una busqueda nueva al presionarlas) y un boton de Mas informacion (este boton proporciona al usuario una descripcion, el modelo de camara utlizado, el nombre del fotografo, estadisticas respecto a vistas, me gusta, cantidad de descargas realizadas y un boton de descarga, el cual lleva al usuario al sitio de origen donde se puede realizar la misma). Esta tambien posee un scroll infinito, el cual proporciona imagenes sin limites.

Framework utilizado:

    - Bootstrap
    
La aplicacion consta de las siguientes dependencias: 

    - react-infinite-scroll-component: Este paquete proporciona el scroll infinito solicitado.
    - gh-pages: Este paquete me permite realizar el deploy

Nota: segun la consigna solicitada, se debia incluir el modelo de camara y la ubicacion de la fotografia debajo de la imagen. Debido a que la API de Unsplash proporciona diferentes objetos dependiendo de la peticion realizada (puede ser random, search, por id), estas contienen propiedades diferentes. Como se puede observar al iniciar la aplicacion esta si posee el modelo de camara y su ubicacion, debido a que el objeto devuelto por la peticion random contiene las propiedades solicitadas. En su defecto, al realizar la busqueda, esta nos devuelve un objeto diferente, el cual no cuenta con estas propiedades, por lo cual yo decidi incluir en su lugar una descripcion, las etiquetas solicitadas y un boton con mas informacion. Dicho boton recibe un objeto diferente a los ya mencionados, y a diferencia de estos el mismo posee todas las propiedades solicitadas por la consigna, por lo cual  decidi incluirlas en esta seccion. Contrario a los anteriores, este objeto solo puede ser solicitado de manera unica, por lo cual cada vez que se ingresa a esta seccion, la misma consume una peticion, por lo cual no puede hacerse un arreglo de la misma, ya que consumiria todas las peticiones (solo se dispone de 50 por hora).

