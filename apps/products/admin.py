from django.contrib import admin

# Register your models here.
from django_summernote.admin import SummernoteModelAdmin
from .models import Product, ValoresNutricionales, Categoria, CategoriaSub  # , Galeria


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    search_fields = ['nombre']


@admin.register(CategoriaSub)
class CategoriaSubAdmin(admin.ModelAdmin):
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


<<<<<<< HEAD
class GaleriaInline(admin.StackedInline):
    extra = 1
    model = Galeria
=======
# class GaleriaInline(admin.StackedInline):
#     extra = 1
#     model = Galeria
#     fieldsets = (
#         (None, {
#             'classes': ('extrapretty',),
#             'fields': (('nombre', 'imagen'),)
#         }),
#         ("traducciones", {
#             'classes': ('extrapretty', 'collapse'),
#             'fields': (('nombre_en'), ('nombre_ru', 'nombre_zh_hans'))
#         }),
#     )
>>>>>>> e0bceff2fb471733ac1b0df9852a0e873bf7a8f9


@admin.register(Product)
class ProductAdmin(SummernoteModelAdmin):
    prepopulated_fields = {"url": ("nombre",)}
<<<<<<< HEAD
=======

>>>>>>> e0bceff2fb471733ac1b0df9852a0e873bf7a8f9
    search_fields = ['nombre']
    # list_editable = ('nombre',)
    list_filter = ('categoria', 'sub_categoria')
    list_display = ('nombre_es', 'nombre', 'categoria', 'sub_categoria')

    inlines = [ValoresInline]
    # 'ingredientes', 'antioxidante', 'estabilizante', 'conservante',
    autocomplete_fields = ['categoria', 'sub_categoria']

    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results

    fieldsets = (
        (None, {
<<<<<<< HEAD
            'classes': ('extrapretty',),
            'fields': (('nombre','destacado',), ('url', 'miniatura'))
=======
            'classes': ('wide',),
            'fields': (('nombre','url',),('porcion', 'destacado', ),)
>>>>>>> e0bceff2fb471733ac1b0df9852a0e873bf7a8f9
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'),
            'fields': (('nombre_es', 'nombre_en'), ('nombre_ru', 'nombre_zh_hans'))
        }),
        ("IMAGENES", {
            'classes': ('extrapretty',),
            'fields': ('galeria',),
            'description': """(1) En este campo solo será toma en cuenta las imágenes\n
(2) El orden de las imágenes determina su posición a la hora de ser mostrados\n
(3) La primera imagen será tomada como la miniatura del objeto\n"""
        }),
        (None, {
            'classes': ('extrapretty',),
            'fields': (('categoria', 'sub_categoria'),)
        }),
        (None, {
            'classes': ('extrapretty',),
            'fields': ('descripcion',)
        }),
        ("traducciones descripcion", {
            'classes': ('extrapretty', 'collapse'),
            'fields': ('descripcion_en', 'descripcion_ru', 'descripcion_zh_hans')
        })
  

    )
