from modeltranslation.translator import translator, TranslationOptions
from .models import Product #, Galeria , Ingrediente, Antioxidante, Estabilizante, Conservador,

# class nameTranslation(TranslationOptions):
#     fields = ('nombre',)

class descripcionTranslation(TranslationOptions):
    fields = ('nombre', 'descripcion')

translator.register(Product, descripcionTranslation)


<<<<<<< HEAD
# translator.register(Galeria, nameTranslation)
=======
# translator.register(Galeria, nameTranslation) 
>>>>>>> e0bceff2fb471733ac1b0df9852a0e873bf7a8f9
# translator.register(Ingrediente, nameTranslation)
# translator.register(Antioxidante, nameTranslation)
# translator.register(Estabilizante, nameTranslation)
# translator.register(Conservador, nameTranslation)