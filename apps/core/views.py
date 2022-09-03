from itertools import product
from django.shortcuts import render
from products.models import Ingrediente
from django.utils.translation import gettext
# Create your views here.


def index(request):

    ingredientes = Ingrediente.objects.all()


    ctx = {
        "ingre": ingredientes
    }

    return render(request, 'core/index.html', ctx)
