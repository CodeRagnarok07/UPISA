from receta.models import Receta, Galeria


from rest_framework import serializers

# i18n Accept-Language: es-es


class GaleriaRecetaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Galeria
        fields = ("imagen",)

class RecetaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Receta
        fields = ["url", "nombre", "portada", "tiempo_preparacion", "porcion_personas"]

from products.api.serializer import ProductSerializer
class DetailRecetaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Receta
        fields = ["nombre", "url", "portada", "tiempo_preparacion", "porcion_personas", "descripcion", "ingredientes", "galeria", "preparacion", "productos_sugeridos"]
        

    galeria = GaleriaRecetaSerializer(many=True)
    productos_sugeridos= ProductSerializer(many=True)
    # "preparacion", "productos_sugeridos", 

