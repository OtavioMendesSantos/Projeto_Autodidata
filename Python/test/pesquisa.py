# m - matricula, a - ano, s - semestre atual 
def qual_periodo(m:int, a:int, s:int) -> int:
    ano_ingreso = m // 100
    semestre_ingresso = (m % 100) // 10
    semestres_ano = ( a - ( 2000 + ano_ingreso )) * 2
    semestre_atual = semestres_ano + s
    return semestre_atual

print(qual_periodo(200012345, 2020, 0))
print(qual_periodo(200054321, 2020, 1))
print(qual_periodo(180134242, 2020, 0))