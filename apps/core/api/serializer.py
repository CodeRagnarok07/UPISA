from core.models import Sucursales
from rest_framework import serializers


class SucursalesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sucursales
        fields = ('__all__')

