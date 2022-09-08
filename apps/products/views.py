from django.shortcuts import render
from .models import Product
# Create your views here.


def productos(request):
    products = Product.objects.all()
    ctx = {
        "products": products
    }


    return render(request, 'products/index.html', ctx)