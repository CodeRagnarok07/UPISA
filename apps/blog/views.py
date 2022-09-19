from django.shortcuts import render
from .models import TrucosYConsejos
# Create your views here.
from django.core.paginator import Paginator
from django.shortcuts import get_object_or_404

import random 


def parrilleros(request):
    pots = TrucosYConsejos.objects.all()
    paginator = Paginator(pots, 5) # Show 25 contacts per page.
    page_number = request.GET.get('page')

    page_obj = paginator.get_page(page_number)
    ctx = {
        "page_obj": page_obj

    }
    return render(request, 'blog/parrilleros.html', ctx)

def viewDetail(request, url):

    post = get_object_or_404(TrucosYConsejos, url=url)
    similares = list(TrucosYConsejos.objects.all().exclude(url=url))
    if len(similares) > 2:
        similares = random.sample(similares, 3)
    ctx ={
        "post":post,
        "more":similares
    }
    return render(request, 'blog/detail.html', ctx)