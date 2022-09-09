from modeltranslation.translator import translator, TranslationOptions
from .models import Product, Galeria # Ingrediente, Antioxidante, Estabilizante, Conservador,

# class nameTranslation(TranslationOptions):
#     fields = ('nombre',)

class descripcionTranslation(TranslationOptions):
    fields = ('nombre', 'descripcion')

translator.register(Product, descripcionTranslation)


# translator.register(Galeria, nameTranslation)
# translator.register(Ingrediente, nameTranslation)
# translator.register(Antioxidante, nameTranslation)
# translator.register(Estabilizante, nameTranslation)
# translator.register(Conservador, nameTranslation)