# Generated by Django 3.2.19 on 2023-05-26 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20221209_1521'),
    ]

    operations = [
        migrations.CreateModel(
            name='HomeBanner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order', models.IntegerField(unique=True)),
                ('desktop', models.ImageField(upload_to='')),
                ('movil', models.ImageField(upload_to='')),
            ],
        ),
    ]
