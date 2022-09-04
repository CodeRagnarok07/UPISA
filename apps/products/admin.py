from django.contrib import admin

# Register your models here.

from .models import Product, Ingrediente, Antioxidante, ValoresNutricionales, Estabilizante, Conservador


@admin.register(Antioxidante)
class IngredienteAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    search_fields = ['nombre']


@admin.register(Estabilizante)
class IngredienteAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    search_fields = ['nombre']

@admin.register(Conservador)
class IngredienteAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    search_fields = ['nombre']


@admin.register(Ingrediente)
class IngredienteAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    search_fields = ['nombre']



@admin.register(ValoresNutricionales)
class IngredienteAdmin(admin.ModelAdmin):
    list_display = ("product",)
    search_fields = ['nombre']

class ValoresInline(admin.TabularInline):
    model = ValoresNutricionales

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    search_fields = ['nombre']

    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results
    autocomplete_fields = ['ingredientes', 'antioxidante', 'estabilizante', 'conservador']
    inlines = [ValoresInline, ]
