from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.

from .models import GaleriaTrucosYConsejos, TrucosYConsejos, GaleriaNovedades, Novedades, Tag

# admin.site.register(Tag)

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    search_fields = ['nombre_es']
    list_display = ('nombre_es', )
    fieldsets = (
        (None, {
            'classes': ('extrapretty',),
            'fields': ('nombre_es',)
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'),
            'fields': (('nombre_en', 'nombre_ru', 'nombre_zh_hans'),)
        }),
            (None, {
            'classes': ('extrapretty',),
            'fields': ('icon',)
        }),
    )


class GaleriaInlineTrucosYConsejos(admin.StackedInline):
    extra = 1
    model = GaleriaTrucosYConsejos

class GaleriaInlineNovedades(admin.StackedInline):
    extra = 1
    model = GaleriaNovedades


@admin.register(TrucosYConsejos)
class TrucosYConsejosAdmin(SummernoteModelAdmin):
    search_fields = ['titulo_es']
    prepopulated_fields = {"url": ("titulo_es",)}
    # summernote_fields = ['descripcion', ]
    inlines = [GaleriaInlineTrucosYConsejos, ]

    autocomplete_fields = ['tag']


    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results

    fieldsets = (
        (None, {
            'classes': ('extrapretty',), 
            'fields': (('titulo_es', 'url'),'miniatura', 'tag','publicar')
        }),
        ("traducciones de titulo", {
            'classes': ('extrapretty', 'collapse'), 
            'fields': (('titulo_en','titulo_zh_hans','titulo_ru'),)
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


@admin.register(Novedades)
class NovedadesAdmin(SummernoteModelAdmin):
    search_fields = ['titulo_es']
    prepopulated_fields = {"url": ("titulo_es",)}
    # summernote_fields = ['descripcion', ]
    inlines = [GaleriaInlineNovedades, ]
    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results
    fieldsets = (
        (None, {
            'classes': ('extrapretty',), 
            'fields': (('titulo_es', 'url'), 'miniatura','publicar')

        }),
        ("traducciones de titulo", {
            'classes': ('extrapretty', 'collapse'), 
            'fields': (('titulo_en','titulo_zh_hans','titulo_ru'),)
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




