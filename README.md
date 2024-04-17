# Boolean Algebra Laws

### Distributivity
1. x || (y && z) == (x || y) && (x || z)
2. x && (y || z) == (x && y) || (x && z)

### DeMorgan Law
1. !(x && y) === !x || !y
2. !(x || y) === !x && !y

### Associativity
1. x || (y || z) == (x || y) || z
2. x && (y && z) == (x && y) && z

### Commutativity
1. x || y == y || x
2. x && y == y && x

### Identity
1. x || false == x
2. x && true == x

### Annihilation
1. x || true == true
2. x && false == false

### Idempotence
1. x || x == x
2. x && x == x

### Absorption
1. x && (x || y) == x
2. x || (x && y) == x

### Complementation
1. x && !x == false
2. x || !x == true

### Double Negation
1. !!x == x