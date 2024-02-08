
<script>
class Robot {
  constructor(nombre, modelo, fechaFabricacion) {
    this.nombre = nombre;
    this.modelo = modelo;
    this.fechaFabricacion = fechaFabricacion;
    this.colaTareas = [];
  }

  presentarse() {
    console.log(`El nombre del modelo es ${this.nombre} con un modelo de ${this.modelo}  
        con una fecha de fabricación ${this.fechaFabricacion} con una cola de Tareas de ${this.colaTareas}.`);
  }

  cargaTarea(funcion) {
    this.colaTareas.push(funcion);
  }
}

const miRobot = new Robot("Robot1", "ModeloA", "2023-01-01");

miRobot.presentarse();

miRobot.cargaTarea("Hola");

for (let element of miRobot.colaTareas) {
  console.log(element);
}
</script>
