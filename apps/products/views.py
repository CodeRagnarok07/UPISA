from django.shortcuts import render
from .models import Product, Categoria, ValoresNutricionales
# Create your views here.
from django.core.paginator import Paginator

from django.shortcuts import get_object_or_404


def productos(request):
    categorias = Categoria.objects.all()

    products = Product.objects.all()
    paginator = Paginator(products, 16) # Show 25 contacts per page.
    page_number = request.GET.get('page')

    page_obj = paginator.get_page(page_number)
    ctx = {
        "current_categoria": "TODOS",
        "categorias": categorias,
        "page_obj": page_obj

    }
    return render(request, 'products/index.html', ctx)


def category_productos(request, category):
    sub = request.GET.getlist('filter')

    if(sub):
        products = Product.objects.filter(sub_categoria__categoria__url=category, sub_categoria__nombre__in=sub )
    else:
        products = Product.objects.filter(sub_categoria__categoria__url=category)


    categorias = Categoria.objects.all()
    current_categoria = Categoria.objects.get(url=category)

    products.order_by("nombre")

    print("hola")
    print(sub)

    paginator = Paginator(products, 16) # Show 25 contacts per page.
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    ctx = {
        "page_obj": page_obj,
        "categorias": categorias,
        "current_categoria": current_categoria,
        "actives_sub": sub
    }

    return render(request, 'products/index.html', ctx)


def detail(request, category, url):
    product = get_object_or_404(Product, url=url)
    products_populares = Product.objects.filter(destacado=True)

    ctx = {
        "product": product,
        "products_populares": products_populares,
    }
    return render(request, 'products/detail.html', ctx)
