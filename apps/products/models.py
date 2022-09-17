from operator import mod
from django.db import models
from io import BytesIO
from PIL import Image
from django.core.files import File
# Create your models here.

class Categoria(models.Model):
    nombre = models.CharField(max_length=500, unique=True)
    url = models.CharField(max_length=500, unique=True)

    def __str__(self) -> str:
        return self.nombre


class CategoriaSub(models.Model):
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_query_name="sub_categorias", related_name="sub_categorias")
    nombre = models.CharField(max_length=500, unique=True)
    url = models.CharField(max_length=500, unique=True)

    def __str__(self) -> str:
        return self.nombre


class Product(models.Model):
    nombre = models.CharField(max_length=500, unique=True)
    url = models.CharField(max_length=500, unique=True)

    miniatura = models.ImageField()
    destacado = models.BooleanField(default=True)

    sub_categoria = models.ForeignKey(
        CategoriaSub, on_delete=models.CASCADE, related_query_name="products",  help_text="Busqueda por Categoria superior")
        
    porcion = models.IntegerField(
        help_text="numerico g por unidad", blank=True, null=True)
    descripcion = models.TextField()

    def __str__(self) -> str:

        return self.nombre
    class Meta:
        ordering = ['-id']




class ValoresNutricionales(models.Model):

    product = models.OneToOneField(
        Product, blank=True, null=True, on_delete=models.CASCADE, related_query_name="valores_nutricionales", related_name="valores_nutricionales")

    energetico = models.CharField(max_length=100, help_text="ejemplo 150 Kcal")
    vd_energetico = models.IntegerField(help_text="%")

    carbohidratos = models.CharField(max_length=100, help_text="1g")
    vd_carbohidratos = models.IntegerField(help_text="%")

    proteinas = models.CharField(max_length=100, help_text="1g")
    vd_proteinas = models.IntegerField(help_text="%")

    grasas = models.CharField(max_length=100, help_text="1g")
    vd_grasas = models.IntegerField(help_text="%")

    grasas_saturadas = models.CharField(max_length=100, help_text="1g")
    vd_grasas_saturadas = models.IntegerField(help_text="%")

    grasas_trans = models.CharField(max_length=100, help_text="1g")
    vd_grasas_trans = models.IntegerField(help_text="%")

    fibra = models.CharField(max_length=100, help_text="1g")
    vd_fibra = models.IntegerField(help_text="%")

    sodio = models.CharField(max_length=100, help_text="500mg")
    vd_sodio = models.IntegerField(help_text="%")


class Galeria(models.Model):

    imagen = models.ImageField()
    product = models.ForeignKey(
        Product, blank=True, null=True, on_delete=models.CASCADE, related_query_name="galeria", related_name="galeria")
