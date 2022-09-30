from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.

from .models import Galeria, TrucosYConsejos

class GaleriaInline(admin.StackedInline):
    extra = 1
    model = Galeria


@admin.register(TrucosYConsejos)
class TrucosYConsejosAdmin(SummernoteModelAdmin):
    search_fields = ['titulo_es']
    prepopulated_fields = {"url": ("titulo_es",)}
    # summernote_fields = ['descripcion', ]
    inlines = [GaleriaInline, ]
    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results
    fieldsets = (
        (None, {
            'classes': ('extrapretty',), 
            'fields': (('titulo_es', 'url'),)
        }),
        ("traducciones de titulo", {
            'classes': ('extrapretty', 'collapse'), 
            'fields': (('titulo_en','titulo_zh_hans','titulo_ru'),)
        }),
        (None, {
            'classes': ('extrapretty',), 
            'fields': ('miniatura', 'video',)
        }),
      
        (None, {
            'classes': ('extrapretty',), 
            'fields': ('contenido_es',)
        }),
        ("traducciones de contenido", {
            'classes': ('extrapretty', 'collapse'), 
            'fields': ('contenido_en','contenido_ru','contenido_zh_hans')
        }),
    )
