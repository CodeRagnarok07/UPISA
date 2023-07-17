from posts.models import Tag, TrucosYConsejos, Novedades, GaleriaTrucosYConsejos, GaleriaNovedades


from rest_framework import serializers

# i18n Accept-Language: es-es


class TagTrucosYConsejosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ("nombre" ,"icon",)

class GaleriaTrucosYConsejosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GaleriaTrucosYConsejos
        fields = ("imagen",)


class TrucosYConsejosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TrucosYConsejos
        fields = ["url", "titulo", "portada", "publicar", "tag"]
    tag = TagTrucosYConsejosSerializer(many=True)


class DetailTrucosYConsejosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TrucosYConsejos
        fields = ["url", "titulo", "portada", "publicar", "tag", "galeria", "contenido"]
    galeria = GaleriaTrucosYConsejosSerializer(many=True)
    tag = TagTrucosYConsejosSerializer(many=True)

# NOVEDADES

class GaleriaNovedadesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GaleriaNovedades
        fields = ("imagen",)



class NovedadesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Novedades
        fields = ["url", "titulo", "portada", "publicar"]

class DetailNovedadesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Novedades
        fields = ["url", "titulo", "portada", "publicar", "galeria", "contenido"]
    galeria = GaleriaNovedadesSerializer(many=True)

