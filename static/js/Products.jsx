class ElementReactive extends HTMLElement {
    constructor() {
        super();
        this.img_path
        this.id 
    }
    static get observedAttributes(){
        return ['img_path','id']
    }
    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch (nameAtr) {
            case "img_path":
                this.img_path = newValue;
                break;
            case "title":
                this.id = newValue;
                break;
            default:
                break;
        }
    }
    
    connectedCallback() {
        
        this.innerHTML =
            `{% for i in products|dictsort:"nombre" %}
            <a href="{% url 'product_detail' i.categoria i.url %}">
                <figure id="min_{{i.id}}">
                    <img src="{{i.miniatura.url}}" alt="">
                </figure>
                <p class="p-9 text-center font-semibold">
                    {{i.nombre}}
                </p>
            </a>
            {% endfor %}`
    }
}

window.customElements.define("products-card", ElementReactive)