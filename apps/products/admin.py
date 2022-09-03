from django.contrib import admin

# Register your models here.

from .models import Product, Ingrediente, Antioxidante, Valores, Estabilizante, Conservador

admin.site.register(Product)
admin.site.register(Ingrediente)
admin.site.register(Antioxidante)
admin.site.register(Valores)
admin.site.register(Estabilizante)
admin.site.register(Conservador)
