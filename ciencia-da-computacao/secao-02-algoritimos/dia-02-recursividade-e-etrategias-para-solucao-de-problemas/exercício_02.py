# Transforme o algoritmo criado acima em recursivo.

# def cont_pairs(n):
#     count = 0
#     for i in range(1, n + 1):
#         if i % 2 == 0:
#             count += 1
#     return count


def count_pairs(n):
    if n == 1:
        return 0
    if n % 2 == 0:
        return 1 + count_pairs(n - 1)
    else:
        return count_pairs(n - 1)


count_pairs(5)
