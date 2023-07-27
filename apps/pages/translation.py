from modeltranslation.translator import translator, TranslationOptions
from .models import Contenido, Pagina, Seccion





class descripcionTranslation(TranslationOptions):
    fields = ('titulo', 'text')

translator.register(Contenido, descripcionTranslation)
translator.register(Pagina, descripcionTranslation)
translator.register(Seccion, descripcionTranslation)
