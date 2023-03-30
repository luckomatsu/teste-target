/*Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

Distância = 100km
tempo de pedágio do carro = 0h
tempo de pedágio do caminhão = 

Franca 0km ----------------------------------> Ribeirão 100km
carro(a)--->                                    <---caminhão(b)

função retílinea uniforme: s = s0 + v * t

s0(a) = 0
v(a) = 110km/h
função {
  s(a) = 0 + 110 * t(a)
  s(a) = 110 * t(a)
}

s0(b) = 100km
v(b) = -80km/h
função {
  s(b) = 100 + (-80) * t(b)
  s(b) = 100 - 80 * t(b)
}

tempo de viagem do caminhão sem obstáculos
0 = 100 - 80 * t(b)
80 * t(b) = 100
t(b) = 100/80 = 1,25h
Então o tempo médio da viagem com o pedágio é de:
1,25h + 0,17h = 1,42h
Sua velocidade média é:
0 = 100 + (-v) * 1,42
0 = 100 - 1,42*v
v = 100/1,42 = 70,4km/h

O ponto de encontro será o mesmo então
s(a) = s(b)
110t = 100 -70,4t
180,4t = 100
t = 100/180,4
t = 0,55h

Então:
s(b) = 100 - 70,4 * 0,55
s(b) = 61,28 km

Como o ponto de encontro é 61,28km, ambos estão a mesma distância de Ribeirão Preto
*/