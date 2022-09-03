from modeltranslation.translator import translator, TranslationOptions
from .models import Product, Ingrediente, Antioxidante, Estabilizante, Conservador

class nameTranslation(TranslationOptions):
    fields = ('nombre',)

translator.register(Ingrediente, nameTranslation)
translator.register(Product, nameTranslation)
translator.register(Antioxidante, nameTranslation)
translator.register(Estabilizante, nameTranslation)
translator.register(Conservador, nameTranslation)