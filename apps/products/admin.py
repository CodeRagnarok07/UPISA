from django.contrib import admin

# Register your models here.
from django_summernote.admin import SummernoteModelAdmin
from .models import Product, Ingrediente, Antioxidante, ValoresNutricionales, Estabilizante, Conservador, Categoria, CategoriaSub, Galeria


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

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    search_fields = ['nombre']

@admin.register(CategoriaSub)
class CategoriaSubAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    list_filter = ('categoria__nombre',)
    search_fields = ['nombre']



class ValoresInline(admin.StackedInline):
    model = ValoresNutricionales
    # fields = (
    #     'field1',
    #     ('field2', 'field3'),
    #     'field4'
    # )



class GaleriaInline(admin.TabularInline):
    extra=1
    model = Galeria


@admin.register(Product)
class ProductAdmin(SummernoteModelAdmin):
    search_fields = ['nombre']
    list_display= ('nombre_es','nombre', 'categoria', 'sub_categoria')
    summernote_fields = 'galery'
    list_editable= ('nombre',)
    list_filter= ('categoria', 'sub_categoria')


    inlines = [ValoresInline,GaleriaInline ]
    autocomplete_fields = ['ingredientes', 'antioxidante', 'estabilizante', 'conservador', 'categoria', 'sub_categoria']
    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results






