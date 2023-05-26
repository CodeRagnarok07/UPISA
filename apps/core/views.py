from django.shortcuts import render


# Create your views here.
from django.core.mail import send_mail, BadHeaderError


from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm

# models
from products.models import Product, HomeBanner
from receta.models import Receta
from posts.models import TrucosYConsejos


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

    products_populares = Product.objects.filter(destacado=True)
    last_recetas = Receta.objects.all()[:5]
    posts = TrucosYConsejos.objects.all()[:2]



    carrusel = HomeBanner.objects.all().order_by("order")

    print(carrusel)
    centros = [
        {
            "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.220739390427!2d-56.2459115!3d-26.609370399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9459adec63ca8c79%3A0x73d96c1f168187ca!2sUPISA%20SUC.%20SANTA%20ROSA!5e0!3m2!1ses-419!2sve!4v1665867763115!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            "name": "Suc. Fram",
            "address": "José Leandro Oviedo N° 783 c/ Alto Paraná / Fram - Itapúa.",
            "tlf": "+595 921 987654",
            "mail": "fram@upisa.com.py",

        },
        {
            "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14417.13948351845!2d-57.4847207!3d-25.3952733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945dade995c057d3%3A0xece213d608577f4a!2sUPISA!5e0!3m2!1ses-419!2sve!4v1665867275893!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            "name": "Suc. Capiatá",
            "address": "Sargento Velazco y Vecinal Edid Gonzáles. Barrio Posta Ybycua. Capiatá, Ruta 1.",
            "tlf": "+595 21 339 8404",
            "mail": "fram@upisa.com.py",

        },
        {
            "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57608.60541601811!2d-54.7288656!3d-25.5204556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68585dfdc583f%3A0xc1b28138c8acfcc1!2sFrigor%C3%ADfico%20Upisa%20-%20Centro%20De%20Distribuci%C3%B3n!5e0!3m2!1ses-419!2sve!4v1665867659830!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            "name": "Suc. Ciudad del Este",
            "address": " Fulgencio Yegros y 25 de Diciembre. Ciudad del Este.",
            "tlf": "+59561 550 752",
            "mail": "fram@upisa.com.py",

        },
        {
            "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57608.60541601811!2d-54.7288656!3d-25.5204556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68585dfdc583f%3A0xc1b28138c8acfcc1!2sFrigor%C3%ADfico%20Upisa%20-%20Centro%20De%20Distribuci%C3%B3n!5e0!3m2!1ses-419!2sve!4v1665867659830!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            "name": "Suc. Ciudad del Este",
            "address": " Fulgencio Yegros y 25 de Diciembre. Ciudad del Este.",
            "tlf": "+59561 550 752",
            "mail": "fram@upisa.com.py",

        },
        {
            "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57608.60541601811!2d-54.7288656!3d-25.5204556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68585dfdc583f%3A0xc1b28138c8acfcc1!2sFrigor%C3%ADfico%20Upisa%20-%20Centro%20De%20Distribuci%C3%B3n!5e0!3m2!1ses-419!2sve!4v1665867659830!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            "name": "Suc. Ciudad del Este",
            "address": " Fulgencio Yegros y 25 de Diciembre. Ciudad del Este.",
            "tlf": "+59561 550 752",
            "mail": "fram@upisa.com.py",

        },
        {
            "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57608.60541601811!2d-54.7288656!3d-25.5204556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68585dfdc583f%3A0xc1b28138c8acfcc1!2sFrigor%C3%ADfico%20Upisa%20-%20Centro%20De%20Distribuci%C3%B3n!5e0!3m2!1ses-419!2sve!4v1665867659830!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            "name": "Suc. Ciudad del Este",
            "address": " Fulgencio Yegros y 25 de Diciembre. Ciudad del Este.",
            "tlf": "+59561 550 752",
            "mail": "fram@upisa.com.py",

        }          
    ]


    ingredientes = Product.objects.all()

    ctx = {
        "form": form,
        "ingre": ingredientes,
        "carrusel": carrusel,
        "products_populares": products_populares,
        "last_recetas": last_recetas,
        "posts": posts,
        "centros": centros
    }

    return render(request, 'home/index.html', ctx)


def about(request):
    ctx = {}
    return render(request, 'about/index.html', ctx)


def contactView(request):
    central = {
        "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4475.260772589646!2d-56.02537914510181!3d-27.092766044490048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945789aab5e28375%3A0x6b19309d5d2f5d1e!2sUPISA%20Frigor%C3%ADfico!5e0!3m2!1ses-419!2sve!4v1665867223988!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        "name": "Planta Industrial Fram",
        "address": "Ruta Graneros del Sur Km. 28 esq. Calle M. Fram, Itapúa.",
        "tlf": "+595 21 327 0811",
        "mail": "fram@upisa.com.py",
    }

    centros = [
        {
            "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14417.13948351845!2d-57.4847207!3d-25.3952733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945dade995c057d3%3A0xece213d608577f4a!2sUPISA!5e0!3m2!1ses-419!2sve!4v1665867275893!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            "name": "Suc. Capiatá",
            "address": "Sargento Velazco y Vecinal Edid Gonzáles. Barrio Posta Ybycua. Capiatá, Ruta 1.",
            "tlf": "+595 21 339 8404",
            "mail": "fram@upisa.com.py",

        },
        {
            "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57608.60541601811!2d-54.7288656!3d-25.5204556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68585dfdc583f%3A0xc1b28138c8acfcc1!2sFrigor%C3%ADfico%20Upisa%20-%20Centro%20De%20Distribuci%C3%B3n!5e0!3m2!1ses-419!2sve!4v1665867659830!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            "name": "Suc. Ciudad del Este",
            "address": " Fulgencio Yegros y 25 de Diciembre. Ciudad del Este.",
            "tlf": "+59561 550 752",
            "mail": "fram@upisa.com.py",

        }
         ,
        {
            "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.220739390427!2d-56.2459115!3d-26.609370399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9459adec63ca8c79%3A0x73d96c1f168187ca!2sUPISA%20SUC.%20SANTA%20ROSA!5e0!3m2!1ses-419!2sve!4v1665867763115!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            "name": "Suc. Fram",
            "address": "José Leandro Oviedo N° 783 c/ Alto Paraná / Fram - Itapúa.",
            "tlf": "+595 921 987654",
            "mail": "fram@upisa.com.py",

        }
         ,
        {
            "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.220739390427!2d-56.2459115!3d-26.609370399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9459adec63ca8c79%3A0x73d96c1f168187ca!2sUPISA%20SUC.%20SANTA%20ROSA!5e0!3m2!1ses-419!2sve!4v1665867763115!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            "name": "Suc. Caaguazú",
            "address": "Luis María Argaña c/ Dr. Juan Manuel Frutos.",
            "tlf": "+595984 580 385",
            "mail": "fram@upisa.com.py",

        }
        ,
        {
            "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29292.09095428091!2d-57.4595651!3d-23.4058878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94669d5ef976aa7d%3A0x62183d127261b62e!2sUPISA%20CONCEPCI%C3%93N!5e0!3m2!1ses-419!2sve!4v1665867713415!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            "name": "Suc. Concepción",
            "address": "Monseñor Bogarín c/ 14 de Mayo. ",
            "tlf": "+595986 456 228",
            "mail": "fram@upisa.com.py",

        }
       
    ]

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
        "centros": centros,
    }

    return render(request, "contact/index.html", ctx)
