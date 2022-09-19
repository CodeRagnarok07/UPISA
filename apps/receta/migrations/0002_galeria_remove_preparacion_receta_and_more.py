# Generated by Django 4.1 on 2022-09-18 01:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('receta', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Galeria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagen', models.ImageField(upload_to='')),
            ],
        ),
        migrations.RemoveField(
            model_name='preparacion',
            name='receta',
        ),
        migrations.RenameField(
            model_name='receta',
            old_name='galeria',
            new_name='ingredientes',
        ),
        migrations.RenameField(
            model_name='receta',
            old_name='personas',
            new_name='porcion_personas',
        ),
        migrations.AddField(
            model_name='receta',
            name='ingredientes_en',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='receta',
            name='ingredientes_es',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='receta',
            name='ingredientes_ru',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='receta',
            name='ingredientes_zh_hans',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='receta',
            name='preparacion',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='receta',
            name='preparacion_en',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='receta',
            name='preparacion_es',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='receta',
            name='preparacion_ru',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='receta',
            name='preparacion_zh_hans',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='receta',
            name='tiempo_preparacion',
            field=models.CharField(default=1, max_length=500),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Ingredientes',
        ),
        migrations.DeleteModel(
            name='Preparacion',
        ),
        migrations.AddField(
            model_name='galeria',
            name='receta',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='galeria', to='receta.receta'),
        ),
    ]