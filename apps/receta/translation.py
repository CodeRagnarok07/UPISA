from modeltranslation.translator import translator, TranslationOptions
from .models import Receta



class DescripcionTranslation(TranslationOptions):
    fields = ('nombre','descripcion', 'ingredientes', 'preparacion')


translator.register(Receta, DescripcionTranslation)
# translator.register(Galeria, nameTranslation)
