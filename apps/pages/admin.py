from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin, SummernoteInlineModelAdmin
from .models import Contenido, Pagina, Seccion

# Register your models here.


class ContenidoInline(admin.StackedInline):
    extra = 1
    model = Contenido
    summernote_fields = ['text_es', 'text_en', 'text_ru', 'text_zh_hans']
    fieldsets = (
        (None, {
            'classes': ('extrapretty',),
            'fields': (('titulo'),)
        }),
        ("Titulo", {
            'classes': ('extrapretty', 'collapse'),
            'fields': ('titulo_es', 'titulo_en', 'titulo_ru', 'titulo_zh_hans')
        }),

        ("Texto", {
            'classes': ('extrapretty', 'collapse'),
            'fields': ('text_es', 'text_en', 'text_ru', 'text_zh_hans')
        }),
        (None, {
            'classes': ('extrapretty',),
            'fields': (('imagen'),)
        }),
    )


class SeccionInline(admin.StackedInline):
    extra = 1
    model = Seccion

    fieldsets = (
        (None, {
            'classes': ('extrapretty',),
            'fields': (('titulo'),)
        }),

        ("titulo", {
            'classes': ('extrapretty', 'collapse'),
            'fields': (('titulo_es', 'titulo_en', 'titulo_ru', 'titulo_zh_hans'),)
        }),
        ("texto", {
            'classes': ('extrapretty', 'collapse'),
            'fields': ('text_es', 'text_en', 'text_ru', 'text_zh_hans',)
        })
    )


@admin.register(Pagina)
class PageAdmin(admin.ModelAdmin):
    # search_fields = ['text_es']
    # list_display = ('text_es',)
    # summernote_fields = ['text_es','text_en', 'text_ru', 'text_zh_hans' ]

    inlines = [SeccionInline]

    fieldsets = (
        ("Header titulo ", {
            'classes': ('extrapretty',),
            'fields': ('titulo_es', )
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'),
            'fields': (('titulo_en', 'titulo_ru', 'titulo_zh_hans'),)
        }),

        ("Header texto", {
            'classes': ('extrapretty',),
            'fields': ('text_es',)
        }),
        ("traducciones de texto", {
            'classes': ('extrapretty', 'collapse'),
            'fields': ('text_en', 'text_ru', 'text_zh_hans')
        })
    )


@admin.register(Seccion)
class SectionAdmin(admin.ModelAdmin):
    search_fields = ['titulo_es']
    # list_display = ('titulo_es',)

    inlines = [ContenidoInline]

    fieldsets = (
        (None, {
            'classes': ('extrapretty',),
            'fields': ('titulo_es', )
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'),
            'fields': (('titulo_en', 'titulo_ru', 'titulo_zh_hans'),)
        }),

        (None, {
            'classes': ('extrapretty',),
            'fields': ('text_es',)
        }),
        ("traducciones de texto", {
            'classes': ('extrapretty', 'collapse'),
            'fields': ('text_en', 'text_ru', 'text_zh_hans')
        })
    )
