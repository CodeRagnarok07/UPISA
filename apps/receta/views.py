import random 
from django.shortcuts import render
from .models import Receta
# Create your views here.
from django.core.paginator import Paginator

from django.shortcuts import get_object_or_404

def viewList(request):
    recetas = Receta.objects.all()

    paginator = Paginator(recetas, 12) # Show 25 contacts per page.
    page_number = request.GET.get('page')

    page_obj = paginator.get_page(page_number)
    ctx = {
        "page_obj": page_obj
    }

    return render(request, 'recetas/index.html', ctx)


def viewDetail(request, url):
    receta = get_object_or_404(Receta, url=url)
    # Similares
    similares = list(Receta.objects.all().exclude(url=url))
    similar_products = random.sample(similares, 3)
    ctx = {
        "receta": receta,
        "similares": similar_products,

    }

    return render(request, 'recetas/detail.html', ctx)