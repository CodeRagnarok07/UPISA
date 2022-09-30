from django.contrib import admin
from .models import Receta, Galeria  # Preparacion
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.


class GaleriaInline(admin.StackedInline):
    extra = 1
    model = Galeria


@admin.register(Receta)
class ProductAdmin(SummernoteModelAdmin):
    search_fields = ['nombre_es']
    prepopulated_fields = {"url": ("nombre_es",)}

    summernote_fields = ['descripcion_es', 'descripcion_en', 'descripcion_ru', 'descripcion_zh_hans']
    inlines = [GaleriaInline, ]
    autocomplete_fields = ['productos_sugeridos']

    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results
    fieldsets = (
        (None, {
            'classes': ('extrapretty',),
            'fields': (('nombre_es', 'url', 'miniatura'), ('tiempo_preparacion', 'porcion_personas'), 'productos_sugeridos')
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'),
            'fields': (( 'nombre_en','nombre_ru', 'nombre_zh_hans'))
        }),
        (None, {
            'classes': ('extrapretty',),
            'fields': ('descripcion_es',)
        }),
        ("traduccion Descripcion", {
            'classes': ('extrapretty', 'collapse'),
            'fields': ('descripcion_en', 'descripcion_ru', 'descripcion_zh_hans')
        }),
        (None, {
            'classes': ('extrapretty',),
            'fields': ('ingredientes_es',)
        }),
        ("traduccion ingredientes", {
            'classes': ('extrapretty', 'collapse'),
            'fields': ('ingredientes_en', 'ingredientes_ru', 'ingredientes_zh_hans')
        }),
        (None, {
            'classes': ('extrapretty',),
            'fields': ('preparacion_es',)
        }),
        ("traduccion preparacion", {
            'classes': ('extrapretty', 'collapse'),
            'fields': ('preparacion_en', 'preparacion_ru', 'preparacion_zh_hans')
        })
       
    )
