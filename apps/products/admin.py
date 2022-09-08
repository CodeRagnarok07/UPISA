from django.contrib import admin

# Register your models here.
from django_summernote.admin import SummernoteModelAdmin
from .models import Product, ValoresNutricionales, Categoria, CategoriaSub, Galeria


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    search_fields = ['nombre']


@admin.register(CategoriaSub)
class CategoriaSubAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    # list_filter = ('categoria__nombre',)
    search_fields = ['categoria__nombre']


class ValoresInline(admin.StackedInline):
    model = ValoresNutricionales
    fields = (
        ('energetico', 'vd_energetico'),
        ('carbohidratos', 'vd_carbohidratos'),
        ('proteinas', 'vd_proteinas'),
        ('grasas', 'vd_grasas'),
        ('grasas_saturadas', 'vd_grasas_saturadas'),
        ('grasas_trans', 'vd_grasas_trans'),
        ('fibra', 'vd_fibra'),
        ('sodio', 'vd_sodio'),
    )

    classes = ('collapse',)


class GaleriaInline(admin.StackedInline):
    extra = 1
    model = Galeria
    fieldsets = (
        (None, {
            'classes': ('extrapretty',),
            'fields': (('nombre', 'imagen'),)
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'),
            'fields': (('nombre_en'), ('nombre_ru', 'nombre_zh_hans'))
        }),
    )


@admin.register(Product)
class ProductAdmin(SummernoteModelAdmin):
    search_fields = ['nombre']
    list_editable = ('nombre',)
    list_filter = ('categoria', 'sub_categoria')

    list_display = ('nombre_es', 'nombre', 'categoria', 'sub_categoria')
    # summernote_fields = 'galery'

    inlines = [ValoresInline, GaleriaInline]
    autocomplete_fields = ['categoria', 'sub_categoria'] #'ingredientes', 'antioxidante', 'estabilizante', 'conservante', 

    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results

    fieldsets = (

        (None, {
            'classes': ('extrapretty',),
            'fields': ('nombre',)
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'),
            'fields': (('nombre_en'), ('nombre_ru', 'nombre_zh_hans'))
        }),
        ("Categorias", {
            'classes': ('extrapretty',),
            'fields': (('destacado', 'categoria', 'sub_categoria'))
        }),
        (None, {
            'classes': ('extrapretty',),
            'fields': ('descripcion',)
        }),
         ("traducciones descripcion", {
            'classes': ('extrapretty', 'collapse'),
            'fields': ('descripcion_en', 'descripcion_ru', 'descripcion_zh_hans')
        }),
        # ("Ingredientes", {
        #     'classes': ('extrapretty',),
        #     'fields': ('ingredientes', 'antioxidante', 'estabilizante', 'conservante', ),
        # }),

    )
