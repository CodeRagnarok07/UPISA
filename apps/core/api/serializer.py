from core.models import Sucursales, HomeBanner
from rest_framework import serializers


class SucursalesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sucursales
        fields = ("nombre", "mapa", "direccion", "tlf", "email", "es_central")

class HomeBannerSerializer(serializers.HyperlinkedModelSerializer):
   
    
    # desktop_url = serializers.SerializerMethodField('get_desktop_url')

    movil = serializers.ImageField( max_length=None, use_url=True)

    # movil_url = serializers.SerializerMethodField()

    class Meta:
        model = HomeBanner
        fields = ( "movil", "desktop" )





