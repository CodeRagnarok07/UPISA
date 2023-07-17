from products.models import Categoria, CategoriaSub, Product, ValoresNutricionales, Galeria

from rest_framework import serializers

# i18n Accept-Language: es-es
class CategoriaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Categoria
        fields = ("__all__",)

class CategoriaSubSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CategoriaSub
        fields = ("nombre", "url")
    # categoria = CategoriaSerializer(many=True)

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = [ "nombre" ,"url" ,"miniatura" ,"destacado"  ,"porcion" ,"unidad" ,"descripcion" ] 
        
    # sub_categoria = CategoriaSubSerializer(many=True)
    



class GaleriaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Galeria
        fields = ("imagen",)

class ValoresNutricionalesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ValoresNutricionales
        fields = ("__all__",)


class DetailProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ["url", "titulo", "portada",  "galeria", "contenido", "valores_nutricionales"]
    galeria = GaleriaSerializer(many=True)
    valores_nutricionales= ValoresNutricionalesSerializer(many=True)

