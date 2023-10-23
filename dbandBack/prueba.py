from datetime import datetime, timedelta

def restar_dias(fecha, dias):
    fecha_original = datetime.strptime(fecha, '%Y-%m-%d')
    nueva_fecha = fecha_original - timedelta(days=dias)
    return nueva_fecha.strftime('%A'), nueva_fecha.strftime('%Y-%m-%d')

# Obtener la fecha de hoy
fecha_hoy = datetime.today().strftime('%Y-%m-%d')

# Número de días a restar
dias_a_restar = int(input("Ingresa el número de días a restar: "))

# Obtener el día y fecha después de restar los días
nuevo_dia, nueva_fecha = restar_dias(fecha_hoy, dias_a_restar)

print(f"Después de restar {dias_a_restar} días a {fecha_hoy}, obtienes un {nuevo_dia} y la fecha {nueva_fecha}.")
