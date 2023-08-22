// 1 - Crear una función tipo flecha que manipule arreglos (haciendo pop() y push())
// Nombres de estudiantes
const manipularEstudiantes = () => {
  const estudiantes = [
    "Milton",
    "Mauricio",
    "Cristina",
    "Camilo",
    "Edwin",
    "Steward",
  ];

  console.log("Lista inicial de estudiantes:", estudiantes);

  estudiantes.pop(); // Elimina el último estudiante de la lista
  console.log("Lista después de pop():", estudiantes);

  estudiantes.push("Andrea"); // Agrega un nuevo estudiante al final de la lista
  console.log("Lista después de push():", estudiantes);
};

// 2 - Crear una función tipo flecha que tome dos parámetros de entrada
// y no use return para modificar las edades de los estudiantes
const manipularEdades = (edadesEstudiantes, incremento) => {
  edadesEstudiantes.forEach((edad, i) => {
    edadesEstudiantes[i] = edad + incremento; // Incrementa la edad del estudiante
  });
};

// 3 - Crear una función tipo flecha que sea un callback function
// y mostrar el resultado usando las dos funciones anteriores.
const funcionCallback = (
  manipularEstudiantes,
  manipularEdades,
  edadesEstudiantes
) => {
  manipularEstudiantes(); // Llama a la función que manipula la lista de estudiantes

  console.log("Edades originales:", edadesEstudiantes); // Muestra las edades originales de los estudiantes

  manipularEdades(edadesEstudiantes, 5); // Incrementa las edades de los estudiantes en 5

  console.log("Edades después de incrementar:", edadesEstudiantes); // Muestra las edades después del incremento
};

const edadesEstudiantes = [41, 41, 32, 25, 27, 20];

funcionCallback(manipularEstudiantes, manipularEdades, edadesEstudiantes);
