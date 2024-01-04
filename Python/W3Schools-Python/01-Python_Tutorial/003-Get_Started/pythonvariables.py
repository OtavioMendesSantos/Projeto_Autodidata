# Não temos comandos de declaração de variáveis em python, a variável é declarada no momento que atribuimos um valor a ela.
# Variáveis são dinamicamente tipadas.

x = 10      # type int
x = "Olá"   # type str 

print(x)

# Se você quiser especificar o tipo de dados de uma variável, isso pode ser feito com conversão (casting).

x = str(3)      # Será '3'
y = int(3)      # Será 3
z = float(3)    # Será 3.0

# Podemos ver o tipo de uma variável com a função " type() "

print(type(x))
print(type(y))
print(type(z))

# python é uma linguagem case sensitive (a != A)
# Podemos definir vários valores em uma única linha
a, b, c = "abacate", "banana", "cajamanga" 

print(a)
print(b)
print(c)

# Podemos definir o mesmo valor para várias variáveis ao mesmo tempo

d = e = f = "tutti-fruti"

print(d, e, f)

# Quando criamos uma variável dentro de uma função, o escopo dela está limitado ao escopo da função. Para tornar esse escopo global, usamos a keyword global antes da variável.

x = "awesome"

def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)