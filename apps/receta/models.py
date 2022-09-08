from pyexpat import model
from django.db import models
from products.models import Product
# Create your models here.

class Receta(models.Model):
    nombre = models.CharField(max_length=500)
    descripcion = models.TextField()
    galeria = models.TextField()
    personas = models.IntegerField(default=1)
    productos_sugeridos = models.ManyToManyField(Product, blank=True)


# class Galeria(models.Model):
#     nombre = models.CharField(max_length=500,blank=True, null=True, help_text="ayuda al posicionamiento SEO")
#     imagen = models.ImageField()
#     receta = models.ForeignKey(
#         Receta, blank=True, null=True, on_delete=models.CASCADE, related_name="galeria")

class Ingredientes(models.Model):
    nombre = models.CharField(max_length=500)
    receta = models.ForeignKey(
        Receta, blank=True, null=True, on_delete=models.CASCADE, related_name="ingredientes")

class Preparacion(models.Model):
    nombre = models.CharField(max_length=500)
    receta = models.ForeignKey(
        Receta, blank=True, null=True, on_delete=models.CASCADE, related_name="preparacion")

    