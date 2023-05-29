class MiCustomElement extends HTMLElement {
    constructor() {
      super();
      // Aquí puedes inicializar el estado y otros valores de tu Custom Element
    }
  
    connectedCallback() {
      // Este método se ejecuta cuando el elemento se conecta al DOM
      this.innerHTML = '<h1>Mi Custom Element</h1>';
      // Aquí puedes agregar la lógica adicional que necesites
    }
  
    disconnectedCallback() {
      // Este método se ejecuta cuando el elemento se desconecta del DOM
      // Aquí puedes realizar tareas de limpieza y liberar recursos
    }
  }

  customElements.define('mi-custom-element', MiCustomElement);