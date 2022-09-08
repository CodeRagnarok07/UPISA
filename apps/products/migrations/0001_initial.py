# Generated by Django 4.1 on 2022-09-07 20:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Antioxidante',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=500)),
                ('nombre_es', models.CharField(max_length=500, null=True)),
                ('nombre_en', models.CharField(max_length=500, null=True)),
                ('nombre_ru', models.CharField(max_length=500, null=True)),
                ('nombre_zh_hans', models.CharField(max_length=500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='CategoriaSub',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=500)),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.categoria')),
            ],
        ),
        migrations.CreateModel(
            name='Conservador',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=500)),
                ('nombre_es', models.CharField(max_length=500, null=True)),
                ('nombre_en', models.CharField(max_length=500, null=True)),
                ('nombre_ru', models.CharField(max_length=500, null=True)),
                ('nombre_zh_hans', models.CharField(max_length=500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Estabilizante',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=500)),
                ('nombre_es', models.CharField(max_length=500, null=True)),
                ('nombre_en', models.CharField(max_length=500, null=True)),
                ('nombre_ru', models.CharField(max_length=500, null=True)),
                ('nombre_zh_hans', models.CharField(max_length=500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Ingrediente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=500)),
                ('nombre_es', models.CharField(max_length=500, null=True)),
                ('nombre_en', models.CharField(max_length=500, null=True)),
                ('nombre_ru', models.CharField(max_length=500, null=True)),
                ('nombre_zh_hans', models.CharField(max_length=500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=500)),
                ('nombre_es', models.CharField(max_length=500, null=True)),
                ('nombre_en', models.CharField(max_length=500, null=True)),
                ('nombre_ru', models.CharField(max_length=500, null=True)),
                ('nombre_zh_hans', models.CharField(max_length=500, null=True)),
                ('destacado', models.BooleanField(default=True)),
                ('porcion', models.IntegerField(blank=True, help_text='numerico g por unidad', null=True)),
                ('antioxidante', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_query_name='products', to='products.antioxidante')),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', related_query_name='products', to='products.categoria')),
                ('conservante', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_query_name='products', to='products.conservador')),
                ('estabilizante', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_query_name='products', to='products.estabilizante')),
                ('ingredientes', models.ManyToManyField(blank=True, related_query_name='products', to='products.ingrediente')),
                ('sub_categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_query_name='products', to='products.categoriasub')),
            ],
        ),
        migrations.CreateModel(
            name='ValoresNutricionales',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('energetico', models.CharField(help_text='ejemplo 150 Kcal', max_length=100)),
                ('vd_energetico', models.IntegerField(help_text='%')),
                ('carbohidratos', models.CharField(help_text='1g', max_length=100)),
                ('vd_carbohidratos', models.IntegerField(help_text='%')),
                ('proteinas', models.CharField(help_text='1g', max_length=100)),
                ('vd_proteinas', models.IntegerField(help_text='%')),
                ('grasas', models.CharField(help_text='1g', max_length=100)),
                ('vd_grasas', models.IntegerField(help_text='%')),
                ('grasas_saturadas', models.CharField(help_text='1g', max_length=100)),
                ('vd_grasas_saturadas', models.IntegerField(help_text='%')),
                ('grasas_trans', models.CharField(help_text='1g', max_length=100)),
                ('vd_grasas_trans', models.IntegerField(help_text='%')),
                ('fibra', models.CharField(help_text='1g', max_length=100)),
                ('vd_fibra', models.IntegerField(help_text='%')),
                ('sodio', models.CharField(help_text='500mg', max_length=100)),
                ('vd_sodio', models.IntegerField(help_text='%')),
                ('product', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='valores_nutricionales', related_query_name='valores_nutricionales', to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='Galeria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, help_text='ayuda al posicionamiento SEO', max_length=500, null=True)),
                ('nombre_es', models.CharField(blank=True, help_text='ayuda al posicionamiento SEO', max_length=500, null=True)),
                ('nombre_en', models.CharField(blank=True, help_text='ayuda al posicionamiento SEO', max_length=500, null=True)),
                ('nombre_ru', models.CharField(blank=True, help_text='ayuda al posicionamiento SEO', max_length=500, null=True)),
                ('nombre_zh_hans', models.CharField(blank=True, help_text='ayuda al posicionamiento SEO', max_length=500, null=True)),
                ('imagen', models.ImageField(upload_to='')),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='galeria', related_query_name='galeria', to='products.product')),
            ],
        ),
    ]
