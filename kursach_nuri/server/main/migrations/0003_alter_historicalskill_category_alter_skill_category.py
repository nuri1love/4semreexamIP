# Generated by Django 4.0.4 on 2022-05-28 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_historicalskill_title_alter_skill_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historicalskill',
            name='category',
            field=models.CharField(max_length=255, verbose_name='Категория'),
        ),
        migrations.AlterField(
            model_name='skill',
            name='category',
            field=models.CharField(max_length=255, verbose_name='Категория'),
        ),
    ]
