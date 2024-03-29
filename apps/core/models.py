from django.db import models

# Create your models here.


class Sucursales(models.Model):
    nombre = models.CharField(max_length=256)
    mapa = models.URLField(max_length=256, blank=True, null=True)
    direccion = models.CharField(max_length=501, blank=True, null=True)
    tlf = models.CharField(max_length=256, blank=True, null=True)
    email = models.EmailField(max_length=256, blank=True, null=True)
    es_central = models.BooleanField(default=False)
    def __str__(self) -> str:
        return self.nombre
    
    def save(self, *args, **kwargs):
        if self.es_central:
            try:
                temp = Sucursales.objects.get(es_central=True)
                if self != temp:
                    temp.es_central = False
                    temp.save()
            except Sucursales.DoesNotExist:
                pass
        super(Sucursales, self).save(*args, **kwargs)


class HomeBanner(models.Model):
    order = models.IntegerField(unique=True)
    text_cont_img = models.ImageField(upload_to="banners")
    desktop = models.ImageField( help_text="845px de alto  // 1920px de ancho", upload_to="banners")
    movil = models.ImageField( help_text="360px de alto // 360px de ancho", upload_to="banners")

    #  only 1920px x 845

    def __str__(self):
        return f'banner {self.order}'


    

