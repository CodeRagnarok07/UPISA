from django.shortcuts import render
from .models import Product
# Create your views here.

from django.shortcuts import get_object_or_404


def productos(request):
    products = Product.objects.all()
    ctx = {
        "products": products
    }
    return render(request, 'products/index.html', ctx)


def detail(request, url):
    product = get_object_or_404(Product, url=url)
    ctx = {
        "product": product
    }
    return render(request, 'products/detail.html', ctx)