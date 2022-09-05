from modeltranslation.translator import translator, TranslationOptions
from .models import Galeria, TrucosYConsejos

class nameTranslation(TranslationOptions):
    fields = ('nombre',)


class DescripcionTranslation(TranslationOptions):
    fields = ('titulo','contenido')

translator.register(Galeria, nameTranslation)
translator.register(TrucosYConsejos, DescripcionTranslation)
