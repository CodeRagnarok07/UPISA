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



def about(request):
    ctx = {}
    return render(request, 'core/about/about.html', ctx)

from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm


def contactView(request):
    if request.method == "GET":
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data["subject"]
            from_email = form.cleaned_data["from_email"]
            message = form.cleaned_data['message']
            try:
                send_mail(subject, message, from_email, ["admin@example.com"])
            except BadHeaderError:
                return HttpResponse("Invalid header found.")
            return redirect("contacto")


    return render(request, "core/contact/contact.html", {"form": form})


