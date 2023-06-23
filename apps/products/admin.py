from django.contrib import admin

# Register your models here.
from django_summernote.admin import SummernoteModelAdmin
from .models import Product, ValoresNutricionales, Categoria, CategoriaSub, Galeria, HomeBanner


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre_es', )

    search_fields = ['nombre_es']
    prepopulated_fields = {"url": ("nombre_es",)}
    fieldsets = (
        (None, {
            'classes': ('extrapretty',),
            'fields': ('nombre_es', 'url')
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'),
            'fields': (('nombre_en', 'nombre_ru', 'nombre_zh_hans'),)
        }),
    )


@admin.register(CategoriaSub)
class CategoriaSubAdmin(admin.ModelAdmin):
    search_fields = ['categoria__nombre_es']
    list_display = ('nombre_es', )

    prepopulated_fields = {"url": ("nombre_es",)}
    fieldsets = (
        (None, {
            'classes': ('extrapretty',),
            'fields': ('nombre_es', 'url', 'categoria')
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'),
            'fields': (('nombre_en', 'nombre_ru', 'nombre_zh_hans'),)
        }),
    )


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


@admin.register(Product)
class ProductAdmin(SummernoteModelAdmin):
    prepopulated_fields = {"url": ("nombre_es",)}
    search_fields = ['nombre_es']
    list_filter = ('sub_categoria', 'destacado')
    list_display = ('nombre_es', 'sub_categoria')

    inlines = [ValoresInline, GaleriaInline]
    # 'ingredientes', 'antioxidante', 'estabilizante', 'conservante',
    autocomplete_fields = ['sub_categoria']

    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results

    fieldsets = (
        (None, {
            'classes': ('extrapretty',),
            'fields': (('nombre_es', 'url', 'porcion', 'unidad'),'destacado',)
        }),
        ("traducciones", {
            'classes': ('extrapretty', 'collapse'),
            'fields': (('nombre_en', 'nombre_ru', 'nombre_zh_hans'),)
        }),
        (None, {
            'classes': ('extrapretty',),
            'fields': ('miniatura',)
        }),
        (None, {
            'classes': ('extrapretty',),
            'fields': (('sub_categoria'),)
        }),
        (None, {
            'classes': ('extrapretty',),
            'fields': ('descripcion_es',)
        }),
        ("traducciones descripcion", {
            'classes': ('extrapretty', 'collapse'),
            'fields': ('descripcion_en', 'descripcion_ru', 'descripcion_zh_hans')
        })
    )



admin.site.register(HomeBanner)