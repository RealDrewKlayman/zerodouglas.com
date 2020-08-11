class TestComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<p>Just doing some tests...</p>';
  }
}
window.customElements.define('test-component', TestComponent);
