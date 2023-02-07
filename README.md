# UCamp UI

## Componentes

Realizar los siguientes componentes, haciendo que se tenga consistencia entre todo el UI.

### Button

- Debe contener todos los tipos de botones que el HTML propociona.
- Debe de proporcionar eventos para controlar el comportamiento con el componente padre.
- Debe aceptar tipos de botones de acuerdo a su estatus
  - Primary
  - Danger
  - Warning
  - Default

### Input

- Debe contener los siguientes tipos de inputs de HTML
  - text
  - email
  - password
- Debe de proporcionar eventos para controlar el comportamiento con el componente padre.
- Debe de poder validar el input segun a un prop llamado `rules` que es un arreglo de objectos con validaciones y cambiar su estilo dependiendo de la valicion
  - Estadi
    - Default
    - Success
    - Error
  - Validaciones
    - `{email: true}`
    - `{contains: ""}`
    - `{exclude: ""}`
