from modeltranslation.translator import translator, TranslationOptions
from .models import Receta, Galeria, Ingredientes, Preparacion

class nameTranslation(TranslationOptions):
    fields = ('nombre',)


class DescripcionTranslation(TranslationOptions):
    fields = ('nombre','descripcion')

translator.register(Galeria, nameTranslation)
translator.register(Ingredientes, nameTranslation)
translator.register(Preparacion, nameTranslation)
translator.register(Receta, DescripcionTranslation)
