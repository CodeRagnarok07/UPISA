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
        fields = ["url", "titulo", "portada", "publicar"]

class DetailRecetaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Receta
        fields = ["url", "titulo", "portada", "publicar", "galeria", "contenido"]
    galeria = GaleriaRecetaSerializer(many=True)

