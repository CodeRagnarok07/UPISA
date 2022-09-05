from django.db import models

# Create your models here.

class TrucosYConsejos(models.Model):
    titulo = models.CharField(max_length=255)
    contenido = models.TextField()
    video = models.URLField(blank=True, null=True)

class Galeria(models.Model):
    imagen = models.ImageField()
    nombre = models.CharField(max_length=500,blank=True, null=True, help_text="ayuda al posicionamiento SEO")
    post = models.ForeignKey(
        TrucosYConsejos, blank=True, null=True, on_delete=models.CASCADE, related_name="galeria")