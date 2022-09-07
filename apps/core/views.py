from itertools import product
from django.shortcuts import render
from products.models import Ingrediente
from django.utils.translation import gettext
# Create your views here.


def index(request):

    carrusel = [
        {
            "titulo": "Variedades de embutidos con sabores únicos",
            "descripcion": "Desde nuestros comienzos hemos lanzado al mercado productos elaborados con materias primas seleccionadas y rigurosos controles de calidad.",
            "img": "Slider1.png"
        }
    ]

    ingredientes = Ingrediente.objects.all()


    ctx = {
        "ingre": ingredientes,
        "carrusel":carrusel
    }



    return render(request, 'core/index.html', ctx)
