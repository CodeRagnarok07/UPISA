from itertools import product
from django.shortcuts import render
from products.models import Ingrediente
from django.utils.translation import gettext
# Create your views here.

def index(request):

    
    print(request.LANGUAGE_CODE)

    ingredientes = Ingrediente.objects.all()

    for i in ingredientes:
        a = gettext(i.name)

    ctx = {
        "ingre" : ingredientes
    }

    return render(request, 'core/index.html', ctx)



def subPage(request):

    ingredientes = Ingrediente.objects.all()

    for i in ingredientes:
        a = gettext(i.name)

    ctx = {
        "ingre" : ingredientes
    }

    return render(request, 'core/index.html', ctx)