from django.shortcuts import render
from .models import Product, Categoria
# Create your views here.

from django.shortcuts import get_object_or_404


def productos(request):
    products = Product.objects.all()
    categorias = Categoria.objects.all()
    ctx = {
        "products": products,
        "categorias": categorias
    }
    return render(request, 'products/index.html', ctx)

def category_productos(request, category):
    
    products = Product.objects.filter(categoria__nombre=category)
    categorias = Categoria.objects.all()

    ctx = {
        "products": products,
        "categorias": categorias,
        "current_categoria": category

    }
    return render(request, 'products/index.html', ctx)


def detail(request, category ,url):
    product = get_object_or_404(Product, url=url)
    ctx = {
        "product": product
    }
    return render(request, 'products/detail.html', ctx)