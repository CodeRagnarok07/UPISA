from modeltranslation.translator import translator, TranslationOptions
from .models import TrucosYConsejos



class DescripcionTranslation(TranslationOptions):
    fields = ('titulo','contenido')

translator.register(TrucosYConsejos, DescripcionTranslation)
