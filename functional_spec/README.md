# Functional Suite

## Test : create_parking_slot {slot}
- create_parking_lot 6

## Test : park {regNo}
- park KA-01-HH-1234
- park KA-01-HH-9999
- park KA-01-BB-0001
- park KA-01-HH-7777
- park KA-01-HH-2701
- park KA-01-HH-3141

## Test : leave {regNo} {hours}
- leave KA-01-HH-3141 4

## Test : status
- status
- park KA-01-P-333
- park DL-12-AA-9999