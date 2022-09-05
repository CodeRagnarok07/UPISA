from django.contrib import admin
from .models import Galeria, Receta, Ingredientes, Preparacion
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.


class GaleriaInline(admin.StackedInline):
    extra = 1
    model = Galeria
    fieldsets = (
        (None, {
            'classes': ('extrapretty',), # ('extrapretty', 'extrapretty', collapse)
            'fields': ('nombre', 'imagen')
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'), 
            'fields':(('nombre_es','nombre_en'),('nombre_ru','nombre_zh_hans'))
        }),
    )
    
class IngredientesInline(admin.StackedInline):
    extra = 1
    model = Ingredientes
    fieldsets = (
        (None, {
            'classes': ('extrapretty',), 
            'fields': ('nombre',)
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'), 
            'fields':(('nombre_es','nombre_en'),('nombre_ru','nombre_zh_hans'))
        }),
    )

class PreparacionInline(admin.StackedInline):
    extra = 1
    model = Preparacion
    fieldsets = (
        (None, {
            'classes': ('extrapretty',), 
            'fields': ('nombre',)
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'), 
            'fields':(('nombre_es','nombre_en'),('nombre_ru','nombre_zh_hans'))
        }),
    )

@admin.register(Receta)
class ProductAdmin(admin.ModelAdmin):
    search_fields = ['nombre']
    # summernote_fields = ['descripcion', ]
    inlines = [IngredientesInline, PreparacionInline, GaleriaInline, ]
    autocomplete_fields = ['productos_sugeridos']
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
            'fields':(('nombre_es','nombre_en'),('nombre_ru','nombre_zh_hans'))
        }),
        (None, {
            'classes': ('extrapretty',), 
            'fields': ('descripcion',)
        }),
        ("traduccion Descripcion", {
            'classes': ('extrapretty', 'collapse'), 
            'fields': ('descripcion_es','descripcion_en','descripcion_ru','descripcion_zh_hans')
        }),
    )
