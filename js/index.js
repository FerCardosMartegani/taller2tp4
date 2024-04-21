// Esta linea garantiza que todo lo que se ejecute dentro de ready
// se ejecute solo cuando el html esté 100% cargado
$(document).ready(() => {
  console.log("JQuery Cargado");

  // Cuando enviamos el formulario completo, mostramos el feedback
  $(document).on("submit", (e) => {   //el selector específico no funcionó por alguna razón, tuve que aplicarlo a document o se seguía refrescando la página al enviar
    e.preventDefault(); // Esta linea es importante para evitar que la página se recargue al enviar le formulario
    abrirFeedback();
    pasarDatos();
  });

});

function pasarDatos() {
  const formMail = $("#recibirMail");
  const formNombre = $("#recibirNombre");

  const mailDelUsuario = formMail.val();
  const nombreDelUsuario = formNombre.val();

  const feedbackMail = $("#mostrarMail");
  const feedbackNombre = $("#mostrarNombre");

  feedbackMail.html(mailDelUsuario);
  feedbackNombre.html(nombreDelUsuario);
}

function abrirFeedback() {
  $("#feedback").removeClass("oculto")
}