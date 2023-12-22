so number next to a symbol per line is straight forward, 

complicated part is diagonals as it can be above or below, so you need 3 lines

seems like grid length is fixed size, each spot taking up 1 char
140x140



row y, col n digit
row y-1, col n (bottom) (could be foreach digit in number)
row y+1, col n (above)
row y, col n-1 (left)
row y, col n + digit.length (right)

// diagonals for symbols from digit start
row y-1, col n-1 (top left)
row y-1, col n + digit.length (top right)
row y+1, col n-1 (bottom left)
row y+1, col n + digit.length (bottom right)


what are symbols:
[*, -, /, @, &, =, #, %, $, +], - something that is not . and not a digit

