from django.contrib import admin

# Register your models here.
from django_summernote.admin import SummernoteModelAdmin
from .models import Product, Ingrediente, Antioxidante, ValoresNutricionales, Estabilizante, Conservador, Categoria, CategoriaSub, Galeria


@admin.register(Antioxidante)
class IngredienteAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    search_fields = ['nombre']


@admin.register(Estabilizante)
class IngredienteAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    search_fields = ['nombre']

@admin.register(Conservador)
class IngredienteAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    search_fields = ['nombre']


@admin.register(Ingrediente)
class IngredienteAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    search_fields = ['nombre']

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    search_fields = ['nombre']

@admin.register(CategoriaSub)
class CategoriaSubAdmin(admin.ModelAdmin):
    # list_display = ("title", "category")
    list_filter = ('categoria__nombre',)
    search_fields = ['nombre']



class ValoresInline(admin.StackedInline):
    model = ValoresNutricionales
    fields = (
        ('energetico','vd_energetico'),
        ('carbohidratos','vd_carbohidratos'),
        ('proteinas','vd_proteinas'),
        ('grasas','vd_grasas'),
        ('grasas_saturadas','vd_grasas_saturadas'),
        ('grasas_trans','vd_grasas_trans'),
        ('fibra','vd_fibra'),
        ('sodio','vd_sodio'),
        )
    
    classes = ('collapse',)
    


class GaleriaInline(admin.TabularInline):
    extra=1
    model = Galeria
    classes = ('collapse',)


@admin.register(Product)
class ProductAdmin(SummernoteModelAdmin):
    search_fields = ['nombre']
    list_display= ('nombre_es','nombre', 'categoria', 'sub_categoria')
    summernote_fields = 'galery'
    list_editable= ('nombre',)
    list_filter= ('categoria', 'sub_categoria')
    inlines = [ValoresInline,GaleriaInline ]
    autocomplete_fields = ['ingredientes', 'antioxidante', 'estabilizante', 'conservante', 'categoria', 'sub_categoria']
    def get_search_results(self, request, queryset, search_term):
        print("In get search results")
        results = super().get_search_results(request, queryset, search_term)
        return results

    fieldsets = (
        (None, {
            'classes': ('wide',), # ('wide', 'extrapretty', collapse)
            'fields': ('nombre','nombre_es','nombre_en','nombre_ru','nombre_zh_hans',)
        }),
        ("Categorias", {
            'classes': ('wide',), # ('wide', 'extrapretty', collapse)
            'fields': (('destacado','categoria','sub_categoria'))
        }),
        ("Ingredientes", {
            'classes': ('wide',),
            'fields': ('ingredientes', 'antioxidante', 'estabilizante', 'conservante', ),
        }),
        ("galery", {
            'classes': ('justify-center',),

            'fields': ('galery',)
        }),
    )



