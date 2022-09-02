from operator import mod
from django.db import models

# Create your models here.


class Ingrediente(models.Model):
    name = models.CharField(max_length=500)

    def __str__(self) -> str:
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=500)

    porcion = models.IntegerField()


    destacado = models.BooleanField(default=True)
    ingredientes = models.ManyToManyField(Ingrediente, blank=True)
    galery = models.TextField()

    antioxidante = models.CharField(max_length=255, blank=True)
    estabilizante = models.CharField(max_length=255, blank=True)
    conservador = models.CharField(max_length=255, blank=True)


    energetico = models.CharField(max_length=100)

