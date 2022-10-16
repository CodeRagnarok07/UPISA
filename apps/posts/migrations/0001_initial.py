# Generated by Django 4.1 on 2022-10-15 20:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=500)),
                ('nombre_es', models.CharField(max_length=500, null=True)),
                ('nombre_en', models.CharField(max_length=500, null=True)),
                ('nombre_ru', models.CharField(max_length=500, null=True)),
                ('nombre_zh_hans', models.CharField(max_length=500, null=True)),
                ('icon', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='TrucosYConsejos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=500)),
                ('titulo_es', models.CharField(max_length=500, null=True)),
                ('titulo_en', models.CharField(max_length=500, null=True)),
                ('titulo_ru', models.CharField(max_length=500, null=True)),
                ('titulo_zh_hans', models.CharField(max_length=500, null=True)),
                ('url', models.CharField(max_length=500)),
                ('miniatura', models.ImageField(upload_to='')),
                ('contenido', models.TextField()),
                ('contenido_es', models.TextField(null=True)),
                ('contenido_en', models.TextField(null=True)),
                ('contenido_ru', models.TextField(null=True)),
                ('contenido_zh_hans', models.TextField(null=True)),
                ('publicar', models.DateTimeField(verbose_name='date published')),
                ('tag', models.ManyToManyField(to='posts.tag')),
            ],
        ),
        migrations.CreateModel(
            name='Novedades',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=500)),
                ('titulo_es', models.CharField(max_length=500, null=True)),
                ('titulo_en', models.CharField(max_length=500, null=True)),
                ('titulo_ru', models.CharField(max_length=500, null=True)),
                ('titulo_zh_hans', models.CharField(max_length=500, null=True)),
                ('url', models.CharField(max_length=500)),
                ('miniatura', models.ImageField(upload_to='')),
                ('contenido', models.TextField()),
                ('contenido_es', models.TextField(null=True)),
                ('contenido_en', models.TextField(null=True)),
                ('contenido_ru', models.TextField(null=True)),
                ('contenido_zh_hans', models.TextField(null=True)),
                ('publicar', models.DateTimeField(verbose_name='date published')),
                ('tag', models.ManyToManyField(to='posts.tag')),
            ],
        ),
        migrations.CreateModel(
            name='GaleriaTrucosYConsejos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagen', models.ImageField(upload_to='')),
                ('post', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='galeria', to='posts.trucosyconsejos')),
            ],
        ),
        migrations.CreateModel(
            name='GaleriaNovedades',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagen', models.ImageField(upload_to='')),
                ('post', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='galeria', to='posts.novedades')),
            ],
        ),
    ]
