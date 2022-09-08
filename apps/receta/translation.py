from modeltranslation.translator import translator, TranslationOptions
from .models import Receta, Ingredientes, Preparacion #, Galeria

class nameTranslation(TranslationOptions):
    fields = ('nombre',)


class DescripcionTranslation(TranslationOptions):
    fields = ('nombre','descripcion')

translator.register(Ingredientes, nameTranslation)
translator.register(Preparacion, nameTranslation)
translator.register(Receta, DescripcionTranslation)
# translator.register(Galeria, nameTranslation)
