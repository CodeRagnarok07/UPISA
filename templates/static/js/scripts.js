
import "/static/js/carrusel-img.js"
import "/static/js/carrusel-slider.js"
import "/static/js/tooltip.js"


/** re render products */
function setOrderAlf(e) {
    const filter_alf = $("#filter_alf")
    const products = $("#products")
    if (e) {
        filter_alf.children[0].innerHTML = "ORDEN: A - Z"
        products.innerHTML = `{% for i in page_obj|dictsort:"nombre" %}{% include './item_product.html' %}{% endfor %}`
    } else {
        filter_alf.children[0].innerHTML = "ORDEN: Z - A"
        products.innerHTML = `{% for i in page_obj|dictsortreversed:"nombre" %}{% include './item_product.html' %}{% endfor %}`
    }
}





