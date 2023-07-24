from products.models import Categoria, CategoriaSub, Product, ValoresNutricionales, Galeria

from rest_framework import serializers

# i18n Accept-Language: es-es

class CategoriaSubSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CategoriaSub
        fields = ( "nombre", "url", "id")
    # categoria = CategoriaSerializer(many=True)

class CategoriaSerializer(serializers.HyperlinkedModelSerializer):

    # sub_categorias = serializers.HyperlinkedIdentityField(view_name="get_sub_categorias")
    # sub_categorias = CategoriaSubSerializer(many=True)

    class Meta:
        model = Categoria
        fields = ("nombre", "url", "sub_categorias")
    sub_categorias = CategoriaSubSerializer(many=True)


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = [ "nombre" ,"url" ,"miniatura" ,"destacado"  ,"porcion" ,"unidad" ,"descripcion", "sub_categoria" ] 

        
    sub_categoria = CategoriaSubSerializer()
    



class GaleriaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Galeria
        fields = ("imagen",)

class ValoresNutricionalesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ValoresNutricionales
        fields = ["energetico", "vd_energetico", "carbohidratos", "vd_carbohidratos", "proteinas", "vd_proteinas", "grasas", "vd_grasas", "grasas_saturadas", "vd_grasas_saturadas", "grasas_trans", "vd_grasas_trans", "fibra", "vd_fibra", "sodio", "vd_sodio", ]


class DetailProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = [ "nombre" ,"url" ,"miniatura" ,"destacado"  ,"porcion" ,"unidad" ,"descripcion", "descripcion", "valores_nutricionales", "galeria" ] 
    
    valores_nutricionales = ValoresNutricionalesSerializer()
    galeria = GaleriaSerializer(many=True)
    # valores_nutricionales= ValoresNutricionalesSerializer(many=True)

