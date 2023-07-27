from pages.models import Pagina, Seccion,Contenido


from rest_framework import serializers

# i18n Accept-Language: es-es


class ContenidoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contenido
        fields = ("id","titulo" ,"text", "imagen")

class SeccionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Seccion
        fields = ("id","titulo" ,"text", "contenido")

    contenido = ContenidoSerializer(many=True)


class PaginaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pagina
        fields = ("id","titulo" ,"text", "seccion")

    seccion = SeccionSerializer(many=True)


