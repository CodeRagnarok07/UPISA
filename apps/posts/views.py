from django.shortcuts import render
from .models import TrucosYConsejos, Novedades
# Create your views here.
from django.core.paginator import Paginator
from django.shortcuts import get_object_or_404

import random

from datetime import datetime


import json
from django.shortcuts import redirect


def parrilleros(request):
    posts = TrucosYConsejos.objects.filter(
        publicar__lte=datetime.now()).order_by('-publicar')

    paginator = Paginator(posts, 5)  # Show 25 contacts per page.
    page_number = request.GET.get('page')
    
    # body_unicode = request.body.decode('utf-8')
    # data_dict = json.loads(request.body)

    if request.method == "POST":
        post_data = json.loads(request.body.decode("utf-8"))

        print(post_data["data"])
        return redirect("/")
    

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
    ctx = {
        "post": post,
        "more": similares
    }
    return render(request, 'blog/detail.html', ctx)


def novedades(request):
    posts = Novedades.objects.filter(
        publicar__lte=datetime.now()).order_by('-publicar')
    paginator = Paginator(posts, 8)  # Show 25 contacts per page.
    page_number = request.GET.get('page')

    page_obj = paginator.get_page(page_number)
    ctx = {
        "page_obj": page_obj
    }
    return render(request, 'blog/novedades.html', ctx)


def novedadesViewDetail(request, url):
    post = get_object_or_404(Novedades, url=url)
    similares = list(Novedades.objects.all().exclude(url=url))
    if len(similares) > 2:
        similares = random.sample(similares, 3)
    ctx = {
        "post": post,
        "more": similares
    }
    return render(request, 'blog/detail.html', ctx)
