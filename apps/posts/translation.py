from modeltranslation.translator import translator, TranslationOptions
from .models import TrucosYConsejos, Tag, Novedades



class NameTranslation(TranslationOptions):
    fields = ('nombre',)

class DescripcionTranslation(TranslationOptions):
    fields = ('titulo','contenido')

translator.register(TrucosYConsejos, DescripcionTranslation)
translator.register(Novedades, DescripcionTranslation)
translator.register(Tag, NameTranslation)
