# Generated by Django 4.1 on 2022-10-15 20:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='novedades',
            name='tag',
        ),
        migrations.AlterField(
            model_name='novedades',
            name='publicar',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='fecha de publicacion'),
        ),
        migrations.AlterField(
            model_name='trucosyconsejos',
            name='publicar',
            field=models.DateTimeField(auto_now_add=True, verbose_name='date published'),
        ),
    ]