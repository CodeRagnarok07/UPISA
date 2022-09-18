from django.db import models
from products.models import Product
# Create your models here.

class Receta(models.Model):
    nombre = models.CharField(max_length=500)
    url = models.CharField(max_length=500, unique=True)
    miniatura = models.ImageField()


    tiempo_preparacion = models.CharField(max_length=500)
    porcion_personas = models.IntegerField(default=1)

    descripcion = models.TextField()
    ingredientes = models.TextField()
    preparacion = models.TextField()

    productos_sugeridos = models.ManyToManyField(Product, blank=True)

    def __str__(self) -> str:
        return self.nombre

class Galeria(models.Model):
    imagen = models.ImageField()
    receta = models.ForeignKey(
        Receta, blank=True, null=True, on_delete=models.CASCADE, related_name="galeria")

# class Ingredientes(models.Model):
#     nombre = models.CharField(max_length=500)
#     receta = models.ForeignKey(
#         Receta, blank=True, null=True, on_delete=models.CASCADE, related_name="ingredientes")

# class Preparacion(models.Model):
#     nombre = models.CharField(max_length=500)
#     receta = models.ForeignKey(
#         Receta, blank=True, null=True, on_delete=models.CASCADE, related_name="preparacion")

    