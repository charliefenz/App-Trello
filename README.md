# reto-app-trello
Ejemplo de una app con interfaz del estilo Trello para gestionar projectos y tareas con ejecuciones CRUD. La lógica se maneja desde dos objetos maestros (Proyectos y Tareas) que contienen toda la información.
Estos objetos son accesibles para todos los componentes a través de dos servicios inyectables: el servicio **ProjectService** para controlar toda la lógica de los proyectos y el servicio **TaskService** para controlar toda la lógica de las tareas.
## Tecnologías utilizadas
* Angular para el desarrollo de la aplicacion.
* Bootstrap para el layout responsive de los proyectos.
* Angular Material para animaciones, popups y elementos de formularios.
## Modelos
### Project
Objeto principal que define todas las propiedades de cada proyecto. Sus propiedades son:
* id: identificador único de proyecto
* title: nombre del proyecto.
* description: descripción breve del proyecto.
* creationDate: fecha de cración del proyecto.
* task[]: array de tareas asociadas al proyecto.
### Task
Objeto que que define todas las propiedades de cada tarea. Solo puede existir dentro del contexto de un proyecto. Sus propiedades son:
* id: identificador único de la tarea.
* name: nombre de la tarea.
* priority: número de prioridad de la tarea.
* creationDate: fecha de creación de la tarea.
* dueDate: fecha de vencimiento de la tarea.
* completed: booleano para saber si la tarea está completada o no.
### DialogdataReceiver
Objeto que sirve de traspaso de información entre el componente **task-item** y el componente **edit-task** a través de un componente **mat-dialog** de Angular Material. Sus propiedades son:
* projectId: identificador único del proyecto.
* taskId: identificador único de la tarea.
## Servicios
### ProjectService
Servicio que se encarga de gestionar todas las acciones CRUD asociadas con el objeto principal **Project**.
#### Propiedades
* projects: array de objetos individuales Project para guardar la información a nivel global de aplicacion.
#### Metodos principales
* getProjects(): devuelve el array de projects.
* getProject(id): devuelve el proyecto asociado al parámetro id.
* createProject(title, description, date): crea un proyecto nuevo y lo añade al array de proyectos.
* editProject(id, title, description): cambia el nombre y la descripción del proyecto asociado al parámetro id.
* deleteProject(id): elimina el proyecto asociado al parámetro id.
#### Metodos de apoyo
* findProject(id): encuentra el proyecto asociado al parámentro id dentro del array de proyectos.
* addProjectId(): asigna un id a un proyecto concreto.
### TaskService
Servicio que se encarga de gestionar todas las acciones CRUD asociadas con el objeto **Task**.
#### Inyectables
* **ProjectService**
#### Propiedades
* project: objeto proyecto al que pertenece la tarea.
* task: objeto tarea.
#### Metodos principales
* getTask(projectId, taskId): devuelve la tarea asociada al parámetro id de proyecto y al parámetro id de tarea.
* createTask(projectId, inputName): crea una nueva tarea con el nombre asociado al parámetro inputName dentro del proyecto asociado al parámetro id.
* editTask(projectId, taskId, editName, editDueDate, editPriority): cambia el nombre, la fecha de vencimiento y la prioridad de la tarea asociada al parámetro taskId dentro del proyecto asociado al parámetro projectId.
* deleteTask(projectId, taskId): elimina la tarea asociada al parámetro taskId dentro del proyecto asociado al parámetro projectId.
* completeTask(projectId, taskId): cambia el valor del booleano completed a verdadero dentro de la tarea asociada al parámetro taskId que está dentro del proyecto asociado al parámetro projectId.
* unCompleteTask(projectId, taskId): cambia el valor del booleano completed a falso dentro de la tarea asociada al parámetro taskId que está dentro del proyecto asociado al parámetro projectId.
#### Metodos de apoyo
* getTask(projectId, taskId): devuelve la tarea asosciada al parámetro taskId dentro del proyecto asociado al parámetro projectId.
* addTaskId(): asigna un id a una tarea concreta.
## Componentes
### Relacionados a Project
#### project-List
Componente principal de la aplicación. Renderiza el array de proyectos individuales.
#### project-item
Hijo del componente **project-list**. Renderiza cada proyecto individual.
#### new-project
Componente desplegado dentro del popup Mat-Dialog de nombre **newProjectDialog** que se encarga de recoger la información para crear un nuevo proyecto a través del **ProjectService**.
#### edit-project
Componente desplegado dentro del popup Mat-Dialog de nombre **editProjectDialog** que se encarga de recoger la información para editar o eliminar el proyecto a través del **ProjectService**.
### Relacionados a Task
#### task-item
Componente hijo de **project-item**. Renderiza cada tarea asociada a un proyecto.
#### new-task
Componente hijo de **project-item**. Renderiza el input dentro de la ficha de proyecto para agregar tareas a este de forma rápida.
#### edit-task
Componente desplegado dentro del popup Mat-Dialog de nombre **editTaskDialog** que se encarga de recoger la información para editar o eliminar la tarea a través del **TaskService**.
### Relacionados al Layout
#### header
Cabecera de la aplicación, contiene el logo y un icono para dar inicio mediante la creación de un nuevo proyecto.
#### main
Contenedor principal de la aplicación. Su primer componente es **project-list**.
### Mat-Dialogs
#### newProjectDialog
Dialogo que se despliega cuando se hace clic en el icono de crear un nuevo proyecto, ubicado en el header. Es el contenedor del componente **new-project**.
#### editProjectDialog
Dialogo que se despliega cuando se hace clic en el icono de editar un proyecto concreto, ubicado en cada **project-item**. Es el contenedor del componente **edit-project** y al abrirse, pasa la información del id de proyecto a este último para que a través del **projectService** se pueda manipular la información.
Tiene un observable que se suscribe a la información enviada desde el **edit-project** cuando se cierra. Si el proyecto es eliminado, el observable emite el projectId a su padre **project-list** para que se ejecute la función de borrado de proyecto a través del **projectService**.  
#### editTaskDialog
Dialogo que se despliega cuando se hace clic en el icono de editar una tarea en concreto, ubicado en cada **task-item**. Es el contenedor del componente **edit-task** y al abrirse, pasa a este último, la información del id de proyecto y del id de la tarea para que a través del **taskService** se pueda manipular la información.
Tiene un observable que se suscribe a la información enviada desde el **edit-task** cuando se cierra. Si la tarea es eliminada, el observable emite el tasktId a su padre **project-item** para que se ejecute la función de borrado de tarea a través del **taskService**.  

