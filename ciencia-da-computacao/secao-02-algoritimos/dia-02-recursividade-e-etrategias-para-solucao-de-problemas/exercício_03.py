# Crie um algoritmo recursivo que encontre,
# em uma lista, o maior número inteiro.


def define_major_integer(n):
    major = 0
    for i in range(len(n)):
        if n[i] > major:
            major = n[i]
    print(major)


define_major_integer([5, 4, 9, 10])
