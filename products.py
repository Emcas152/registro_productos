import csv

# Nombre del archivo
archivo = "productos_1000.csv"

# Variables de control
precios = []
productos = []
mayor_stock = {"nombre": None, "stock": -1}

# Leer el CSV
with open(archivo, newline="", encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        nombre = row["nombre"]
        precio = float(row["precio"])
        stock = int(row["stock"])

        precios.append(precio)
        productos.append(nombre)

        # Verificar mayor stock
        if stock > mayor_stock["stock"]:
            mayor_stock = {"nombre": nombre, "stock": stock}

# Cálculos
promedio_precios = sum(precios) / len(precios) if precios else 0
total_productos = len(productos)

# Resultados
print(f"📌 Promedio de precios: {promedio_precios:.2f}")
print(f"📌 Producto con mayor stock: {mayor_stock['nombre']} (Stock: {mayor_stock['stock']})")
print(f"📌 Total de productos: {total_productos}")
