# Generated by Django 3.2.19 on 2023-07-03 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sucursales',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=256)),
                ('mapa', models.URLField(blank=True, max_length=256, null=True)),
                ('direccion', models.CharField(blank=True, max_length=501, null=True)),
                ('tlf', models.CharField(blank=True, max_length=256, null=True)),
                ('email', models.EmailField(blank=True, max_length=256, null=True)),
                ('es_central', models.BooleanField(default=False)),
            ],
        ),
    ]
