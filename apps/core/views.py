from itertools import product
from django.shortcuts import render
from products.models import Product
from django.utils.translation import gettext
# Create your views here.


def index(request):

    populares = Product.objects.filter(destacado=True)

    carrusel = [
        {
            "titulo": "Variedades de embutidos con sabores únicos",
            "descripcion": "Desde nuestros comienzos hemos lanzado al mercado productos elaborados con materias primas seleccionadas y rigurosos controles de calidad.",
            "img": "Slider1.png"
        },
        {
            "titulo": "Variedades de embutidos con sabores únicos",
            "descripcion": "Desde nuestros comienzos hemos lanzado al mercado productos elaborados con materias primas seleccionadas y rigurosos controles de calidad.",
            "img": "Slider2.png"
        }
    ]

    ingredientes = Product.objects.all()

    ctx = {
        "ingre": ingredientes,
        "carrusel": carrusel,
        "populares": populares
    }

    return render(request, 'core/index.html', ctx)
