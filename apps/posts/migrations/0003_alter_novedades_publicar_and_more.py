# Generated by Django 4.1 on 2022-10-16 16:26

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_remove_novedades_tag_alter_novedades_publicar_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='novedades',
            name='publicar',
            field=models.DateField(blank=True, default=datetime.datetime.now, verbose_name='fecha de publicacion'),
        ),
        migrations.AlterField(
            model_name='trucosyconsejos',
            name='publicar',
            field=models.DateField(blank=True, default=datetime.datetime.now, verbose_name='fecha de publicacion'),
        ),
    ]