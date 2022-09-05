from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.

from .models import Galeria, TrucosYConsejos

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


@admin.register(TrucosYConsejos)
class TrucosYConsejosAdmin(SummernoteModelAdmin):
    summernote_fields = ['contenido', 'contenido_es','contenido_en','contenido_ru','contenido_zh_hans']
    search_fields = ['titulo']
    # summernote_fields = ['descripcion', ]
    inlines = [GaleriaInline, ]
    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results
    fieldsets = (
        (None, {
            'classes': ('extrapretty',), 
            'fields': ('titulo', 'video')
        }),
        ("traducciones de titulo", {
            'classes': ('extrapretty', 'collapse'), 
            'fields': (('titulo_es','titulo_en'),('titulo_ru','titulo_zh_hans'))
        }),
        (None, {
            'classes': ('extrapretty',), 
            'fields': ('contenido',)
        }),
        ("traducciones de contenido", {
            'classes': ('extrapretty', 'collapse'), 
            'fields': ('contenido_es','contenido_en','contenido_ru','contenido_zh_hans')
        }),
    )
