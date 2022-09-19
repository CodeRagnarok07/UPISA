from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.

from .models import Galeria, TrucosYConsejos

class GaleriaInline(admin.StackedInline):
    extra = 1
    model = Galeria


@admin.register(TrucosYConsejos)
class TrucosYConsejosAdmin(SummernoteModelAdmin):
    search_fields = ['titulo']
    prepopulated_fields = {"url": ("titulo",)}
    # summernote_fields = ['descripcion', ]
    inlines = [GaleriaInline, ]
    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results
    fieldsets = (
        (None, {
            'classes': ('extrapretty',), 
            'fields': (('titulo', 'url', 'miniatura'), 'video')
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
