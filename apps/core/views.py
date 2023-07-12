from django.shortcuts import render


# Create your views here.
from django.core.mail import send_mail, BadHeaderError


from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm

# models
from products.models import Product, HomeBanner
from receta.models import Receta
from posts.models import Novedades
from .models import Sucursales

# translate
from django.utils.translation import gettext


from django.conf import settings




def index(request):


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


    carrusel = HomeBanner.objects.all().order_by("order")
    last_recetas = Receta.objects.all()[:5]
    products_populares = Product.objects.filter(destacado=True)
    posts = Novedades.objects.all()[:2]
    sucursales = Sucursales.objects.all()





    ingredientes = Product.objects.all()

    ctx = {
        "form": form,
        "ingre": ingredientes,
        "carrusel": carrusel,
        "products_populares": products_populares,
        "last_recetas": last_recetas,
        "posts": posts,
        "centros": sucursales
    }

    return render(request, 'home/index.html', ctx)





def contactView(request):

    sucursales = Sucursales.objects.filter(es_central=False)

    central = Sucursales.objects.get(es_central=True)

    if request.method == "GET":
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            nombre_y_apellido = form.cleaned_data["nombre_y_apellido"]
            from_email = form.cleaned_data["email"]
            telefono_celular = form.cleaned_data["telefono_celular"]
            message = form.cleaned_data['mensaje']

            try:
                send_mail(nombre_y_apellido, message, from_email, [settings.DEFAULT_TO_EMAIL])
            except BadHeaderError:
                return HttpResponse("Invalid header found.")
            
            return redirect("contacto")

 
    ctx = {
        "form": form,
        "central": central,
        "centros": sucursales,
    }

    return render(request, "contact/index.html", ctx)


def promo(request):
    ctx = {}
    return render(request, 'promo/index.html', ctx)