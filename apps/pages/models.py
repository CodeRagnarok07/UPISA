from django.db import models

# Create your models here.


def upload_path(instance, filename):
    if " " in instance.seccion.pagina.titulo:
        instance.seccion.pagina.titulo.replace(" ", "_")
    return '/'.join(['page',instance.seccion.pagina.titulo, filename])



class Pagina(models.Model):
    titulo = models.CharField(max_length=500, blank=True,null=True)
    text = models.TextField(max_length=500, blank=True,null=True)

    def __str__(self):
        return f"{self.id} {self.titulo}"


class Seccion(models.Model):
    """representa los h2 de cada pagina"""
    titulo = models.CharField(max_length=500,blank=True,null=True)
    text = models.TextField(blank=True,null=True)
    pagina = models.ForeignKey(Pagina, on_delete=models.CASCADE, related_name="seccion")
    def __str__(self):
        return f'#{self.id} {self.titulo}  {self.pagina.titulo}'

class Contenido(models.Model):
    """representa los h3 de cada seccion de pagina"""
    titulo = models.CharField(max_length=500,blank=True,null=True)
    text = models.TextField(blank=True,null=True)
    imagen = models.ImageField(blank=True,null=True, upload_to=upload_path)
    seccion = models.ForeignKey(Seccion, on_delete=models.CASCADE, related_name="contenido")
    def __str__(self):
        return f'#{self.id} {self.titulo} {self.seccion.titulo}'


