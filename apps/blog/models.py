from django.db import models

# Create your models here.

class TrucosYConsejos(models.Model):
    titulo = models.CharField(max_length=500)
    url = models.CharField(max_length=500)
    miniatura = models.ImageField()

    
    video = models.URLField(blank=True, null=True, help_text="si este campo no esta vacío, las imágenes agregadas no serán usadas")
    contenido = models.TextField()


    def __str__(self):
        return self.titulo

class Galeria(models.Model):
    imagen = models.ImageField()
    post = models.ForeignKey(
        TrucosYConsejos, blank=True, null=True, on_delete=models.CASCADE, related_name="galeria")