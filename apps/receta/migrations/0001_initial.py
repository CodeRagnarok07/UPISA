# Generated by Django 4.1 on 2022-09-05 01:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0012_rename_conservador_product_conservante'),
    ]

    operations = [
        migrations.CreateModel(
            name='Receta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=500)),
                ('descripcion', models.TextField()),
                ('personas', models.IntegerField(default=1)),
                ('ingredientes', models.TextField(blank=True, null=True)),
                ('preparacion', models.TextField(blank=True, null=True)),
                ('productos_sugeridos', models.ManyToManyField(blank=True, to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='Galeria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagen', models.ImageField(upload_to='')),
                ('nombre', models.CharField(blank=True, help_text='ayuda al posicionamiento SEO', max_length=500, null=True)),
                ('receta', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='galeria', to='receta.receta')),
            ],
        ),
    ]