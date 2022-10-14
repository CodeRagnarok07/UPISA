from django.db import models

# Create your models here.
class Tag(models.Model):
    nombre = models.CharField(max_length=500)
    icon = models.TextField()
    def __str__(self):
        return self.nombre


class TrucosYConsejos(models.Model):
    titulo = models.CharField(max_length=500)
    url = models.CharField(max_length=500)
    miniatura = models.ImageField()
    contenido = models.TextField()
    tag = models.ManyToManyField(Tag)
    def __str__(self):
        return self.titulo

class Novedades(models.Model):
    titulo = models.CharField(max_length=500)
    url = models.CharField(max_length=500)
    miniatura = models.ImageField()
    contenido = models.TextField()
    tag = models.ManyToManyField(Tag)
    def __str__(self):
        return self.titulo

class GaleriaTrucosYConsejos(models.Model):
    imagen = models.ImageField()
    post = models.ForeignKey(
        TrucosYConsejos, blank=True, null=True, on_delete=models.CASCADE, related_name="galeria")

class GaleriaNovedades(models.Model):
    imagen = models.ImageField()
    post = models.ForeignKey(
        Novedades, blank=True, null=True, on_delete=models.CASCADE, related_name="galeria")