from django.contrib import admin

# Register your models here.

from .models import Product, Ingrediente

admin.site.register(Product)
admin.site.register(Ingrediente)